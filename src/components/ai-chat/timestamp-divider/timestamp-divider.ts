import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./timestamp-divider.css";

@customElement("timestamp-divider")
export class TimestampDivider extends LitElement {
	static styles = [commonStyles, styles];
	@property({ type: String }) timestamp = "";
	@property({ type: Object }) date?: Date;

	render() {
		return html`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">${this.timestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`;
	}
}
