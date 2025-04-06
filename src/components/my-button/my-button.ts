import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-button")
export class MyButton extends LitElement {
	static styles = css`
		button {
			background: var(--my-button-bg, #6200ee);
			color: white;
			border: none;
			border-radius: 4px;
			padding: 10px 20px;
			font-size: 16px;
			cursor: pointer;
			transition: background 0.3s;
		}
		button:hover {
			background: var(--my-button-hover-bg, #3700b3);
		}
	`;

	@property()
	label = "Click me";

	render() {
		return html`<button @click=${this.handleClick}>${this.label}</button>`;
	}

	private handleClick() {
		this.dispatchEvent(
			new CustomEvent("my-click", { bubbles: true, composed: true })
		);
	}
}
