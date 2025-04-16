import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("feedback-content")
export class FeedbackContent extends LitElement {
	static styles = css`
		.title {
			font-size: 18px;
			font-weight: 600;
			margin-bottom: 8px;
			color: #333;
		}

		.subtitle {
			font-size: 14px;
			color: #666;
			margin-bottom: 24px;
		}

		.submit-button {
			width: 100%;
			padding: 12px;
			background: #3e415b;
			color: white;
			border: none;
			border-radius: 8px;
			font-weight: 500;
			margin-top: 16px;
			cursor: pointer;
		}

		.stars {
			display: flex;
			justify-content: center;
			gap: 12px;
			margin: 20px 0;
		}

		.star {
			font-size: 28px;
			background: none;
			border: none;
			color: #e0e0e0;
			cursor: pointer;
			transition: all 0.2s;
			padding: 0 4px;
		}

		.star.selected {
			color: #ffc107;
		}
	`;

	@property({ type: Number })
	rating = 0;

	private handleSubmit() {
		this.dispatchEvent(new CustomEvent("submit", { detail: this.rating }));
	}

	private handleStarClick(rating: number) {
		this.rating = rating;
		this.dispatchEvent(
			new CustomEvent("rating-select", { detail: { rating } })
		);
	}

	render() {
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
							★
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
}
