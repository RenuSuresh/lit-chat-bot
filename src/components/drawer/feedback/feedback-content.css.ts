import { css } from "lit";

export const feedbackContentStyles = css`
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

	/* Thank you screen styles */
	.thank-you-container {
		text-align: center;
	}

	.thank-you-icon {
		width: 83px;
		height: 69px;
		margin-bottom: 16px;
		color: #4caf50;
	}

	.thank-you-title {
		font-weight: 700;
		font-size: 22px;
		line-height: 28px;
		text-align: center;
		color: #30363c;
		margin-bottom: 4px;
	}

	.thank-you-message {
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		color: #30363c;
	}
`;
