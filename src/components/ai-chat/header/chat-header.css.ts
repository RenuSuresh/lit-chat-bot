import { css } from "lit";

export const styles = css`
	.header {
		background-color: var(--header-bg-color);
		padding: 8px;
		display: flex;
	}

	.chat-title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: calc(100% - 24px);
	}

	.chat-title {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		color: var(--header-title-color);
	}

	.chat-subtitle {
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: var(--header-subtitle-color);
	}
`;
