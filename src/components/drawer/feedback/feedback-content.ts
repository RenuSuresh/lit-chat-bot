import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { feedbackContentStyles } from "./feedback-content.css";
import { commonStyles } from "../../ai-chat/styles.css";

@customElement("feedback-content")
export class FeedbackContent extends LitElement {
	static styles = [commonStyles, feedbackContentStyles];

	@property({ type: Number })
	rating = 0;

	@property({ type: Boolean })
	submitted = true;

	private handleSubmit() {
		this.submitted = true;
		this.dispatchEvent(new CustomEvent("submit", { detail: this.rating }));
	}

	private handleStarClick(rating: number) {
		this.rating = rating;
		this.dispatchEvent(
			new CustomEvent("rating-select", { detail: { rating } })
		);
	}

	private renderThankYou() {
		return html`
			<div class="thank-you-container">
				<img
					src="https://assets.pharmeasy.in/web-assets/images/image_feedback_chatbot.png"
					alt="Thank you"
					class="thank-you-icon"
				/>
				<div class="thank-you-title">Thank You for feedback!</div>
				<div class="thank-you-message">
					Your feedback helps us to<br />
					improve our experience
				</div>
			</div>
		`;
	}

	private renderFeedbackForm() {
		return html`
			<div class="title">Please rate your experience with us</div>
			<div class="subtitle">
				Your feedback helps us to improve our experience
			</div>

			<div class="stars">
				${[1, 2, 3, 4, 5].map(
					(star) => html`
						<button
							class="star ${this.rating >= star ? "selected" : ""}"
							@click=${() => this.handleStarClick(star)}
						>
							<svg
								width="36"
								height="34"
								viewBox="0 0 36 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.9999 1.15002L23.1499 11.5834L34.6666 13.2667L26.3333 21.3834L28.2999 32.85L17.9999 27.4334L7.69992 32.85L9.66659 21.3834L1.33325 13.2667L12.8499 11.5834L17.9999 1.15002Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					`
				)}
			</div>

			<button
				class="submit-button"
				@click=${this.handleSubmit}
				?disabled=${this.rating === 0}
			>
				Submit Feedback
			</button>
		`;
	}

	render() {
		return this.submitted ? this.renderThankYou() : this.renderFeedbackForm();
	}
}
