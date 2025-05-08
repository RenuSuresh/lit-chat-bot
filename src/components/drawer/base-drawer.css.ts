import { css } from "lit";

export const baseDrawerStyles = css`
	:host {
		display: contents;
	}

	.drawer-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
		opacity: 0;
		transition: opacity 0.3s ease-out;
		animation: fadeIn 0.3s ease-out forwards;
	}

	.drawer-backdrop.closing {
		animation: fadeOut 0.3s ease-out forwards;
	}

	.drawer-wrapper {
		position: fixed;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.drawer-wrapper[position="bottom"] {
		bottom: 0;
		left: 0;
		right: 0;
	}

	.drawer-wrapper[position="center"] {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: var(--drawer-width, auto);
	}

	.drawer-content {
		width: 100%;
		transform: translateY(0);
		animation: slideIn 0.3s ease-out;
	}

	.drawer-content[position="center"] {
		animation: fadeIn 0.3s ease-out;
	}

	.close-button-wrapper {
		position: absolute;
		z-index: 1001;
		background: transparent;
		border-radius: 50%;
	}

	.close-button-wrapper[position="bottom"] {
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
	}

	.close-button-wrapper[position="center"] {
		top: 16px;
		right: 16px;
	}

	.close-button {
		width: 32px;
		height: 32px;
		background: white;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		color: #666;
	}

	.close-button:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.drawer-container {
		background: white;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	.drawer-container[position="bottom"] {
		border-radius: 24px 24px 0 0;
		padding: 24px 16px;
	}

	.drawer-container[position="center"] {
		border-radius: 24px;
		max-width: 90vw;
		max-height: 90vh;
		overflow-y: auto;
		padding: 16px;
	}

	@keyframes slideIn {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideOut {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(100%);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	.drawer-content.closing[position="bottom"] {
		animation: slideOut 0.3s ease-out forwards;
	}
`;
