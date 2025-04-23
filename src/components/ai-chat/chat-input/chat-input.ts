import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./chat-input.css";
import { withChatContext } from "../context/with-chat-context";
import { chatBotApi } from "../../services/chat.service";
import { getCurrentTime } from "../utils/time.utils";
const maxHeight = 72;
const MAX_CHARS = 200;

@customElement("chat-input")
export class ChatInput extends withChatContext(LitElement) {
	static styles = [commonStyles, styles];

	@state() private inputValue = "";
	@state() private charCount = 0;
	@state() private isLoading = false;

	@property({ type: String }) sendMsgEnableImage: string =
		"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";
	@property({ type: String }) sendMsgDisableImage: string =
		"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg";

	render() {
		return html`
			<div class="input-area">
				<div class="container">
					<div class="input-container" @click=${this._focusInput}>
						<textarea
							rows="1"
							.value=${this.inputValue}
							@input=${this._handleInput}
							@keydown=${this._handleKeyPress}
							@focus=${this._handleFocus}
							placeholder="Type your query here"
							class="chat-input"
							maxlength=${MAX_CHARS}
						></textarea>
						${this.charCount > 0
							? html`
									<div
										class="char-count ${this.charCount === MAX_CHARS
											? "limit-reached"
											: ""}"
									>
										${this.charCount}/${MAX_CHARS}
									</div>
							  `
							: ""}
					</div>
				</div>
				<button
					@click=${this.handleSendClick}
					?disabled=${!this.inputValue.trim()}
					class="send-btn"
				>
					<img src=${this.sendMsgEnableImage} width="40" height="40" />
				</button>
			</div>
		`;
	}

	private _focusInput() {
		const textarea = this.shadowRoot?.querySelector("textarea");
		textarea?.focus();
	}

	private _handleFocus() {
		this.shadowRoot
			?.querySelector(".input-container")
			?.classList.add("focused");
	}

	private _adjustHeight() {
		const textarea = this.shadowRoot?.querySelector("textarea");
		if (!textarea) return;

		// Reset height to get correct scrollHeight
		textarea.style.height = "auto";

		// Set height to scrollHeight, but not more than max-height (72px)
		const scrollHeight = textarea.scrollHeight;

		if (scrollHeight <= maxHeight) {
			textarea.style.height = `${scrollHeight}px`;
			textarea.style.overflowY = "hidden";
		} else {
			textarea.style.height = `${maxHeight}px`;
			textarea.style.overflowY = "auto";
		}
	}

	private _handleInput(e: Event) {
		const input = e.target as HTMLInputElement;
		// Ensure we don't exceed max characters
		if (input.value.length > MAX_CHARS) {
			input.value = input.value.slice(0, MAX_CHARS);
		}
		this.inputValue = input.value;
		this.charCount = input.value.length;
		this._adjustHeight();
	}

	private _handleKeyPress(e: KeyboardEvent) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			this.emitSendMessage();
		}
	}

	private handleSendClick() {
		this.emitSendMessage();
	}

	private async emitSendMessage() {
		if (!this.inputValue.trim() || this.isLoading) return;

		this.chatContext.setLoading(true);
		const userMessage = this.inputValue;

		// Add user message
		this.chatContext.addMessage({
			sender: "user",
			text: userMessage,
			time: getCurrentTime(),
		});

		// Clear input before API call
		this.inputValue = "";
		this.charCount = 0;

		// Trigger scroll after user message with delay
		setTimeout(() => this.triggerScroll(), 100);

		try {
			const response = await chatBotApi.sendMessage({
				body: this.chatContext.chatbotData.chatAPI.body,
				message: userMessage,
				conversationId: this.chatContext.conversationId,
			});

			this.chatContext.setConversationId(response.conversation_id);

			const botMessage =
				JSON.parse(response.answer).assistantLastMessage ||
				"Sorry, I encountered an error. Please try again.";

			// Add bot message
			this.chatContext.addMessage({
				sender: "bot",
				text: botMessage,
				time: getCurrentTime(),
			});

			// Trigger scroll after bot message with delay
			setTimeout(() => this.triggerScroll(), 150);
		} catch (error) {
			// Add error message
			this.chatContext.addMessage({
				sender: "bot",
				text: "Sorry, I encountered an error. Please try again.",
				time: getCurrentTime(),
			});
			setTimeout(() => this.triggerScroll(), 100);
		} finally {
			this.chatContext.setLoading(false);
			// Final scroll after everything is complete
			setTimeout(() => this.triggerScroll(), 200);
		}
	}

	private triggerScroll() {
		window.dispatchEvent(new CustomEvent("force-chat-scroll"));
	}
}
