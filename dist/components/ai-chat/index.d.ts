import { LitElement } from "lit";
import type { ChatApiBody, Theme } from "./theme.interface";
import "./header/chat-header";
import "./chat-message-list/chat-message-list";
import "./chat-input/chat-input";
declare const AIChat_base: (new (...args: any[]) => LitElement & {
    chatContext: import("./context/chat-context.interface").ChatContext;
}) & typeof LitElement;
export declare class AIChat extends AIChat_base {
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
    private showChatInput;
    connectedCallback(): void;
    private initializeSessionStorage;
    private loadComponents;
    private loadHeaderComponent;
    private loadChatLoaderComponent;
    private loadTalkToAgentComponent;
    private _handlePageClose;
    private handleSendMessage;
    private scrollToBottom;
    private getCurrentTime;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
