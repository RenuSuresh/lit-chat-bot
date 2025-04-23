import { css } from "lit";

export const styles = css`
	.input-area {
		display: flex;
		padding: 16px;
		background-color: #ffffff;
		position: sticky;
		bottom: 0;
		background-color: var(--input-background-color);
		box-shadow: 0px 0px 4px 0px #0000000f;
		border-top: 1px solid var(--border-color);
		gap: 12px;
		align-items: center;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	.input-container {
		box-sizing: border-box;
		padding: 12px;
		background-color: #ffffff;
		position: relative;
		border: 1px solid #e6ebf4;
		border-radius: 16px;
		width: 100%;
	}

	.input-group {
		position: relative;
	}

	.chat-input {
		flex-grow: 1;
		padding: 16px;

		outline: none;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: var(--input-text-color);

		width: 100%;
		min-height: 18px;
		max-height: 72px;
		padding: 0;
		margin: 0;
		border: none;
		outline: none;
		resize: none;
		overflow-y: auto;
		background: transparent;
		font: inherit;
		padding-right: 40px; /* Make space for character counter */
	}

	.chat-input::placeholder {
		color: var(--placeholder-text-color);
	}

	.send-btn {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
	}

	.send-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.char-count {
		position: absolute;
		right: 12px;
		bottom: 8px;
		font-size: 10px;
		color: #8897a2;
		pointer-events: none;
	}

	.char-count.limit-reached {
		color: #ff6b6b;
	}
`;
