import {
	ChatApiBody,
	ChatMessage,
} from "../components/ai-chat/theme.interface";

export interface MessageGroup extends ChatMessage {
	messages: string; // JSON stringified array of ChatMessage
	session?: string;
}

export interface ChatContext {
	messages: ChatMessage[];
	messagesData: MessageGroup[];
	isLoading: boolean;
	conversationId: string;
	lastHistoryConversationId: string;
	showFeedbackDrawer: boolean;
	chatbotData: ChatApiBody;
	theme: {
		fontFamily: string;
		headerBgColor: string;
		headerTitleColor: string;
		headerSubtitleColor: string;
		messageContainerBgColor: string;
		loaderColor: string;
		botMsgBgColor: string;
		botMsgBorderColor: string;
		botMsgTextColor: string;
		userMsgBgColor: string;
		userMsgTextColor: string;
		userMsgBorderColor: string;
		inputBackgroundColor: string;
		inputBorderColor: string;
		inputTextColor: string;
		placeholderTextColor: string;
	};
	addMessage?: (message: ChatMessage) => void;
	setLoading: (loading: boolean) => void;
	setCurrentSessionConversationId: (id: string) => void;
	setLastHistoryConversationId: (id: string) => void;
	setChatbotData: (data: ChatApiBody) => void;
	updateTheme: (theme: Partial<ChatContext["theme"]>) => void;
	addMessages: (messages: MessageGroup) => void;
	appendMessage: (message: ChatMessage) => void;
	prependMessages: (messages: MessageGroup) => void;
	setShowFeedbackDrawer: (show: boolean) => void;
	resetInactivityTimer: () => void;
}
