import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { commonStyles } from "./styles.css";
import { DEFAULT_IMAGES } from "./constants";
import { withChatContext } from "./context/with-chat-context";
import type { ChatApiBody, ChatMessage, Theme } from "./theme.interface";

// Services
import { chatBotApi } from "../services/chat.service";

// Components
import "./header/chat-header";
import "./chat-message-list/chat-message-list";
import "./chat-input/chat-input";
import "../drawer/feedback/feedback-bottom-sheet";

@customElement("ai-chat")
export class AIChat extends withChatContext(LitElement) {
	static styles = [commonStyles];

	// Properties
	@property({ type: Object }) apiBody!: ChatApiBody;
	@property({ type: String }) botImage: string = DEFAULT_IMAGES.BOT;
	@property({ type: String }) sendMsgEnableImage: string =
		DEFAULT_IMAGES.SEND_MESSAGE_ENABLE;
	@property({ type: String }) sendMsgDisableImage: string =
		DEFAULT_IMAGES.SEND_MESSAGE_DISABLE;
	@property({ type: String }) closeChatIcon: string = DEFAULT_IMAGES.CLOSE_CHAT;
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

	@state() private showChatInput: boolean = true;

	@state() private showFeedbackDrawer = false;

	@state() private rating: number = 0;

	private handleEndConversation() {
		// this.showChatInput = false;
		this.showFeedbackDrawer = true;
	}

	// Add this method to handle rating selection
	private handleRatingSelect(e: CustomEvent) {
		this.rating = e.detail.rating;
	}

	// Add this method to submit feedback
	private async submitFeedback() {
		try {
			await chatBotApi.submitFeedback({
				rating: this.rating,
				conversationId: this.chatContext.conversationId,
			});
			this.showFeedbackDrawer = false;
		} catch (error) {
			console.error("Error submitting feedback:", error);
		}
	}

	// Lifecycle methods
	connectedCallback() {
		super.connectedCallback();
		this.initializeSessionStorage();
		this.loadComponents();
		// Initialize context with theme
		this.chatContext.updateTheme(this.theme);
	}

	// Private methods
	private initializeSessionStorage() {
		try {
			const storedData = sessionStorage.getItem("chatbotData");

			if (!storedData) {
				const defaultData = {
					chatAPI: {
						body: {
							inputs: {
								userId: "39783010",
								parentOrderId: "525744916255784960",
							},
							user: "Rakesh",
						},
						headers: {},
						theme: {},
					},
					customerCareNumber: "",
				};

				sessionStorage.setItem("chatbotData", JSON.stringify(defaultData));
				this.chatContext.setChatbotData(defaultData);
			} else {
				const parsedData = JSON.parse(storedData);
				this.chatContext.setChatbotData(parsedData);
			}
		} catch (error) {
			console.error("Error initializing session storage:", error);
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
		this.chatContext.setLoading(true);
		const userMessage = e.detail.text;

		// Add user message and scroll
		this.chatContext.addMessage({
			sender: "user",
			text: userMessage,
			time: this.getCurrentTime(),
		});
		await this.scrollToBottom();

		try {
			const response = await chatBotApi.sendMessage({
				body: this.chatContext.chatbotData.chatAPI.body,
				message: userMessage,
				conversationId: this.chatContext.conversationId,
			});

			this.chatContext.setConversationId(response.conversation_id);

			const botMessage =
				JSON.parse(response.answer).assistantLastMessage ||
				"Sorry, I encountered an error. Please try again.";

			// Add bot message and scroll
			this.chatContext.addMessage({
				sender: "bot",
				text: botMessage,
				time: this.getCurrentTime(),
			});
			await this.scrollToBottom();
		} catch (error) {
			// Add error message and scroll
			this.chatContext.addMessage({
				sender: "bot",
				text: "Sorry, I encountered an error. Please try again.",
				time: this.getCurrentTime(),
			});
			await this.scrollToBottom();
		} finally {
			this.chatContext.setLoading(false);
		}
		if (
			userMessage.includes("no, thanks") ||
			userMessage.includes("no thanks") ||
			userMessage.includes("that's all")
		) {
			this.handleEndConversation();
		}
	}

	private async scrollToBottom() {
		// Wait for the next frame to ensure DOM is updated
		await new Promise((resolve) => requestAnimationFrame(resolve));

		// Find the chat message list and scroll it
		const chatMessageList = this.shadowRoot?.querySelector("chat-message-list");
		if (chatMessageList) {
			const chatContainer =
				chatMessageList.shadowRoot?.querySelector(".chat-container");
			if (chatContainer) {
				chatContainer.scrollTo({
					top: chatContainer.scrollHeight,
					behavior: "smooth",
				});
			}
		}
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
					--font-family: ${this.chatContext.theme.fontFamily};
					--header-bg-color: ${this.chatContext.theme.headerBgColor};
					--header-title-color: ${this.chatContext.theme.headerTitleColor};
					--header-subtitle-color: ${this.chatContext.theme
						.headerSubtitleColor};
					--message-bg-color: ${this.chatContext.theme.messageContainerBgColor};
					--loader-color: ${this.chatContext.theme.loaderColor};
					--input-background-color: ${this.chatContext.theme
						.inputBackgroundColor};
					--input-border-color: ${this.chatContext.theme.inputBorderColor};
					--placeholder-text-color: ${this.chatContext.theme
						.placeholderTextColor};
					--input-text-color: ${this.chatContext.theme.inputTextColor};
					--bot-msg-bg-color: ${this.chatContext.theme.botMsgBgColor};
					--bot-msg-border-color: ${this.chatContext.theme.botMsgBorderColor};
					--bot-msg-text-color: ${this.chatContext.theme.botMsgTextColor};
					--user-msg-bg-color: ${this.chatContext.theme.userMsgBgColor};
					--user-msg-text-color: ${this.chatContext.theme.userMsgTextColor};
					--user-msg-border-color: ${this.chatContext.theme.userMsgBorderColor};
				}
			</style>

			<chat-header
				.closeChatIcon=${this.closeChatIcon}
				.onCloseChat=${this._handlePageClose}
			></chat-header>

			<chat-message-list .botImage=${this.botImage}></chat-message-list>

			${this.showChatInput
				? html`<chat-input
						@send-message=${this.handleSendMessage}
				  ></chat-input>`
				: html`<talk-to-agent
						.phoneNumber=${this.chatContext.chatbotData.customerCareNumber}
				  ></talk-to-agent>`}

			<!-- Add the bottom drawer for feedback -->

			<feedback-bottom-sheet
				?open=${this.showFeedbackDrawer}
				@close=${() => (this.showFeedbackDrawer = false)}
				@rating-select=${this.handleRatingSelect}
				@submit=${this.submitFeedback}
			></feedback-bottom-sheet>

			<!-- Add a button to trigger the feedback drawer -->
			<!-- <button
				class="feedback-button"
				@click=${() => (this.showFeedbackDrawer = true)}
			>
				Rate Your Experience
			</button> -->
		`;
	}
}
