import { css } from "lit";

export const styles = css`
	:host {
		display: block;
		font-family: Inter, sans-serif;
		overflow: hidden;
	}
	@media (min-width: 700px) {
		:host {
			max-width: 400px;
			padding: 8px;
			margin: 0;
		}
	}
	/* OR target specific elements */
	p,
	h1,
	h2,
	h3 {
		margin-block-start: 0;
		margin-block-end: 0;
	}

	.header {
		background-color: #3e415b;
		padding: 8px;
	}

	.chat-title {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		color: #ffffff;
	}

	.chat-subtitle {
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: #f5f8fc;
	}

	.chat-container {
		background-color: #ffffff;
		padding: 0 16px;
		overflow-y: auto;
		height: calc(100vh - 142px);
	}

	.chat-timestamp-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin-top: 148px;
		margin-bottom: 32px;
	}

	.timestamp-left-line {
		background: linear-gradient(
			90deg,
			rgba(178, 202, 231, 0.5) 0.68%,
			rgba(181, 205, 247, 0.15) 97.3%
		);
		height: 2px;
		width: 100px;
	}

	.timestamp {
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #4f585e;
	}

	.timestamp-right-line {
		height: 2px;
		width: 100px;
		background: linear-gradient(
			90deg,
			rgba(178, 202, 231, 0.5) 0.68%,
			rgba(181, 205, 247, 0.15) 97.3%
		);
	}

	.bot-message {
		width: 251px;
		border-top-left-radius: 2px;
		border-top-right-radius: 16px;
		border-bottom-right-radius: 16px;
		border-bottom-left-radius: 16px;
		border-width: 1px;
		border: 1px solid #e6ebf4;
		padding: 12px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #30363c;
	}

	.user-message {
		width: 146px;
		border-top-left-radius: 16px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 16px;
		border-bottom-left-radius: 16px;
		border-width: 1px;
		padding: 12px;
		border: 1px solid #b5cdf7;
		background-color: #ebf2ff;
		color: #30363c;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
	}

	.bot-message-content {
		display: flex;
		gap: 8px;
	}
	.bot-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;

		margin-bottom: 24px;
	}

	.user-message-content {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
	}
	.user-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

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

	.bot-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		text-align: left;
		margin-left: 48px;
		color: #6e787e;
	}

	.user-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		text-align: right;
		color: #6e787e;
	}

	.send-btn {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
	}
`;
