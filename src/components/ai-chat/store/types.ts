// Message Types
export interface ChatMessage {
	sender: "user" | "bot";
	text: string;
	time: string;
}

// API Types
export interface ChatApiBody {
	chatAPI: {
		body: Record<string, unknown>;
	};
	customerCareNumber: string;
}

// State Types
export interface ChatState {
	messages: ChatMessage[];
	isLoading: boolean;
	conversationId: string;
	showChatInput: boolean;
	chatbotData: ChatApiBody;
}

// Action Types
export type ChatAction =
	| { type: "ADD_MESSAGE"; payload: ChatMessage }
	| { type: "SET_LOADING"; payload: boolean }
	| { type: "SET_CONVERSATION_ID"; payload: string }
	| { type: "SET_SHOW_CHAT_INPUT"; payload: boolean }
	| { type: "SET_CHATBOT_DATA"; payload: ChatApiBody };
