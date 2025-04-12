declare class ChatBotApi {
    private readonly basePath;
    sendMessage({ body, message, conversationId, headers, }: {
        body: any;
        message: string;
        conversationId?: string;
        headers?: Record<string, string>;
    }): Promise<any>;
}
export declare const chatBotApi: ChatBotApi;
export {};
