import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "../timestamp-divider/timestamp-divider";
import { withChatContext } from "../context/with-chat-context";
import { commonStyles } from "../styles.css";
import { styles } from "./chat-message-list.css";
import { DEFAULT_IMAGES } from "../constants";
import type { ChatMessage } from "../theme.interface";

@customElement("chat-message-list")
export class ChatMessageList extends withChatContext(LitElement) {
	static styles = [commonStyles, styles];

	@state() isNewConversation = true;
	@property({ type: String }) botImage: string = DEFAULT_IMAGES.BOT;

	private chatContainer: HTMLElement | null = null;

	connectedCallback() {
		super.connectedCallback();
	}

	firstUpdated() {
		this.chatContainer = this.shadowRoot?.querySelector(
			".chat-container"
		) as HTMLElement;
		this.scrollToBottom();
	}

	updated(changedProperties: Map<string, any>) {
		super.updated(changedProperties);
		if (
			changedProperties.has("chatContext") &&
			this.chatContext.messages.length > 0
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

	render() {
		return html`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${this.chatContext.messages.map((msg) => this.renderMessage(msg))}
				${this.renderLoadingIndicator()}
			</div>
		`;
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
				<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">${unsafeHTML(msg.text)}</div>
					</div>
					<div class="bot-timestamp">${msg.time}</div>
				</div>
			`,
			() => html`
				<div class="user-message-container">
					<div class="user-message-content">
						<div class="user-message">${msg.text}</div>
					</div>
					<div class="user-timestamp">${msg.time}</div>
				</div>
			`
		);
	}

	private renderLoadingIndicator() {
		return this.chatContext.isLoading
			? html`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<loading-dots></loading-dots>
						</div>
					</div>
			  </div>`
			: null;
	}
}
