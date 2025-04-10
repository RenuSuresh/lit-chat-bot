import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "../timestamp-divider/timestamp-divider";

import { commonStyles } from "../styles.css";
import { styles } from "./chat-message-list.css";

interface ChatMessage {
	sender: "user" | "bot" | "system";
	text: string;
	time: string;
	status?: "sent" | "delivered" | "read"; // Optional message status
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

	render() {
		return html`
			<div class="chat-container">
				${when(
					this.isNewConversation,
					() => html`
						<timestamp-divider
							.date=${new Date()}
							.showFullDate=${true}
						></timestamp-divider>
					`
				)}
				${this.messages.map(
					(msg) => html`
						${when(
							msg.sender === "bot",
							() => html`
								<div class="bot-message-container">
									<div class="bot-message-content">
										<img
											src="https://assets.pharmeasy.in/web-assets/images/image_chatbot.png"
											alt="bot"
											width="40"
											height="40"
										/>
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
						)}
					`
				)}
			</div>
		`;
	}
}
