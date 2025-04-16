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

	private handleClose() {
		this.open = false;
		this.dispatchEvent(new CustomEvent("close"));
	}

	private handleSubmit() {
		this.dispatchEvent(new CustomEvent("submit", { detail: this.rating }));
		this.open = false;
	}

	private handleRatingSelect(e: CustomEvent) {
		this.rating = e.detail.rating;
	}

	render() {
		return html`
			<base-drawer ?open=${this.open} @close=${this.handleClose}>
				<feedback-content
					.rating=${this.rating}
					@rating-select=${this.handleRatingSelect}
					@submit=${this.handleSubmit}
				></feedback-content>
			</base-drawer>
		`;
	}
}
