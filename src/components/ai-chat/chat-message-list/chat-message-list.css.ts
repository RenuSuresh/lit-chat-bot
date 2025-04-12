import { css } from "lit";

export const styles = css`
	.chat-container {
		background-color: var(--message-container-bg-color);
		padding: 0 16px;
		overflow-y: auto;
		height: calc(100vh - 150px);
	}

	.bot-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.user-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.bot-message-content {
		display: flex;
		gap: 8px;
	}

	.bot-message {
		border-radius: 2px 16px 16px 16px;
		border-width: 1px;
		border: 1px solid var(--bot-msg-border-color);
		padding: 12px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: var(--bot-msg-text-color);
		background-color: var(--bot-msg-bg-color);
		width: calc(100% - 100px);
	}

	.user-message {
		border-radius: 16px 2px 16px 16px;
		border-width: 1px;
		padding: 12px;
		border: 1px solid var(--user-msg-border-color);
		background-color: var(--user-msg-bg-color);
		color: var(--user-msg-text-color);
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		width: calc(100% - 100px);
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
`;
