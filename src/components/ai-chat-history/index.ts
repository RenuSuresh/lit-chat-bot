import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { chatBotApi } from "../../services/chat.service";
import { withChatContext } from "../../context/with-chat-context";
import { json } from "stream/consumers";

interface ChatHistoryItem {
	id: string;
	question: string;
	orderId: string;
	time: string;
	status?: "active" | "closed";
}

@customElement("ai-chat-history")
export class AIChatHistory extends withChatContext(LitElement) {
	static styles = css`
		.history-list {
			display: flex;
			flex-direction: column;
			gap: 16px;
			padding: 16px;
		}
		.history-card {
			background: #fff;
			border-radius: 12px;
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
			padding: 16px;
			display: flex;
			flex-direction: column;
			gap: 4px;
			border: 1px solid #f0f0f0;
		}
		.question-row {
			display: flex;
			align-items: center;
			gap: 8px;
			font-weight: 600;
			font-size: 16px;
		}
		.status-badge {
			background: #eafaf5;
			color: #10847e;
			border-radius: 12px;
			padding: 2px 12px;
			font-size: 12px;
			font-weight: 500;
			margin-left: 8px;
			display: flex;
			align-items: center;
			gap: 4px;
		}
		.meta-row {
			color: #6b7280;
			font-size: 13px;
			display: flex;
			gap: 8px;
			align-items: center;
		}
	`;

	@property({ type: Array })
	history: ChatHistoryItem[] = [];

	async firstUpdated() {
		const history = await chatBotApi.fetchConversationHistoryList();
		console.log("history>>>>>", history);
		this.history = JSON.parse(history.answer).response_body;
	}
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
	}

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

	render() {
		return html`
			<div class="history-list">
				${this.history.map(
					(item) => html`
						<div class="history-card">
							<div class="question-row">
								${item.question}
								${item.status === "active"
									? html`<span class="status-badge">
											<span
												style="width:8px;height:8px;background:#27ae60;border-radius:50%;display:inline-block;"
											></span>
											Active
									  </span>`
									: ""}
							</div>
							<div class="meta-row">
								Order ID ${item.orderId} • ${item.time}
							</div>
						</div>
					`
				)}
			</div>
		`;
	}
}
