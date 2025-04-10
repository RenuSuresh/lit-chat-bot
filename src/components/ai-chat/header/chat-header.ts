import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { styles } from "./chat-header.css";
import { commonStyles } from "../styles.css";

@customElement("chat-header")
export class ChatHeader extends LitElement {
	static styles = [commonStyles, styles];

	render() {
		return html`
			<div class="header">
				<h2 class="chat-title">Chat with Easybot</h2>
				<p class="chat-subtitle">Get help 24/7</p>
			</div>
		`;
	}
}
