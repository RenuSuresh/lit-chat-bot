import { css } from "lit";

export const styles = css`
	.bot-message-container,
	.user-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.bot-message-content,
	.user-message-content {
		display: flex;
		gap: 8px;
	}

	.user-message-content {
		justify-content: flex-end;
	}

	.bot-message,
	.user-message {
		border-radius: 16px;
		padding: 12px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		max-width: calc(100% - 100px);
	}

	.bot-message {
		border-radius: 2px 16px 16px 16px;
		border: 1px solid var(--bot-msg-border-color);
		color: var(--bot-msg-text-color);
		background-color: var(--bot-msg-bg-color);
	}

	.user-message {
		border-radius: 16px 2px 16px 16px;
		border: 1px solid var(--user-msg-border-color);
		background-color: var(--user-msg-bg-color);
		color: var(--user-msg-text-color);
	}

	.bot-timestamp,
	.user-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		color: #6e787e;
	}

	.bot-timestamp {
		text-align: left;
		margin-left: 48px;
	}

	.user-timestamp {
		text-align: right;
	}
`;
