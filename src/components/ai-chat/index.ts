import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { commonStyles } from "./styles.css";
import { DEFAULT_IMAGES } from "./constants";
import { withChatContext } from "../../context/with-chat-context";
import type { ChatApiBody, Theme } from "./theme.interface";

// Components
import "./header/chat-header";
import "./chat-message-list/chat-message-list";
import "./chat-input/chat-input";
import "./chat-loader/chat-loader";
import "../drawer/feedback/feedback-bottom-sheet";
import "../drawer/session-close-popup/session-close-popup";

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

	private inactivityTimer: number | null = null;

	private chatInputObserver: ResizeObserver | null = null;

	// Lifecycle methods
	connectedCallback() {
		super.connectedCallback();

		const tags = {
			// merchantId: "Pharmeasy",
			// vertical: "pharma",
			mid: "3",
			bu: "PEPSI",
		};

		const chatAPI = {
			body: {
				inputs: {
					tags: JSON.stringify(tags),
				},
				user: "39783010",
			},
			headers: {},
			theme: {},
		};

		const setupChatSession = () => {
			sessionStorage.setItem("chatbotData", JSON.stringify({ chatAPI }));
		};

		setupChatSession();
		this.initializeSessionStorage();
		this.loadComponents();
		this.chatContext.updateTheme(this.theme);
	}

	async firstUpdated() {
		// Add observer for chat input height changes
		const chatInput = this.shadowRoot?.querySelector("chat-input");

		if (chatInput) {
			this.chatInputObserver = new ResizeObserver((entries) => {
				for (const entry of entries) {
					const height = entry.contentRect.height + 58;
					this.style.setProperty("--chat-input-height", `${height}px`);
				}
			});
			this.chatInputObserver.observe(chatInput);
		}
	}

	disconnectedCallback() {
		if (this.chatInputObserver) {
			this.chatInputObserver.disconnect();
		}
		super.disconnectedCallback();
		if (this.inactivityTimer) {
			window.clearTimeout(this.inactivityTimer);
		}
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
								userId: "",
								parentOrderId: "",
							},
							user: "",
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
				? html`<chat-input></chat-input>`
				: html`<talk-to-agent
						.phoneNumber=${this.chatContext.chatbotData.customerCareNumber}
				  ></talk-to-agent>`}

			<!-- Add the bottom drawer for feedback -->

			<feedback-bottom-sheet></feedback-bottom-sheet>

			<session-close-popup></session-close-popup>
		`;
	}
}
