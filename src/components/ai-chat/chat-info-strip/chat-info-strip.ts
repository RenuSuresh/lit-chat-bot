import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

import { styles } from "./chat-info-strip.css";
import { commonStyles } from "../styles.css";

@customElement("chat-info-strip")
export class ChatInfoStrip extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: String }) message: string = "";

	render() {
		return when(
			this.message?.trim(),
			() => html`<div class="chat-info-strip">${this.message}</div>`,
			() => html``
		);
	}
}
