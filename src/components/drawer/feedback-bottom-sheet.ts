import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./base-drawer";
import "./feedback-content";

@customElement("feedback-bottom-sheet")
export class FeedbackBottomSheet extends LitElement {
	@property({ type: Boolean, reflect: true })
	open = false;

	@property({ type: Number })
	rating = 0;

	@property({ type: Boolean })
	submitted = false;

	private handleClose() {
		// Reset state when closing
		setTimeout(() => {
			this.submitted = false;
			this.rating = 0;
		}, 300); // Wait for close animation

		this.open = false;
		this.dispatchEvent(new CustomEvent("close"));
	}

	private handleSubmit() {
		this.submitted = true;
		this.dispatchEvent(new CustomEvent("submit", { detail: this.rating }));

		// Auto close after showing thank you message
		setTimeout(() => {
			this.handleClose();
		}, 3000);
	}

	private handleRatingSelect(e: CustomEvent) {
		this.rating = e.detail.rating;
	}

	render() {
		return html`
			<base-drawer ?open=${this.open} @close=${this.handleClose}>
				<feedback-content
					.rating=${this.rating}
					.submitted=${this.submitted}
					@rating-select=${this.handleRatingSelect}
					@submit=${this.handleSubmit}
				></feedback-content>
			</base-drawer>
		`;
	}
}
