import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("chat-message")
export class ChatMessage extends LitElement {
	static styles = css`
		:host {
			display: block;
			margin-bottom: 12px;
		}
		.message {
			max-width: 80%;
			padding: 8px 12px;
			border-radius: 18px;
			margin: 4px 0;
			word-wrap: break-word;
		}
		.user {
			background-color: #007bff;
			color: white;
			margin-left: auto;
			border-bottom-right-radius: 4px;
		}
		.bot {
			background-color: #f1f1f1;
			color: #333;
			margin-right: auto;
			border-bottom-left-radius: 4px;
		}
	`;

	@property({ type: String }) text = "";
	@property({ type: String }) sender: "user" | "bot" = "user";

	render() {
		return html` <div class="message ${this.sender}">${this.text}</div> `;
	}
}
