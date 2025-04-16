import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("feedback-content")
export class FeedbackContent extends LitElement {
	static styles = css`
		:host {
			display: block;
			text-align: center;
		}

		.title {
			font-weight: 600;
			font-size: 14px;
			line-height: 22px;
			color: #30363c;
		}

		.subtitle {
			font-size: 14px;
			color: #666666;
			margin-bottom: 32px;
		}

		.stars {
			display: flex;
			justify-content: center;
			gap: 16px;
			margin: 20px 0 32px;
		}

		.star {
			width: 40px;
			height: 40px;
			background: none;
			border: 2px solid #e0e0e0;
			border-radius: 50%;
			padding: 8px;
			cursor: pointer;
			transition: all 0.2s;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.star svg {
			width: 24px;
			height: 24px;
			fill: none;
			stroke: #e0e0e0;
			stroke-width: 2;
		}

		.star.selected {
			border-color: #4caf50;
		}

		.star.selected svg {
			fill: #4caf50;
			stroke: #4caf50;
		}

		.submit-button {
			width: 100%;
			padding: 16px;
			background: #4caf50;
			color: white;
			border: none;
			border-radius: 8px;
			font-weight: 500;
			font-size: 16px;
			cursor: pointer;
			opacity: 0.5;
		}

		.submit-button:not([disabled]) {
			opacity: 1;
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
							<svg viewBox="0 0 24 24">
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
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
}
