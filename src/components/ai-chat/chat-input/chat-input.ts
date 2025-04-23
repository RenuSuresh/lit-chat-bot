import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./chat-input.css";
const maxHeight = 72;
const MAX_CHARS = 200;

@customElement("chat-input")
export class ChatInput extends LitElement {
	static styles = [commonStyles, styles];

	@state() private inputValue = "";
	@state() private charCount = 0;

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

	private emitSendMessage() {
		if (this.inputValue.trim() && this.inputValue.length <= MAX_CHARS) {
			this.dispatchEvent(
				new CustomEvent("send-message", {
					detail: { text: this.inputValue },
					bubbles: true,
					composed: true,
				})
			);
			this.inputValue = "";
			this.charCount = 0;
		}
	}
}
