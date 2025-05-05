export interface ChatMessage {
    text: string;
    sender?: "user" | "bot" | "assistant";
    time: string | number;
    type?: MessageType;
    metadata?: Record<string, any>;
}
export declare enum MessageType {
    INFO = "info",
    ANSWER = "answer",
    QUERY = "query"
}
export interface MessageMetadata {
    orderId?: string;
    date?: string;
    time?: string;
    executive?: string;
}
export interface ChatInfo {
    type: MessageType;
    message: string;
    metadata?: MessageMetadata;
}
