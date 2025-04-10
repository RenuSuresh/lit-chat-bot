// timestamp-divider.ts
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./styles.css";

@customElement("timestamp-divider")
export class TimestampDivider extends LitElement {
	static styles = styles;
	@property({ type: String }) timestamp = "";
	@property({ type: Date }) date?: Date;

	private get displayTimestamp() {
		const options: Intl.DateTimeFormatOptions = {
			hour: "2-digit",
			minute: "2-digit",
		};

		return new Intl.DateTimeFormat(navigator.language, options).format(
			this.date
		);
	}

	render() {
		return html`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`;
	}
}
