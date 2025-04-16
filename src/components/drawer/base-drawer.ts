import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("base-drawer")
export class BaseDrawer extends LitElement {
	static styles = css`
		:host {
			display: contents;
		}

		.drawer-container {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background: white;
			border-radius: 16px 16px 0 0;
			padding: 24px;
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
			transform: translateY(100%);
			transition: transform 0.3s ease-out;
			z-index: 1000;
		}

		:host([open]) .drawer-container {
			transform: translateY(0);
		}

		.close-button {
			position: absolute;
			top: 16px;
			right: 16px;
			background: none;
			border: none;
			font-size: 20px;
			cursor: pointer;
			color: #999;
		}
	`;

	@property({ type: Boolean, reflect: true })
	open = false;

	private backdrop: HTMLDivElement | null = null;

	connectedCallback() {
		super.connectedCallback();
		document.body.style.overflow = "hidden";
	}

	willUpdate(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			this.toggleBodyOverflow(this.open);
			this.toggleBackdrop(this.open);
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.toggleBodyOverflow(false);
		this.removeBackdrop();
	}

	updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			if (this.open) {
				this.addBackdrop();
			} else {
				this.removeBackdrop();
			}
		}
	}

	private toggleBodyOverflow(open: boolean) {
		document.body.style.overflow = open ? "hidden" : "";
	}

	private toggleBackdrop(show: boolean) {
		if (show) {
			this.addBackdrop();
		} else {
			this.removeBackdrop();
		}
	}

	private addBackdrop() {
		if (this.backdrop) return;

		this.backdrop = document.createElement("div");
		this.backdrop.className = "drawer-backdrop";
		this.backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease-out;
        `;
		this.backdrop.addEventListener(
			"click",
			this.handleBackdropClick.bind(this)
		);
		document.body.appendChild(this.backdrop);

		requestAnimationFrame(() => {
			if (this.backdrop) {
				this.backdrop.style.opacity = "1";
			}
		});
	}

	private removeBackdrop() {
		if (this.backdrop) {
			this.backdrop.remove();
			this.backdrop = null;
		}
	}

	private handleBackdropClick() {
		this.open = false;
		this.dispatchEvent(new CustomEvent("close"));
	}

	render() {
		return html`
			<div class="drawer-container">
				<button class="close-button" @click=${this.handleBackdropClick}>
					×
				</button>
				<slot></slot>
			</div>
		`;
	}
}
