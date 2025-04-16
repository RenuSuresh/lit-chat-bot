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
			padding-bottom: 4px;
		}

		.subtitle {
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;
			text-align: center;
			color: #4f585e;
		}

		.stars {
			display: flex;
			justify-content: center;
			gap: 8px;
			margin: 24px 0;
		}

		.star {
			width: 50px;
			height: 50px;
			background: none;
			border: none;
			cursor: pointer;
			transition: all 0.2s;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.star svg {
			width: 34px;
			height: 34px;
			fill: none;
			stroke: #8897a2;
			stroke-width: 2;
		}

		.star.selected {
			border-color: #f5b326;
		}

		.star.selected svg {
			fill: #f5b326;
			stroke: #f5b326;
		}

		.submit-button {
			width: 100%;
			background-color: #6e787e;
			border: none;
			border-radius: 8px;
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			text-align: center;
			color: #ffffff;
			font-family: var(--font-family);
			height: 40px;
		}

		.submit-button:not([disabled]) {
			opacity: 1;
			background: #10847e;
			border: 1.5px solid #10847e;
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
}
