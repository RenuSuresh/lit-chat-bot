import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

import "../timestamp-divider/timestamp-divider";
import { withChatContext } from "../../../context/with-chat-context";
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
	static styles = [commonStyles, styles];

	@state() isNewConversation = true;
	@property({ type: String }) botImage: string = DEFAULT_IMAGES.BOT;
	@property({ type: Boolean }) isConversationClosed = false;
	@property({ type: Boolean }) isStartChatReached = false;
	@property({ type: Boolean }) isTransferCallReached = false;

	private chatContainer: HTMLElement | null = null;
	private observer: MutationObserver | null = null;

	connectedCallback() {
		super.connectedCallback();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.observer) {
			this.observer.disconnect();
		}
	}

	firstUpdated() {
		this.chatContainer = this.shadowRoot?.getElementById(
			"chat-container"
		) as HTMLElement;
		if (this.chatContainer && this.observer) {
			this.observer.observe(this.chatContainer, {
				childList: true,
				characterData: true,
				subtree: true,
			});
		}
		this.scrollToBottom();
	}

	updated(changedProperties: Map<string, any>) {
		super.updated(changedProperties);

		// Check if messages were updated
		if (changedProperties.has("chatContext")) {
			const oldMessages = changedProperties.get("chatContext")?.messages || [];
			const newMessages = this.chatContext.messages;

			// Only scroll if there are new messages
			if (newMessages.length > oldMessages.length) {
				// Wait for the next frame to ensure DOM updates
				requestAnimationFrame(() => {
					// Add a small delay to ensure content is rendered
					setTimeout(() => {
						this.scrollToBottom();
					}, 50);
				});
			}
		}

		// Also scroll for other relevant changes
		if (
			changedProperties.has("isConversationClosed") ||
			changedProperties.has("isStartChatReached") ||
			changedProperties.has("isTransferCallReached")
		) {
			this.scrollToBottom();
		}
	}

	private scrollToBottom() {
		requestAnimationFrame(() => {
			if (this.chatContainer) {
				this.chatContainer.scrollTo({
					top: this.chatContainer.scrollHeight,
					behavior: "smooth",
				});
			}
		});
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
		return when(
			msg.sender === "bot",
			() => html`
				<bot-message .message=${msg} .botImage=${this.botImage}></bot-message>
			`,
			() => html` <user-message .message=${msg}></user-message> `
		);
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

	// Add this method to allow external components to trigger scroll
	public forceScrollToBottom() {
		requestAnimationFrame(() => {
			setTimeout(() => {
				this.scrollToBottom();
			}, 50);
		});
	}

	render() {
		return html`
			<div class="chat-container" id="chat-container">
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
}
