import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../base-drawer";
import "./feedback-content";
import { withChatContext } from "../../../context/with-chat-context";
import { chatBotApi } from "../../../services/chat.service";

@customElement("feedback-bottom-sheet")
export class FeedbackBottomSheet extends withChatContext(LitElement) {
	@property({ type: Number })
	rating = 0;

	@property({ type: Boolean })
	submitted = false;

	private async handleClose() {
		await chatBotApi
			.submitFeedback({
				conversationId: this.chatContext.conversationId,
				rating: this.rating,
			})
			.then(() => {
				const lastMessage = this.chatContext.messagesData.pop();
				if (lastMessage) {
					lastMessage.session = "closed";
					this.chatContext.messagesData.push(lastMessage);
					const root = document.querySelector("ai-chat");

					// Get the chat message list and force scroll
					const chatMessageList =
						root?.shadowRoot?.querySelector("chat-message-list");
					if (chatMessageList) {
						(chatMessageList as any).forceScrollToBottom();
					}
				}
				this.submitted = false;
				this.chatContext.setShowFeedbackDrawer(false);
				this.dispatchEvent(new CustomEvent("close"));
				this.rating = 0;
			});
	}

	private handleSubmit() {
		this.submitted = true;
		this.dispatchEvent(new CustomEvent("submit", { detail: this.rating }));

		// Auto close after showing thank you message
		setTimeout(() => {
			this.handleClose();
		}, 3000);
	}

	private handleRatingSelect(e: CustomEvent) {
		this.rating = e.detail.rating;
	}

	render() {
		return html`
			<base-drawer
				?open=${this.chatContext.showFeedbackDrawer}
				@close=${this.handleClose}
			>
				<feedback-content
					.rating=${this.rating}
					.submitted=${this.submitted}
					@rating-select=${this.handleRatingSelect}
					@submit=${this.handleSubmit}
				></feedback-content>
			</base-drawer>
		`;
	}
}
