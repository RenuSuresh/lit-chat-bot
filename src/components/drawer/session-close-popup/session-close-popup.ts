import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../base-drawer";
import { DEFAULT_VALUES } from "../../ai-chat/constants";
import { withChatContext } from "../../../context/with-chat-context";
import { sessionClosePopupStyles } from "./session-close-popup.css";
import { commonStyles } from "../../ai-chat/styles.css";
@customElement("session-close-popup")
export class SessionClosePopup extends withChatContext(LitElement) {
	static styles = [commonStyles, sessionClosePopupStyles];

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
				if (!this.hasUserDismissed) {
					this.open = true;
				}
			}, this.inactivityTimeout);
		}
	}

	public handleActivity() {
		if (!this.hasUserDismissed) {
			this.open = false;
			this.clearInactivityTimer();
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
		this.chatContext.setShowFeedbackDrawer(true);
	}

	private handlePrimaryClick() {
		this.handleClose();
	}

	private handleSecondaryClick() {
		window.location.href = `tel:${this.phoneNumber}`;
		this.handleClose();
	}

	render() {
		return html`
			<base-drawer
				?open=${this.open}
				position="center"
				@close=${this.handleClose}
				.showCloseButton=${false}
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
