export interface Theme {
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
}
export interface ChatMessage {
    sender: "user" | "bot";
    text: string;
    time: string;
}
export interface ChatApiBody {
    chatAPI: {
        body: Record<string, unknown>;
    };
    customerCareNumber: string;
}
