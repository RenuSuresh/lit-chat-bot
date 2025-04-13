import { LitElement } from "lit";
import "./header/chat-header";
import "./chat-message-list/chat-message-list";
import "./chat-input/chat-input";
import { Theme } from "./theme.interface";
interface ChatApiBody {
    chatAPI: {
        body: Record<string, unknown>;
    };
    customerCareNumber: string;
}
export declare class AIChat extends LitElement {
    static styles: import("lit").CSSResult[];
    apiBody: ChatApiBody;
    botImage: string;
    sendMsgEnableImage: string;
    sendMsgDisableImage: string;
    closeChatIcon: string;
    onCloseChat?: () => void;
    showCloseButton: boolean;
    buttonLabel: string;
    theme: Theme;
    private isLoading;
    private chatbotData;
    private messages;
    private conversationId;
    private showChatInput;
    constructor();
    connectedCallback(): void;
    private initializeSessionStorage;
    private loadComponents;
    private loadHeaderComponent;
    private loadChatLoaderComponent;
    private loadTalkToAgentComponent;
    private _handlePageClose;
    private handleSendMessage;
    private addMessage;
    private scrollToBottom;
    private getCurrentTime;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
