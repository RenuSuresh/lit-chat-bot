import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("feedback-bottom-sheet")
export class FeedbackBottomSheet extends LitElement {
	static styles = css`
		:host {
			display: contents;
		}

		.sheet-container {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background: white;
			border-radius: 16px 16px 0 0;
			padding: 24px;
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
			transform: translateY(100%);
			transition: transform 0.3s ease-out;
			z-index: 1000;
		}

		:host([open]) .sheet-container {
			transform: translateY(0);
		}

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

		.close-button {
			position: absolute;
			top: 16px;
			right: 16px;
			background: none;
			border: none;
			font-size: 20px;
			cursor: pointer;
			color: #999;
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

	@property({ type: Boolean, reflect: true })
	open = false;

	@property({ type: Number })
	rating = 0;

	connectedCallback() {
		super.connectedCallback();
		document.body.style.overflow = "hidden";
	}

	willUpdate(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			this.toggleBodyOverflow(this.open);
			this.toggleBackdrop(this.open);
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.toggleBodyOverflow(false);
		this.removeBackdrop();
	}

	updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			if (this.open) {
				this.addBackdrop();
			} else {
				this.removeBackdrop();
			}
		}
	}
	private toggleBodyOverflow(open: boolean) {
		document.body.style.overflow = open ? "hidden" : "";
	}

	private toggleBackdrop(show: boolean) {
		if (show) {
			this.addBackdrop();
		} else {
			this.removeBackdrop();
		}
	}

	private addBackdrop() {
		if (this.backdrop) return;

		this.backdrop = document.createElement("div");
		this.backdrop.className = "feedback-backdrop";
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
		this.open = false;
		this.dispatchEvent(new CustomEvent("close"));
	}

	private handleSubmit() {
		this.dispatchEvent(new CustomEvent("submit", { detail: this.rating }));
		this.open = false;
	}

	private handleStarClick(rating: number) {
		this.rating = rating;
	}

	render() {
		return html`
			<div class="sheet-container">
				<button class="close-button" @click=${this.handleBackdropClick}>
					×
				</button>

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
			</div>
		`;
	}
}
