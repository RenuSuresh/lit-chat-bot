import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "../timestamp-divider/timestamp-divider";

import { commonStyles } from "../styles.css";
import { styles } from "./chat-message-list.css";
import { DEFAULT_IMAGES } from "../constants";
import { ChatStore } from "../store/store";

interface ChatMessage {
	sender: "user" | "bot";
	text: string;
	time: string;
	meta?: {
		userId?: string;
		isEdited?: boolean;
	};
}

@customElement("chat-message-list")
export class ChatMessageList extends LitElement {
	static styles = [commonStyles, styles];

	@state() isNewConversation = true;
	@property({ type: Array }) messages: ChatMessage[] = [];
	@property({ type: Boolean }) loading: boolean = false;
	@property({ type: String }) botImage: string = DEFAULT_IMAGES.BOT;
	@property({ attribute: false }) store!: ChatStore;

	render() {
		const state = this.store.getState();
		return html`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${state.messages.map((msg) => this.renderMessage(msg))}
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
		return this.loading
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
