import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { styles } from "./chat-info-strip.css";
import { commonStyles } from "../styles.css";
import type { ChatInfo } from "../types/message.types";

@customElement("chat-info-strip")
export class ChatInfoStrip extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: Object }) info?: ChatInfo;
	@property({ type: String }) message: string = "";

	private get displayMessage() {
		if (this.info) {
			return this.info.message;
		}
		return this.message;
	}

	render() {
		return when(
			this.displayMessage?.trim(),
			() => html` <div class="chat-info-strip">${this.displayMessage}</div> `,
			() => html``
		);
	}
}
