import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./chat-loader.css";

@customElement("chat-loader")
export class ChatLoader extends LitElement {
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
