import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { baseDrawerStyles } from "./base-drawer.css";
import { commonStyles } from "../ai-chat/styles.css";

@customElement("base-drawer")
export class BaseDrawer extends LitElement {
	static styles = [commonStyles, baseDrawerStyles];

	@property({ type: Boolean, reflect: true })
	open = false;

	@property({ type: String })
	position: "bottom" | "center" = "bottom";

	@property({ type: Boolean })
	private isClosing = false;

	@property({ type: Boolean })
	showCloseButton = true;

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
		window.removeEventListener("popstate", this.popStateHandler);
	}

	updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			this.toggleBodyOverflow(this.open);
			if (this.open) {
				history.pushState({ drawer: true }, "");
			}
		}
	}

	private toggleBodyOverflow(open: boolean) {
		document.body.style.overflow = open ? "hidden" : "";
	}

	private handleClose() {
		this.isClosing = true;
		setTimeout(() => {
			this.isClosing = false;
			this.open = false;
			this.dispatchEvent(new CustomEvent("close"));
		}, 300);
	}

	private handleBackdropClick() {
		this.handleClose();
	}

	render() {
		return html`
			${when(
				this.open || this.isClosing,
				() => html`
					<div class="drawer-backdrop" @click=${this.handleBackdropClick}></div>
					<div
						class="drawer-wrapper"
						position=${this.position}
						part="drawer-wrapper"
					>
						<div
							class="drawer-content ${this.isClosing ? "closing" : ""}"
							position=${this.position}
							part="drawer-content"
						>
							${when(
								this.showCloseButton,
								() => html`
									<div
										class="close-button-wrapper"
										position=${this.position}
										part="close-wrapper"
									>
										<button
											class="close-button"
											@click=${this.handleClose}
											part="close-button"
										>
											×
										</button>
									</div>
								`
							)}
							<div
								class="drawer-container"
								position=${this.position}
								part="drawer-container"
							>
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
