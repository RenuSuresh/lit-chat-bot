import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

@customElement("base-drawer")
export class BaseDrawer extends LitElement {
	static styles = css`
		:host {
			display: contents;
		}

		.drawer-wrapper {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1000;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.drawer-content {
			width: 100%;
			transform: translateY(0);
			animation: slideIn 0.3s ease-out;
		}

		.close-button-wrapper {
			position: absolute;
			top: -50px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1001;
			background: transparent;
			border-radius: 50%;
		}

		.close-button {
			width: 32px;
			height: 32px;
			background: white;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
			color: #666;
		}

		.close-button:hover {
			transform: scale(1.05);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		}

		.drawer-container {
			background: white;
			border-radius: 24px 24px 0 0;
			padding: 24px 16px;
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
			position: relative;
		}

		@keyframes slideIn {
			from {
				transform: translateY(100%);
			}
			to {
				transform: translateY(0);
			}
		}

		@keyframes slideOut {
			from {
				transform: translateY(0);
			}
			to {
				transform: translateY(100%);
			}
		}

		.drawer-content.closing {
			animation: slideOut 0.3s ease-out;
		}
	`;

	@property({ type: Boolean, reflect: true })
	open = false;

	@property({ type: Boolean })
	private isClosing = false;

	private backdrop: HTMLDivElement | null = null;

	private popStateHandler = () => {
		if (this.open) {
			this.handleClose();
		}
	};

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("popstate", this.popStateHandler);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.toggleBodyOverflow(false);
		this.removeBackdrop();
		window.removeEventListener("popstate", this.popStateHandler);
	}

	updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			this.toggleBodyOverflow(this.open);

			if (this.open) {
				this.addBackdrop();
				history.pushState({ drawer: true }, "");
			} else {
				this.removeBackdrop();
			}
		}
	}

	private toggleBodyOverflow(open: boolean) {
		document.body.style.overflow = open ? "hidden" : "";
	}

	private handleClose() {
		this.isClosing = true;
		// Wait for animation to complete before actually closing
		setTimeout(() => {
			this.isClosing = false;
			this.open = false;
			this.dispatchEvent(new CustomEvent("close"));
		}, 300); // Match animation duration
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
		this.handleClose();
	}

	render() {
		return html`
			${when(
				this.open || this.isClosing,
				() => html`
					<div class="drawer-wrapper">
						<div class="drawer-content ${this.isClosing ? "closing" : ""}">
							<div class="close-button-wrapper">
								<button class="close-button" @click=${this.handleClose}>
									×
								</button>
							</div>
							<div class="drawer-container">
								<slot></slot>
							</div>
						</div>
					</div>
				`,
				() => html``
			)}
		`;
	}
}
