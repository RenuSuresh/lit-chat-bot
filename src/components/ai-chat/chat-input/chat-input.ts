import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./chat-input.css";

@customElement("chat-input")
export class ChatInput extends LitElement {
	static styles = [commonStyles, styles];

	@state() private inputValue = "";

	@property({ type: String }) sendMsgEnableImage: string =
		"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";
	@property({ type: String }) sendMsgDisableImage: string =
		"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg";

	render() {
		return html`
			<div class="input-area">
				<input
					type="text"
					placeholder="Type your query here"
					.value=${this.inputValue}
					@input=${this.handleInput}
					@keypress=${this.handleKeyPress}
					class="chat-input"
				/>
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

	private handleInput(e: Event) {
		this.inputValue = (e.target as HTMLInputElement).value;
	}

	private handleKeyPress(e: KeyboardEvent) {
		if (e.key === "Enter" && this.inputValue.trim()) {
			this.emitSendMessage();
		}
	}

	private handleSendClick() {
		this.emitSendMessage();
	}

	private emitSendMessage() {
		this.dispatchEvent(
			new CustomEvent("send-message", {
				detail: { text: this.inputValue },
				bubbles: true,
				composed: true,
			})
		);
		this.inputValue = "";
	}
}
