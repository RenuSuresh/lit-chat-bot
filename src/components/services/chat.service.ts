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

class ChatBotApi {
	private readonly basePath = "v1/chat-messages";

	async sendMessage(
		user: string,
		message: string,
		conversationId?: string
	): Promise<any> {
		const response = await api.post<SendMessageResponse>(`${this.basePath}`, {
			inputs: { userId: "39783010", parentOrderId: "525744916255784960" },
			query: message,
			response_mode: "blocking",
			conversation_id: conversationId || undefined,
			user: user,
		});
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
}

export const chatBotApi = new ChatBotApi();
