import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// Services
import { chatBotApi } from "../services/chat.service";

// Components
import "./header/chat-header";
import "./chat-message-list/chat-message-list";
import "./chat-input/chat-input";

// Styles and Types
import { commonStyles } from "./styles.css";
import { Theme } from "./theme.interface";

// Types
interface ChatMessage {
	sender: "user" | "bot";
	text: string;
	time: string;
}

interface ChatApiBody {
	chatAPI: {
		body: Record<string, unknown>;
	};
	customerCareNumber: string;
}

@customElement("ai-chat")
export class AIChat extends LitElement {
	static styles = [commonStyles];

	// Properties
	@property({ type: Object }) apiBody!: ChatApiBody;
	@property({ type: String }) botImage: string = "";
	@property({ type: String }) sendMsgEnableImage: string = "";
	@property({ type: String }) sendMsgDisableImage: string = "";
	@property({ type: String }) closeChatIcon: string =
		"https://assets.pharmeasy.in/web-assets/images/ic_close.svg";
	@property({ attribute: false }) onCloseChat?: () => void;
	@property({ type: Boolean, attribute: "show-close-button" }) showCloseButton =
		false;
	@property({ type: String, attribute: "button-label" }) buttonLabel = "Close";

	// Theme configuration
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

	// State
	@state() private isLoading: boolean = false;
	@state() private chatbotData: ChatApiBody = {
		chatAPI: { body: {} },
		customerCareNumber: "",
	};
	@state() private messages: Array<ChatMessage> = [];
	@state() private conversationId: string =
		"4bb91e16-7a12-44ee-9b16-25c9bddeb2da";
	@state() private showChatInput: boolean = true;

	constructor() {
		super();
		this.initializeSessionStorage();
	}

	// Lifecycle methods
	connectedCallback() {
		super.connectedCallback();
		this.loadComponents();
	}

	// Private methods
	private initializeSessionStorage() {
		try {
			const storedData = sessionStorage.getItem("chatbotData");

			if (!storedData) {
				// Set default data in session storage
				const defaultData: ChatApiBody = {
					chatAPI: {
						body: {
							inputs: {
								user_id: "",
								session_id: "",
								// Add any other required default values
							},
						},
					},
					customerCareNumber: "",
				};

				sessionStorage.setItem("chatbotData", JSON.stringify(defaultData));
				this.chatbotData = defaultData;
			} else {
				// Parse existing data
				this.chatbotData = JSON.parse(storedData);
			}
		} catch (error) {
			console.error("Error initializing session storage:>>>>>>", error);
			// Keep using the default state if there's an error
		}
	}

	private async loadComponents() {
		await Promise.all([
			this.loadHeaderComponent(),
			this.loadChatLoaderComponent(),
			this.loadTalkToAgentComponent(),
		]);
	}

	private async loadHeaderComponent() {
		await import(/* webpackChunkName: "chat-header" */ "./header/chat-header");
	}

	private async loadChatLoaderComponent() {
		await import(
			/* webpackChunkName: "chat-loader" */ "./chat-loader/chat-loader"
		);
	}

	private async loadTalkToAgentComponent() {
		await import(
			/* webpackChunkName: "talk-to-agent" */ "./talk-to-agent/talk-to-agent"
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
			const response = await chatBotApi.sendMessage({
				body: this.chatbotData.chatAPI.body,
				message: userMessage,
				conversationId: this.conversationId,
			});

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
		await this.updateComplete;

		const root = this.shadowRoot;
		if (!root) return;

		const chatMessageList = root.querySelector("chat-message-list");
		if (!chatMessageList) return;

		const messageListShadow = chatMessageList.shadowRoot;
		if (!messageListShadow) return;

		const scrollContainer = messageListShadow.querySelector(".chat-container");
		if (!scrollContainer) return;

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

	// Render methods
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

			${this.showChatInput
				? html`<chat-input
						@send-message=${this.handleSendMessage}
				  ></chat-input>`
				: html`<talk-to-agent
						.phoneNumber=${this.chatbotData.customerCareNumber}
				  ></talk-to-agent>`}
		`;
	}
}
