import { ChatAction, ChatMessage, ChatApiBody } from "./types";

// Action creator types
export type AddMessageAction = (message: ChatMessage) => ChatAction;
export type SetLoadingAction = (isLoading: boolean) => ChatAction;
export type SetConversationIdAction = (conversationId: string) => ChatAction;
export type SetShowChatInputAction = (show: boolean) => ChatAction;
export type SetChatbotDataAction = (data: ChatApiBody) => ChatAction;

// Action creators
export const addMessage: AddMessageAction = (message) => ({
	type: "ADD_MESSAGE",
	payload: message,
});

export const setLoading: SetLoadingAction = (isLoading) => ({
	type: "SET_LOADING",
	payload: isLoading,
});

export const setConversationId: SetConversationIdAction = (conversationId) => ({
	type: "SET_CONVERSATION_ID",
	payload: conversationId,
});

export const setShowChatInput: SetShowChatInputAction = (show) => ({
	type: "SET_SHOW_CHAT_INPUT",
	payload: show,
});

export const setChatbotData: SetChatbotDataAction = (data) => ({
	type: "SET_CHATBOT_DATA",
	payload: data,
});
