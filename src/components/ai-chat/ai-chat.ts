import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { styles } from "./styles.css";
import { chatBotApi } from "../services/chat.service";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("ai-chat")
export class AIChat extends LitElement {
	static styles = styles;
	@state() private isNewConversation = true;
	@state() private _messages: Array<{ text: string; sender: "user" | "bot" }> =
		[];
	@state() private _inputValue = "";
	@state() private _isLoading = false;
	@state() private botMessage = "";

	@property({ type: Array })
	messages = [
		{
			sender: "bot",
			text: "Hi Manthan, I am easybot. I am here to help you with your concern",
		},
		{
			sender: "user",
			text: "Where is my order?",
			time: "12:30 PM",
		},
	];

	@property({ type: String })
	newMessage = "";

	render() {
		return html`
			<div class="header">
				<h2 class="chat-title">Chat with Easybot</h2>
				<p class="chat-subtitle">Get help 24/7</p>
			</div>
			<div>
				<div class="chat-container">
					${this.isNewConversation
						? html`
								<div class="chat-timestamp-wrapper">
									<div class="timestamp-left-line"></div>
									<div class="timestamp">Today • 12:28 PM</div>
									<div class="timestamp-right-line"></div>
								</div>
						  `
						: nothing}
					${this.messages.map(
						(msg) => html`
							
								${when(
									msg.sender === "bot",
									() => html`
										<div class="bot-message-container">
											<img
												src="https://assets.pharmeasy.in/web-assets/_next/icons/mobile-logo.svg"
												width="40"
												height="40"
												alt="bot-icon"
											/>
											<div class="bot-message">${unsafeHTML(msg.text)}</div>
										</div>
										<div class="bot-timestamp">${msg.time}</div>
									`,
									() => html`
										<div class="user-message-container">
											<div class="user-message">${msg.text}</div>
											<img
												src="https://assets.pharmeasy.in/web-assets/_next/icons/gpay.svg"
												width="40"
												height="40"
												alt="user-icon"
											/>
										</div>
										<div class="user-timestamp">${msg.time}</div>
									`
								)}
							</div>
						`
					)}
				</div>
				<div class="input-area">
					<input
						type="text"
						placeholder="Type your query here"
						.value=${this.newMessage}
						@input=${this.handleInput}
						@keypress=${this.handleKeyPress}
					/>
					<button
						@click=${() => this.sendUserMessage(this.newMessage)}
						?disabled=${!this.newMessage.trim() || this._isLoading}
					>
						Send
					</button>
				</div>
			</div>
		`;
	}

	async sendUserMessage(text: string) {
		try {
			const response = await chatBotApi.sendMessage(
				"Rakesh",
				text,
				"d3b1c91f-7dc0-41d5-9b61-3a9f154310d7"
			);
			this.botMessage =
				JSON.parse(response.answer).assistantLastMessage || "hey";
			this.sendMessage();
		} catch (error) {}
	}

	handleInput(e: Event) {
		this.newMessage = (e.target as HTMLInputElement).value;
	}

	handleKeyPress(e: KeyboardEvent) {
		if (e.key === "Enter" && this.newMessage.trim()) {
			this.sendUserMessage(this.newMessage);
		}
	}

	sendMessage() {
		this.messages = [
			...this.messages,
			{
				sender: "user",
				text: this.newMessage,
				time: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			},
		];

		this.newMessage = "";
		this.requestUpdate();

		// Scroll to bottom
		setTimeout(() => {
			const container = this.shadowRoot?.querySelector(".chat-container");
			if (container) {
				container.scrollTop = container.scrollHeight;
			}
		}, 0);

		// Simulate bot response after delay
		setTimeout(() => {
			this.messages = [
				...this.messages,
				{
					sender: "bot",
					text: this.botMessage,
					time: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				},
			];
			this.requestUpdate();
		}, 1000);
	}
}
