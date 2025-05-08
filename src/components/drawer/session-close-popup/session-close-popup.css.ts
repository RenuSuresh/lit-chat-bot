import { css } from "lit";

export const sessionClosePopupStyles = css`
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
		transform: translateX(-50%, -50%);
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
`;
