import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { commonStyles } from "../styles.css";
import { styles } from "./message.css";
import type { ChatMessage } from "../types/message.types";

@customElement("bot-message")
export class BotMessage extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: Object }) message!: ChatMessage;
	@property({ type: String }) botImage: string = "";

	render() {
		return html`
			<div class="bot-message-container">
				<div class="bot-message-content">
					<img src=${this.botImage} alt="bot" width="40" height="40" />
					<div class="bot-message">${unsafeHTML(this.message.text)}</div>
				</div>
				<div class="bot-timestamp">${this.message.time}</div>
			</div>
		`;
	}
}
