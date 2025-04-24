import { ChatApiBody, ChatMessage } from "../components/ai-chat/theme.interface";
export interface ChatContext {
    messages: ChatMessage[];
    isLoading: boolean;
    conversationId: string;
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
    addMessage: (message: ChatMessage) => void;
    setLoading: (loading: boolean) => void;
    setConversationId: (id: string) => void;
    setChatbotData: (data: ChatApiBody) => void;
    updateTheme: (theme: Partial<ChatContext["theme"]>) => void;
}
