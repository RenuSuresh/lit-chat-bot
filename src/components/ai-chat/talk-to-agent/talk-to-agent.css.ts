import { css } from "lit";

export const styles = css`
	.talk-to-agent-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 16px;
		box-shadow: 0px 0px 2px 0px #30363c05;
	}

	.talk-to-agent-button {
		background-color: #10847e;
		color: #ffffff;
		border-radius: 12px;
		gap: 8px;
		box-shadow: 0px 0px 2px 0px #30363c05;
		padding: 16px 24px;
		border: none;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-family);
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
	}
`;
