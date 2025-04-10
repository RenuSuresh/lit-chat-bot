import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./chat-loader.css";

@customElement("loading-dots")
export class LoadingDots extends LitElement {
	static styles = styles;

	render() {
		return html`
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		`;
	}
}
