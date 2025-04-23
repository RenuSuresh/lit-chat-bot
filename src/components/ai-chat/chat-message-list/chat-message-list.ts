import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

import "../timestamp-divider/timestamp-divider";
import { withChatContext } from "../context/with-chat-context";
import { commonStyles } from "../styles.css";
import { styles } from "./chat-message-list.css";
import { DEFAULT_IMAGES } from "../constants";
import type { ChatMessage, ChatInfo } from "../types/message.types";
import { MessageType } from "../types/message.types";
import "../chat-info-strip/chat-info-strip";
import "../message/bot-message";
import "../message/user-message";
import "../chat-loader/chat-loader";

@customElement("chat-message-list")
export class ChatMessageList extends withChatContext(LitElement) {
	static styles = [
		commonStyles,
		css`
			:host {
				display: flex;
				flex-direction: column;
				height: 100%;
				overflow: hidden;
			}

			.chat-container {
				flex: 1;
				overflow-y: auto;
				padding: 16px;
				scroll-behavior: smooth;
			}

			/* bot-message,
			user-message {
				display: block;
				margin-bottom: 16px;
			} */
		`,
	];

	@state() isNewConversation = true;
	@property({ type: String }) botImage: string = DEFAULT_IMAGES.BOT;
	@property({ type: Boolean }) isConversationClosed = false;
	@property({ type: Boolean }) isStartChatReached = false;
	@property({ type: Boolean }) isTransferCallReached = false;

	private chatContainer: HTMLElement | null = null;
	private observer: MutationObserver | null = null;
	private scrollTimeoutId: number | null = null;

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("force-chat-scroll", () =>
			this.forceScrollToBottom()
		);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("force-chat-scroll", () =>
			this.forceScrollToBottom()
		);
		if (this.scrollTimeoutId) {
			clearTimeout(this.scrollTimeoutId);
		}
	}

	firstUpdated() {
		this.scrollToBottom();
	}

	updated(changedProperties: Map<string, any>) {
		super.updated(changedProperties);
		if (changedProperties.has("chatContext")) {
			this.scrollToBottom();
		}
	}

	scrollToBottom() {
		const chatContainer = this.shadowRoot?.querySelector(".chat-container");
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}

	private renderTimestampDivider() {
		return when(
			this.isNewConversation,
			() => html`
				<timestamp-divider
					.date=${new Date()}
					.showFullDate=${true}
				></timestamp-divider>
			`
		);
	}

	private renderMessage(msg: ChatMessage) {
		return msg.sender === "bot"
			? html`<bot-message
					.message=${msg}
					.botImage=${this.botImage}
			  ></bot-message>`
			: html`<user-message .message=${msg}></user-message>`;
	}

	private renderLoadingIndicator() {
		return this.chatContext.isLoading
			? html`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<chat-loader></chat-loader>
						</div>
					</div>
			  </div>`
			: null;
	}

	private getStartChatInfo(): ChatInfo {
		return {
			type: MessageType.INFO,
			message: "You've reached the start of the conversation.",
		};
	}

	private getConversationCloseInfo(): ChatInfo {
		return {
			type: MessageType.INFO,
			message: "✅ This conversation has been closed",
		};
	}

	private getTransferCallInfo(): ChatInfo {
		return {
			type: MessageType.INFO,
			message: "Transferring your call to one of our support executive",
		};
	}

	render() {
		return html`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${when(
					this.isStartChatReached,
					() => html`
						<chat-info-strip .info=${this.getStartChatInfo()}></chat-info-strip>
					`
				)}
				${this.chatContext.messages.map((msg) => this.renderMessage(msg))}
				${this.renderLoadingIndicator()}
				${when(
					this.isConversationClosed,
					() => html`
						<chat-info-strip
							.info=${this.isTransferCallReached
								? this.getTransferCallInfo()
								: this.getConversationCloseInfo()}
						></chat-info-strip>
					`
				)}
			</div>
		`;
	}

	public forceScrollToBottom() {
		if (this.scrollTimeoutId) {
			clearTimeout(this.scrollTimeoutId);
		}

		this.scrollTimeoutId = window.setTimeout(() => {
			const chatContainer = this.shadowRoot?.querySelector(".chat-container");
			if (chatContainer) {
				const scrollOptions = {
					top: chatContainer.scrollHeight,
					behavior: "smooth" as ScrollBehavior,
				};

				chatContainer.scrollTo(scrollOptions);

				setTimeout(() => {
					if (
						chatContainer.scrollTop + chatContainer.clientHeight <
						chatContainer.scrollHeight
					) {
						chatContainer.scrollTo(scrollOptions);
					}
				}, 500);
			}
		}, 100);
	}
}
