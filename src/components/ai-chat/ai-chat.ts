import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { chatBotApi } from "../services/chat.service";
import "./chat-message-list";
import "./chat-input";
import { styles } from "./styles.css";

@customElement("ai-chat")
export class AIChat extends LitElement {
	static styles = styles;
	@state() private messages: Array<ChatMessage> = [
		{
			sender: "bot",
			text: "Hi Manthan, I am easybot. I am here to help you with your concern",
			time: this.getCurrentTime(),
		},
		{
			sender: "user",
			text: "Hi Manthan, I am easybot. I am here to help you with your concern",
			time: this.getCurrentTime(),
		},
	];
	@state() private conversationId: string =
		"4bb91e16-7a12-44ee-9b16-25c9bddeb2da";

	render() {
		return html`
			<div class="header">
				<h2 class="chat-title">Chat with Easybot</h2>
				<p class="chat-subtitle">Get help 24/7</p>
			</div>
			<chat-message-list .messages=${this.messages}></chat-message-list>
			<chat-input @send-message=${this.handleSendMessage}></chat-input>
		`;
	}

	private async handleSendMessage(e: CustomEvent) {
		const userMessage = e.detail.text;
		this.addMessage({
			sender: "user",
			text: userMessage,
			time: this.getCurrentTime(),
		});

		try {
			// Send the message without the conversation ID initially
			const response = await chatBotApi.sendMessage(
				"Rakesh",
				userMessage,
				this.conversationId
			);

			// Store the conversation ID from the response
			this.conversationId = response.conversation_id;

			const botMessage =
				JSON.parse(response.answer).assistantLastMessage ||
				"Sorry, I encountered an error. Please try again.";

			this.addMessage({
				sender: "bot",
				text: botMessage,
				time: this.getCurrentTime(),
			});
		} catch (error) {
			this.addMessage({
				sender: "bot",
				text: "Sorry, I encountered an error. Please try again.",
				time: this.getCurrentTime(),
			});
		}
	}

	private addMessage(message: ChatMessage) {
		this.messages = [...this.messages, message];
		this.requestUpdate();
		this.scrollToBottom();
	}

	private async scrollToBottom() {
		// Wait for Lit to finish rendering
		await this.updateComplete;

		// Find the chat container by piercing through shadow DOM
		const root = this.shadowRoot;
		if (!root) return;

		// First try to find chat-message-list component
		const chatMessageList = root.querySelector("chat-message-list");
		if (!chatMessageList) return;

		// Get its shadow root
		const messageListShadow = chatMessageList.shadowRoot;
		if (!messageListShadow) return;

		// Find the actual scrollable container
		const scrollContainer = messageListShadow.querySelector(".chat-container");
		if (!scrollContainer) return;

		// Perform the scroll with smooth behavior
		scrollContainer.scrollTo({
			top: scrollContainer.scrollHeight,
			behavior: "smooth",
		});

		// Fallback for immediate scroll
		scrollContainer.scrollTop = scrollContainer.scrollHeight;
	}

	private getCurrentTime(): string {
		return new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
	}
}

interface ChatMessage {
	sender: "user" | "bot";
	text: string;
	time: string;
}
