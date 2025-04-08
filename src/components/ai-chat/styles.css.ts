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
		height: calc(100vh - 120px);
		border: 1px solid #3e415b;
	}

	.chat-timestamp-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin-top: 148px;
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

	.bot-message-container {
		display: flex;
		gap: 8px;
		margin-top: 32px;
	}

	.user-message-container {
		display: flex;
		gap: 8px;
		margin-top: 32px;
		justify-content: flex-end;
	}

	.input-area {
		display: flex;
		padding: 12px;
		background-color: white;
		border-top: 1px solid #eee;
		position: sticky;
		bottom: 0;
	}

	input {
		flex-grow: 1;
		padding: 10px 12px;
		border: 1px solid #ddd;
		border-radius: 20px;
		outline: none;
	}

	input:focus {
		border-color: #4285f4;
	}

	.bot-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		letter-spacing: 0%;
		text-align: left;
		margin-left: 48px;
		color: #6e787e;
		padding-top: 4px;
	}

	.user-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		letter-spacing: 0%;
		text-align: right;
		margin-right: 48px;
		color: #6e787e;
		padding-top: 4px;
	}

	/* .chat-container {
		background-color: #f9f9f9;
		height: 400px;
		padding: 16px;
		overflow-y: auto;
		border: 10px solid green;
	}

	.message {
		margin-bottom: 12px;
		max-width: 80%;
		padding: 8px 12px;
		border-radius: 18px;
		line-height: 1.4;
	}

	.bot-message {
		background-color: white;
		border-bottom-left-radius: 4px;
		align-self: flex-start;
	}

	.user-message {
		background-color: #4285f4;
		color: white;
		border-bottom-right-radius: 4px;
		margin-left: auto;
	}

	.timestamp {
		font-size: 0.75rem;
		color: #666;
		margin: 4px 0;
		text-align: center;
	}

	.input-area {
		display: flex;
		padding: 12px;
		background-color: white;
		border-top: 1px solid #eee;
	}

	input {
		flex-grow: 1;
		padding: 10px 12px;
		border: 1px solid #ddd;
		border-radius: 20px;
		outline: none;
	}

	input:focus {
		border-color: #4285f4;
	} */
`;
