import { ChatState, ChatAction } from "./types";

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
	switch (action.type) {
		case "ADD_MESSAGE":
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		case "SET_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		case "SET_CONVERSATION_ID":
			return {
				...state,
				conversationId: action.payload,
			};
		case "SET_SHOW_CHAT_INPUT":
			return {
				...state,
				showChatInput: action.payload,
			};
		case "SET_CHATBOT_DATA":
			return {
				...state,
				chatbotData: action.payload,
			};
		default:
			return state;
	}
}
