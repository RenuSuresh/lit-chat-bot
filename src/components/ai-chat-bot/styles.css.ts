import { css } from "lit";

export const styles = css`
	:host {
		display: block;
		font-family: Arial, sans-serif;
		--primary-color: #007bff;
		--border-radius: 8px;
	}

	.chat-container {
		display: flex;
		flex-direction: column;
		height: 500px;
		max-width: 600px;
		margin: 0 auto;
		border: 1px solid #ddd;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.chat-header {
		background-color: var(--primary-color);
		color: white;
		padding: 15px;
		text-align: center;
	}

	.messages-container {
		flex: 1;
		padding: 15px;
		overflow-y: auto;
		background-color: #f9f9f9;
	}

	.loading {
		color: #666;
		font-style: italic;
		padding: 8px 0;
		text-align: center;
	}

	.input-container {
		display: flex;
		padding: 10px;
		background-color: white;
		border-top: 1px solid #ddd;
	}

	input {
		flex: 1;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: var(--border-radius);
		margin-right: 10px;
		outline: none;
	}

	input:focus {
		border-color: var(--primary-color);
	}

	button {
		padding: 10px 20px;
		background-color: var(--primary-color);
		color: white;
		border: none;
		border-radius: var(--border-radius);
		cursor: pointer;
	}

	button:hover {
		background-color: #0069d9;
	}

	button:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}
`;
