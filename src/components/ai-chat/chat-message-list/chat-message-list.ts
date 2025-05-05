import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

import "../timestamp-divider/timestamp-divider";
import { withChatContext } from "../../../context/with-chat-context";
import { commonStyles } from "../styles.css";
import { styles } from "./chat-message-list.css";
import { DEFAULT_IMAGES } from "../constants";
import type {
	ChatMessage as MessageTypesChatMessage,
	ChatInfo,
} from "../types/message.types";
import { MessageType } from "../types/message.types";
import type { ChatMessage } from "../theme.interface";
import { MessageGroup } from "../../../context/chat-context.interface";
import "../chat-info-strip/chat-info-strip";
import "../message/bot-message";
import "../message/user-message";
import "../chat-loader/chat-loader";
import { safeJsonParse, safeJsonStringify } from "../../../utils/json.util";
import { chatBotApi } from "../../../services/chat.service";

interface SessionMessage {
	text: string;
	time: number;
	type: "query" | "answer";
}

interface ChatMessageGroup extends MessageGroup {
	session?: string;
	conversationId?: string;
	isStartChatReached?: boolean;
}

@customElement("chat-message-list")
export class ChatMessageList extends withChatContext(LitElement) {
	static styles = [commonStyles, styles];

	@state() isNewConversation = true;
	@property({ type: String }) botImage: string = DEFAULT_IMAGES.BOT;
	@property({ type: Boolean }) isConversationClosed = false;
	@property({ type: Boolean }) isStartChatReached = false;
	@property({ type: Boolean }) isTransferCallReached = false;
	@state() private isLoadingMore = false;
	@state() private hasMoreMessages = true;
	private scrollPositionBeforeLoad: number = 0;

	private chatContainer: HTMLElement | null = null;
	private observer: MutationObserver | null = null;

	private get messages(): ChatMessage[] {
		if (!this.chatContext.messagesData?.length) return [];

		return this.chatContext.messagesData.flatMap(
			(sessionData: ChatMessageGroup) => {
				const messages =
					safeJsonParse<SessionMessage[]>(sessionData.messages) || [];
				return Array.isArray(messages)
					? messages.map((msg: SessionMessage) => ({
							text: msg.text,
							time: this.formatTime(msg.time),
							type: msg.type,
					  }))
					: [];
			}
		);
	}

	private scrollToBottom(shouldAnimate = false) {
		if (!this.chatContainer) return;

		if (shouldAnimate) {
			this.chatContainer.scrollTo({
				top: this.chatContainer.scrollHeight,
				behavior: "smooth",
			});
		} else {
			this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
		}
	}

	private isBotMessage(msg: ChatMessage): boolean {
		return msg.type === MessageType.ANSWER;
	}

	private convertToMessageTypes(msg: ChatMessage): MessageTypesChatMessage {
		return {
			text: msg.text,
			time: msg.time,
			sender: msg.type === MessageType.ANSWER ? "bot" : "user",
			type: msg.type === MessageType.ANSWER ? MessageType.ANSWER : undefined,
		};
	}

	private renderMessage(msg: ChatMessage) {
		const convertedMsg = this.convertToMessageTypes(msg);
		return when(
			this.isBotMessage(msg),
			() => html`
				<bot-message
					.message=${convertedMsg}
					.botImage=${this.botImage}
				></bot-message>
			`,
			() => html` <user-message .message=${convertedMsg}></user-message> `
		);
	}

	async firstUpdated() {
		const response = await chatBotApi.fetchConversationHistory({
			conversationId: "",
		});

		const answer: any = safeJsonParse(response.answer);
		const messages: any = safeJsonParse(answer.messages);

		if (Object.keys(answer).length !== 0) {
			const messageGroup: ChatMessageGroup = {
				messages: safeJsonStringify(messages),
				conversationId: answer.conversationId,
				...answer,
			};
			this.chatContext.addMessages(messageGroup);
		}
		this.chatContext.setLastHistoryConversationId(answer.conversationId);

		if (!messages || answer.session === "closed") {
			const welcomeResponse = await chatBotApi.sendWelcomeMessage({
				conversationId: "",
			});
			const welcomeMessage: ChatMessageGroup = {
				time: new Date().toISOString(),
				messages: welcomeResponse.answer,
			};
			this.chatContext.addMessages(welcomeMessage);
			this.chatContext.setCurrentSessionConversationId(
				welcomeResponse.conversation_id
			);
		}

		this.chatContainer = this.shadowRoot?.getElementById(
			"chat-container"
		) as HTMLElement | null;

		if (this.chatContainer) {
			this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
		}

		requestAnimationFrame(() => this.scrollToBottom(false));

		if (this.chatContainer) {
			const { scrollTop } = this.chatContainer;
			if (scrollTop === 0 && Object.keys(answer).length !== 0) {
				this.handleScroll();
			}
		}
		this.chatContainer?.addEventListener(
			"scroll",
			this.handleScroll.bind(this)
		);
	}

	private async handleScroll() {
		if (!this.chatContainer || this.isLoadingMore || !this.hasMoreMessages)
			return;

		const { scrollTop, scrollHeight, clientHeight } = this.chatContainer;
		const threshold = 100; // pixels from top
		console.log("scrollHeight>>>>", scrollHeight, clientHeight, scrollTop);
		if (
			(scrollTop === threshold &&
				this.chatContainer.scrollHeight > clientHeight) ||
			scrollTop === 0
		) {
			this.scrollPositionBeforeLoad = scrollTop;
			await this.loadMoreMessages();
		}
	}

	private async loadMoreMessages() {
		this.isLoadingMore = true;

		try {
			const response = await chatBotApi.fetchConversationHistory({
				conversationId: this.chatContext.lastHistoryConversationId,
			});

			if (response.answer === "{}") {
				const startOfConversation: ChatMessageGroup = {
					isStartChatReached: true,
				};
				this.chatContext.prependMessages(startOfConversation);
			}
			if (response.answer) {
				const answer: any = safeJsonParse(response.answer);
				const messages: any = safeJsonParse(answer.messages);
				this.chatContext.setLastHistoryConversationId(answer.conversationId);

				if (Object.keys(answer).length !== 0) {
					const messageGroup: ChatMessageGroup = {
						messages: safeJsonStringify(messages),
						conversationId: answer.conversationId,
						...answer,
					};
					this.chatContext.prependMessages(messageGroup);
				}
			} else {
				this.hasMoreMessages = false;
			}
		} catch (error) {
			console.error("Error loading more messages:", error);
		} finally {
			this.isLoadingMore = false;

			if (this.chatContainer) {
				const newScrollHeight = this.chatContainer.scrollHeight;
				// this.chatContainer.scrollTop =
				// 	newScrollHeight - this.scrollPositionBeforeLoad;
				this.chatContainer.scrollTop = 200;
				console.log(
					"this.chatContainer.scrollTop>>>>",
					this.chatContainer.scrollTop
				);
			}
		}
	}

	updated(changedProperties: Map<string, any>) {
		super.updated(changedProperties);

		if (changedProperties.has("chatContext")) {
			const oldMessages = changedProperties.get("chatContext")?.messages || [];
			const hasNewMessages = this.messages.length > oldMessages.length;

			requestAnimationFrame(() => {
				this.scrollToBottom(hasNewMessages);
			});
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

	public forceScrollToBottom() {
		requestAnimationFrame(() => {
			setTimeout(() => {
				this.scrollToBottom();
			}, 50);
		});
	}

	private formatTime(epochTime: number): string {
		const date = new Date(epochTime);
		return date.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
	}

	private renderMessages(sessionData: ChatMessageGroup) {
		const sessionMessages =
			safeJsonParse<SessionMessage[]>(sessionData.messages) || [];
		const messages = Array.isArray(sessionMessages) ? sessionMessages : [];

		return html`
			${when(!sessionData.isStartChatReached, () =>
				this.renderTimestampDivider()
			)}
			${when(
				sessionData.isStartChatReached,
				() => html`
					<chat-info-strip .info=${this.getStartChatInfo()}></chat-info-strip>
				`
			)}
			${messages.map((msg: SessionMessage) => {
				const message: ChatMessage = {
					text: msg.text,
					time: this.formatTime(msg.time),
					type: msg.type,
				};
				if (msg.text.length > 1) return this.renderMessage(message);
			})}
			${this.renderLoadingIndicator()}
			${when(
				sessionData.session === "closed",
				() => html`
					<chat-info-strip
						.info=${this.isTransferCallReached
							? this.getTransferCallInfo()
							: this.getConversationCloseInfo()}
					></chat-info-strip>
				`
			)}
		`;
	}

	render() {
		requestAnimationFrame(() => this.scrollToBottom(false));
		console.log(
			"this.chatContext.messagesData>>>>>",
			this.chatContext.messagesData
		);
		return html`
			<div class="chat-container" id="chat-container">
				${this.chatContext.messagesData.map((sessionData) => {
					return this.renderMessages(sessionData as ChatMessageGroup);
				})}
			</div>
		`;
	}
}
