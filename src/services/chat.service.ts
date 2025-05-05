import { api } from "./api.service";
import { ChatContextSingleton } from "../context/chat-context";

// Define response interfaces
interface SendMessageResponse {
	messages: ChatMessage[];
	conversationId: string;
	suggestedActions?: string[];
}

interface ChatMessage {
	id: string;
	text: string;
	sender: "user" | "bot";
	timestamp: number;
	metadata?: {
		sentiment?: string;
		quickReplies?: string[];
	};
}

interface ConversationHistory {
	messages: ChatMessage[];
	participants: string[];
}

interface ChatAPIBody {
	inputs: {
		tags: string;
		parentOrderId: string;
		history?: string;
		conversationID?: string;
		feedback?: string;
		sessions?: string;
	};
	user: string;
}

interface ChatAPIConfig {
	body: ChatAPIBody;
	headers: Record<string, string>;
	theme: Record<string, any>;
}

class ChatBotApi {
	private readonly basePath = "v1/chat-messages";
	private tags = JSON.stringify([]);
	private user = "";
	private inputs: Record<string, any> = {};
	private headers = {};

	constructor() {
		// Set up context listener
		ChatContextSingleton.getInstance().context.setChatbotData = (data) => {
			this.updateConfig(data);
			ChatContextSingleton.notifyListeners();
		};
	}

	private updateConfig(data: any): void {
		try {
			if (!data?.chatAPI?.body) {
				console.error("Invalid config data structure");
				return;
			}

			const { inputs, user, headers } = data.chatAPI.body;

			this.inputs = inputs || this.inputs;
			this.tags = (inputs as any)?.tags || this.tags;
			this.user = (user as string) || this.user;
			this.headers = headers;
		} catch (error) {
			console.error("Error updating config:", error);
		}
	}

	async sendMessage({
		message,
		conversationId,
		headers,
	}: {
		message: string;
		conversationId?: string;
		headers?: Record<string, string>;
	}): Promise<any> {
		console.log("Sending message with tags:", this.tags);
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: this.tags,
					conversation_id: conversationId || undefined,
					...this.inputs,
				},
				query: message,
				response_mode: "blocking",
				conversation_id: conversationId || undefined,
				user: this.user,
			},
			{
				headers,
			}
		);
		return response;
	}

	async sendWelcomeMessage({}: {}): Promise<any> {
		console.log("Sending welcome message with tags:", this.tags);
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: this.tags,
					conversation_id: "",
					...this.inputs,
				},
				query: " ",
				response_mode: "blocking",
				conversation_id: "",
				user: this.user,
			},
			{
				headers: this.headers,
			}
		);
		return response;
	}

	async fetchConversationHistory({
		conversationId,
	}: {
		conversationId?: string;
		headers?: Record<string, string>;
	}): Promise<any> {
		console.log("Fetching history with tags:", this.tags);
		const history = { limit: 1, last_conversation_id: conversationId };
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: this.tags,
					history: JSON.stringify(history),
					...this.inputs,
				},
				query: " ",
				response_mode: "blocking",
				conversation_id: "",
				user: this.user,
			},
			{
				headers: this.headers,
			}
		);
		return response;
	}

	async submitFeedback({
		conversationId,
		rating,
	}: {
		conversationId?: string;
		rating?: number;
		headers?: Record<string, string>;
	}): Promise<any> {
		console.log("Submitting feedback with tags:", this.tags);
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: this.tags,
					conversation_id: conversationId,
					rating,
					...this.inputs,
				},
				query: " ",
				response_mode: "blocking",
				conversation_id: conversationId,
				user: this.user,
				session: "closed",
			},
			{
				headers: this.headers,
			}
		);
		return response;
	}
}

// Create and export a singleton instance
export const chatBotApi = new ChatBotApi();
