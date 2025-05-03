import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./chat-input.css";
import { withChatContext } from "../../../context/with-chat-context";
import { chatBotApi } from "../../../services/chat.service";
import { safeJsonParse } from "../../../utils/json.util";

const maxHeight = 72;
const MAX_CHARS = 200;

@customElement("chat-input")
export class ChatInput extends withChatContext(LitElement) {
	static styles = [commonStyles, styles];

	@state() private inputValue = "";
	@state() private charCount = 0;

	@property({ type: String }) sendMsgEnableImage: string =
		"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";
	@property({ type: String }) sendMsgDisableImage: string =
		"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disabled.svg";

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

	private emitSendMessage() {
		if (
			this.inputValue.trim() &&
			this.inputValue.length <= MAX_CHARS &&
			!this.chatContext.isLoading
		) {
			this.handleSendMessage({
				detail: { text: this.inputValue },
				bubbles: true,
				composed: true,
			});
			this.inputValue = "";
			this.charCount = 0;
		}
	}

	private async handleSendMessage(e: any) {
		// this.handleInputActivity(); // Reset timer when message is sent
		this.chatContext.setLoading(true);
		const userMessage = e.detail.text;

		// Add user message
		this.chatContext.appendMessage({
			type: "query",
			text: userMessage,
			time: this.getCurrentTime(),
		});
		const root = document.querySelector("ai-chat");

		// Get the chat message list and force scroll
		const chatMessageList =
			root?.shadowRoot?.querySelector("chat-message-list");
		if (chatMessageList) {
			(chatMessageList as any).forceScrollToBottom();
		}

		// Reset chat input height
		const chatInput = this.shadowRoot?.getElementById("chat-input");
		if (chatInput) {
			chatInput.style.height = "auto";
			chatInput.style.height = "18px"; // Reset to initial height
		}

		try {
			const response = await chatBotApi.sendMessage({
				body: this.chatContext.chatbotData.chatAPI.body,
				message: userMessage,
				conversationId: this.chatContext.conversationId,
			});

			const botMessage: any = safeJsonParse(response.answer);

			this.chatContext.appendMessage(botMessage[0]);

			// Force scroll after bot message
			if (chatMessageList) {
				(chatMessageList as any).forceScrollToBottom();
			}
		} catch (error) {
			// Add error message
			this.chatContext.appendMessage({
				type: "answer",
				text: "Sorry, I encountered an error. Please try again.",
				time: this.getCurrentTime(),
			});

			// Force scroll after error message
			if (chatMessageList) {
				(chatMessageList as any).forceScrollToBottom();
			}
		} finally {
			this.chatContext.setLoading(false);
		}

		if (
			userMessage.includes("no, thanks") ||
			userMessage.includes("no thanks") ||
			userMessage.includes("that's all")
		) {
			// this.handleEndConversation();
			console.log("handle end conversation>>>>");
		}
	}

	private getCurrentTime(): string {
		return new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

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
							id="chat-input"
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
					?disabled=${!this.inputValue.trim() || this.chatContext.isLoading}
					class="send-btn"
				>
					<img
						src=${!this.inputValue.trim() || this.chatContext.isLoading
							? this.sendMsgDisableImage
							: this.sendMsgEnableImage}
						width="40"
						height="40"
					/>
				</button>
			</div>
		`;
	}
}
