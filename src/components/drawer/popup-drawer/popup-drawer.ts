import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../base-drawer";
import { DEFAULT_VALUES } from "../../ai-chat/constants";

@customElement("popup-drawer")
export class PopupDrawer extends LitElement {
	static styles = css`
		:host {
			--drawer-max-width: 320px;
		}

		base-drawer {
			--drawer-width: var(--drawer-max-width);
		}

		.popup-content {
			text-align: center;
			max-width: var(--drawer-max-width);
			margin: 0 auto;
		}

		/* Override base-drawer styles */
		:host ::part(drawer-wrapper) {
			max-width: var(--drawer-max-width);
			margin: 0 auto;
			left: 50%;
			transform: translateX(-50%);
			background: white;
			border-radius: 16px;
			box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
		}

		.title {
			color: #30363c;
			margin-bottom: 4px;
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
		}

		.subtitle {
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;

			margin-bottom: 24px;
			color: #4f585e;
		}

		.button-container {
			display: flex;
			gap: 16px;
			justify-content: center;
		}

		.button {
			padding: 8px 24px;
			border-radius: 8px;
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			text-align: center;

			cursor: pointer;
			border: none;
			min-width: 140px;
			font-family: var(--font-family);
		}

		.primary-button {
			background-color: #10847e;
			color: white;
		}

		.secondary-button {
			background-color: #fff;
			color: #30363c;
			border: 1px solid #e6ebf4;
		}

		.button:hover {
			opacity: 0.9;
		}
	`;

	@property({ type: Boolean })
	open = false;

	@property({ type: String })
	title = "We didn't hear back from you";

	@property({ type: String })
	subtitle = "Still there? Let us know if you need anything!";

	@property({ type: String })
	primaryButtonText = "No, I'm fine";

	@property({ type: String })
	secondaryButtonText = "Call support";

	@property({ type: Number })
	inactivityTimeout = 5000;

	@property({ type: String }) phoneNumber: string =
		DEFAULT_VALUES.CUSTOMER_CARE_NUMBER;

	private inactivityTimer: number | null = null;
	private hasUserDismissed = false;

	connectedCallback() {
		super.connectedCallback();
		this.startInactivityTimer();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.clearInactivityTimer();
	}

	public startInactivityTimer() {
		if (!this.hasUserDismissed) {
			this.clearInactivityTimer();
			this.inactivityTimer = window.setTimeout(() => {
				this.open = true;
			}, this.inactivityTimeout);
		}
	}

	public handleActivity() {
		if (!this.hasUserDismissed) {
			this.open = false;
			this.startInactivityTimer();
		}
	}

	private clearInactivityTimer() {
		if (this.inactivityTimer) {
			window.clearTimeout(this.inactivityTimer);
			this.inactivityTimer = null;
		}
	}

	private handleClose() {
		this.open = false;
		this.hasUserDismissed = true;
		this.clearInactivityTimer();
		this.dispatchEvent(new CustomEvent("close"));
	}

	private handlePrimaryClick() {
		this.open = false;
		this.hasUserDismissed = true;
		this.clearInactivityTimer();
	}

	private handleSecondaryClick() {
		window.location.href = `tel:${this.phoneNumber}`;

		this.open = false;
		this.clearInactivityTimer();
	}

	render() {
		return html`
			<base-drawer
				?open=${this.open}
				position="center"
				@close=${this.handleClose}
			>
				<div class="popup-content" part="content">
					<div class="title">${this.title}</div>
					<div class="subtitle">${this.subtitle}</div>
					<div class="button-container">
						<button
							class="button secondary-button"
							@click=${this.handleSecondaryClick}
						>
							${this.secondaryButtonText}
						</button>
						<button
							class="button primary-button"
							@click=${this.handlePrimaryClick}
						>
							${this.primaryButtonText}
						</button>
					</div>
				</div>
			</base-drawer>
		`;
	}
}
