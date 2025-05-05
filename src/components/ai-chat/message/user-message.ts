import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { commonStyles } from "../styles.css";
import { styles } from "./message.css";
import type { ChatMessage } from "../types/message.types";

@customElement("user-message")
export class UserMessage extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: Object }) message: ChatMessage | undefined;

	render() {
		return html`
			<div class="user-message-container">
				<div class="user-message-content">
					<div class="user-message">${this.message?.text}</div>
				</div>
				<div class="user-timestamp">${this.message?.time}</div>
			</div>
		`;
	}
}
