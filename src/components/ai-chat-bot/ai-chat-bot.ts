import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./chat-message";
import { styles } from "./styles.css";

@customElement("ai-chat-bot")
export class AIChatBot extends LitElement {
	static styles = styles;

	@property({ type: String }) apiUrl = "";
	@property({ type: String }) title = "AI Assistant";
	@property({ type: String }) placeholder = "Type your message...";

	@state() private _messages: Array<{ text: string; sender: "user" | "bot" }> =
		[];
	@state() private _inputValue = "";
	@state() private _isLoading = false;

	render() {
		return html`
			<div class="chat-container">
				<div class="chat-header">
					<h2>${this.title}</h2>
				</div>

				<div class="messages-container">
					${this._messages.map(
						(msg) => html`
							<chat-message
								.text=${msg.text}
								.sender=${msg.sender}
							></chat-message>
						`
					)}
					${this._isLoading
						? html`<div class="loading">Bot is typing...</div>`
						: ""}
				</div>

				<div class="input-container">
					<input
						type="text"
						.value=${this._inputValue}
						@input=${this._handleInput}
						@keydown=${this._handleKeyDown}
						placeholder=${this.placeholder}
						?disabled=${this._isLoading}
					/>
					<button
						@click=${this._sendMessage}
						?disabled=${!this._inputValue.trim() || this._isLoading}
					>
						Send
					</button>
				</div>
			</div>
		`;
	}

	private _handleInput(e: Event) {
		this._inputValue = (e.target as HTMLInputElement).value;
	}

	private _handleKeyDown(e: KeyboardEvent) {
		if (e.key === "Enter" && this._inputValue.trim()) {
			this._sendMessage();
		}
	}

	private async _sendMessage() {
		const userMessage = this._inputValue.trim();
		if (!userMessage) return;

		// Add user message
		this._messages = [...this._messages, { text: userMessage, sender: "user" }];
		this._inputValue = "";
		this._isLoading = true;

		try {
			// Call your AI API
			const botResponse = await this._getAIResponse(userMessage);

			// Add bot response
			this._messages = [
				...this._messages,
				{ text: botResponse, sender: "bot" },
			];
		} catch (error) {
			console.error("Error getting AI response:", error);
			this._messages = [
				...this._messages,
				{
					text: "Sorry, I encountered an error. Please try again.",
					sender: "bot",
				},
			];
		} finally {
			this._isLoading = false;
		}
	}

	private async _getAIResponse(message: string): Promise<string> {
		if (!this.apiUrl) {
			// Mock response if no API URL is provided
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(`This is a mock response to: "${message}"`);
				}, 1000);
			});
		}

		const response = await fetch(this.apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		});

		if (!response.ok) {
			throw new Error(`API request failed with status ${response.status}`);
		}

		const data = await response.json();
		return data.reply;
	}
}
