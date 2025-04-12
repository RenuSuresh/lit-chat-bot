import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { chatBotApi } from "../services/chat.service";

import "./header/chat-header";
import "./chat-message-list/chat-message-list";
import "./chat-input/chat-input";

import { commonStyles } from "./styles.css";
import { Theme } from "./theme.interface";

@customElement("ai-chat")
export class AIChat extends LitElement {
	static styles = [commonStyles];

	@property({ type: Object }) apiBody: any;
	@property({ type: String }) botImage: string = "";
	@property({ type: String }) sendMsgEnableImage: string = "";
	@property({ type: String }) sendMsgDisableImage: string = "";
	@property({ type: String }) closeChatIcon: string =
		"https://assets.pharmeasy.in/web-assets/images/ic_close.svg";
	@property({ attribute: false }) onCloseChat?: () => void;

	@property({ type: Boolean, attribute: "show-close-button" })
	showCloseButton = false;
	@property({ type: String, attribute: "button-label" })
	buttonLabel = "Close";

	@property({ type: Object }) theme: Theme = {
		fontFamily: "Inter, sans-serif",

		headerBgColor: "#3e415b",
		headerTitleColor: "#ffffff",
		headerSubtitleColor: "#f5f8fc",

		messageContainerBgColor: "#ffffff",
		loaderColor: "#3e415b",

		botMsgBgColor: "#ffffff",
		botMsgBorderColor: "#e6ebf4",
		botMsgTextColor: "#30363c",

		userMsgBgColor: "#EBF2FF",
		userMsgTextColor: "#30363c",
		userMsgBorderColor: "#B5CDF7",

		inputBackgroundColor: "#ebf2ff",
		inputBorderColor: "#e6ebf4",
		inputTextColor: "#30363c",
		placeholderTextColor: "#8897a2",
	};

	@state() private isLoading: boolean = false;

	@state() private chatbotData: any = {};

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

	@state() private conversationId: string = "";

	constructor() {
		super();
		this.chatbotData = JSON.parse(
			sessionStorage.getItem("chatbotData") || "{}"
		);
	}

	connectedCallback() {
		super.connectedCallback();
		// Load header when component connects to DOM
		this.loadHeaderComponent();
		this.loadChatLoaderComponent();
	}

	private async loadHeaderComponent() {
		// Dynamic import with webpack chunk name comment
		await import(
			/* webpackChunkName: "chat-header" */
			"./header/chat-header"
		);
	}
	private async loadChatLoaderComponent() {
		// Dynamic import with webpack chunk name comment
		await import(
			/* webpackChunkName: "chat-loader" */
			"./chat-loader/chat-loader"
		);
	}

	private _handlePageClose = () => {
		this.onCloseChat?.();
	};

	private async handleSendMessage(e: CustomEvent) {
		this.isLoading = true;
		const userMessage = e.detail.text;
		this.addMessage({
			sender: "user",
			text: userMessage,
			time: this.getCurrentTime(),
		});

		try {
			// Send the message without the conversation ID initially
			const response = await chatBotApi.sendMessage({
				body: this.chatbotData.chatAPI.body,
				message: userMessage,
				conversationId: this.conversationId,
			});

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
		} finally {
			this.isLoading = false;
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

	render() {
		return html`
			<style>
				:host {
					--font-family: ${this.theme.fontFamily};
					--header-bg-color: ${this.theme.headerBgColor};
					--header-title-color: ${this.theme.headerTitleColor};
					--header-subtitle-color: ${this.theme.headerSubtitleColor};

					--message-bg-color: ${this.theme.messageContainerBgColor};
					--loader-color: ${this.theme.loaderColor};

					--input-background-color: ${this.theme.inputBackgroundColor};
					--input-border-color: ${this.theme.inputBorderColor};
					--placeholder-text-color: ${this.theme.placeholderTextColor};
					--input-text-color: ${this.theme.inputTextColor};

					--bot-msg-bg-color: ${this.theme.botMsgBgColor};
					--bot-msg-border-color: ${this.theme.botMsgBorderColor};
					--bot-msg-text-color: ${this.theme.botMsgTextColor};

					--user-msg-bg-color: ${this.theme.userMsgBgColor};
					--user-msg-text-color: ${this.theme.userMsgTextColor};
					--user-msg-border-color: ${this.theme.userMsgBorderColor};
				}
			</style>

			<chat-header
				.closeChatIcon=${this.closeChatIcon}
				.onCloseChat=${this._handlePageClose}
			></chat-header>

			<chat-message-list
				.messages=${this.messages}
				.loading=${this.isLoading}
				.botImage=${this.botImage}
			></chat-message-list>
			<chat-input @send-message=${this.handleSendMessage}></chat-input>
		`;
	}
}

interface ChatMessage {
	sender: "user" | "bot";
	text: string;
	time: string;
}
