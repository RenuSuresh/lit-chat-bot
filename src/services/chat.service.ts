import { api } from "./api.service";

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

	constructor(private config: ChatAPIConfig) {}

	async sendMessage({
		body,
		message,
		conversationId,
		headers,
	}: {
		body: any;
		message: string;
		conversationId?: string;
		headers?: Record<string, string>;
	}): Promise<any> {
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: body.inputs.tags,
					parentOrderId: body.inputs.parentOrderId,
					conversation_id: conversationId || undefined,
				},
				query: message,
				response_mode: "blocking",
				conversation_id: conversationId || undefined,
				user: body.user,
			},
			{
				headers,
			}
		);
		return response;
	}
	// history: body.inputs.history,
	// conversationID: body.inputs.conversationID,
	// feedback: body.inputs.feedback,
	// sessions: body.inputs.sessions,

	async sendWelcomeMessage({
		body,

		conversationId,
		headers,
	}: {
		body: any;
		conversationId?: string;
		headers?: Record<string, string>;
	}): Promise<any> {
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: body.inputs.tags,
					parentOrderId: body.inputs.parentOrderId,
					conversation_id: conversationId || undefined,
				},
				query: "",
				response_mode: "blocking",
				conversation_id: conversationId || undefined,
				user: body.user,
			},
			{
				headers,
			}
		);
		return response;
	}

	async fetchConversationHistory({
		body,
		conversationId,
		headers,
	}: {
		body: any;
		conversationId?: string;
		headers?: Record<string, string>;
	}): Promise<any> {
		const response = await api.post<SendMessageResponse>(
			`${this.basePath}`,
			{
				inputs: {
					tags: body.inputs.tags,
					// parentOrderId: body.inputs.parentOrderId,
					history:
						'{"limit":1,"last_conversation_id":"539d42f6-1a86-4633-ab06-d1420873ee05"}',
				},
				query: " ",
				response_mode: "blocking",
				conversation_id: conversationId || undefined,
				user: body.user,
			},
			{
				headers,
			}
		);
		return response;
	}

	// async getConversationHistory(
	// 	userId: string,
	// 	conversationId?: string
	// ): Promise<{ messages: ChatMessage[] }> {
	// 	const params = new URLSearchParams({ userId });
	// 	if (conversationId) params.append("conversationId", conversationId);

	// 	return api.get<{ messages: ChatMessage[] }>(
	// 		`${this.basePath}/conversations?${params.toString()}`
	// 	);
	// }

	// async startNewConversation(
	// 	userId: string
	// ): Promise<{ conversationId: string }> {
	// 	return api.post<{ conversationId: string }>(
	// 		`${this.basePath}/conversations`,
	// 		{ userId }
	// 	);
	// }

	// async uploadAttachment(
	// 	file: File,
	// 	conversationId: string
	// ): Promise<{ url: string; type: string }> {
	// 	const formData = new FormData();
	// 	formData.append("file", file);
	// 	formData.append("conversationId", conversationId);

	// 	return api.post<{ url: string; type: string }>(
	// 		`${this.basePath}/attachments`,
	// 		formData,
	// 		true // Custom flag to skip JSON headers
	// 	);
	// }

	async submitFeedback({
		rating,
		conversationId,
	}: {
		rating: number;
		conversationId: string;
	}): Promise<void> {
		await api.post(`${this.basePath}/feedback`, {
			rating,
			conversation_id: conversationId,
		});
	}
}

// Create and export a singleton instance
const defaultConfig: ChatAPIConfig = {
	body: {
		inputs: {
			tags: JSON.stringify([]),
			parentOrderId: "525744916255784960",
			history: "",
			conversationID: "",
			feedback: "",
			sessions: "",
		},
		user: "39783010",
	},
	headers: {},
	theme: {},
};

export const chatBotApi = new ChatBotApi(defaultConfig);

// export const chatBotApi = new ChatBotApi();
