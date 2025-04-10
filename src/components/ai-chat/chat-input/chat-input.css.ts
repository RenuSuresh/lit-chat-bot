import { css } from "lit";

export const styles = css`
	.input-area {
		display: flex;
		padding: 16px;
		background-color: white;
		position: sticky;
		bottom: 0;
		background-color: #ebf2ff;
		box-shadow: 0px 0px 4px 0px #0000000f;
		border-top: 1px solid #e6ebf4;
		gap: 12px;
		align-items: center;
	}

	.chat-input {
		flex-grow: 1;
		padding: 16px;
		border: 1px solid #e6ebf4;
		border-width: 1px;
		border-radius: 16px;

		outline: none;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: #8897a2;
	}

	.chat-input::placeholder {
		color: #8897a2;
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
`;
