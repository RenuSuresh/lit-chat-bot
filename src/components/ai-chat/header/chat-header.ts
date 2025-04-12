import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { styles } from "./chat-header.css";
import { commonStyles } from "../styles.css";

@customElement("chat-header")
export class ChatHeader extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: String }) closeChatIcon: string = "";
	@property({ attribute: false }) onCloseChat?: () => void;

	private handleCloseChat() {
		this.onCloseChat?.();
	}

	render() {
		return html`
			<div class="header">
				<img
					src=${this.closeChatIcon}
					alt="close"
					width="24"
					height="24"
					@click=${this.handleCloseChat}
				/>
				<div class="chat-title-container">
					<h2 class="chat-title">Chat with Easybot</h2>
					<p class="chat-subtitle">Get help 24/7</p>
				</div>
			</div>
		`;
	}
}
