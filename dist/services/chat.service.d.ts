declare class ChatBotApi {
    private readonly basePath;
    private tags;
    private user;
    private inputs;
    private headers;
    constructor();
    private updateConfig;
    sendMessage({ message, conversationId, headers, }: {
        message: string;
        conversationId?: string;
        headers?: Record<string, string>;
    }): Promise<any>;
    sendWelcomeMessage({}: {}): Promise<any>;
    fetchConversationHistory({ conversationId, }: {
        conversationId?: string;
        headers?: Record<string, string>;
    }): Promise<any>;
    submitFeedback({ conversationId, rating, }: {
        conversationId?: string;
        rating?: number;
        headers?: Record<string, string>;
    }): Promise<any>;
}
export declare const chatBotApi: ChatBotApi;
export {};
