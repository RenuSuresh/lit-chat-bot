import { LitElement } from "lit";
import "../timestamp-divider/timestamp-divider";
import "../chat-info-strip/chat-info-strip";
import "../message/bot-message";
import "../message/user-message";
import "../chat-loader/chat-loader";
declare const ChatMessageList_base: (new (...args: any[]) => LitElement & {
    chatContext: import("../context/chat-context.interface").ChatContext;
}) & typeof LitElement;
export declare class ChatMessageList extends ChatMessageList_base {
    static styles: import("lit").CSSResult[];
    isNewConversation: boolean;
    botImage: string;
    isConversationClosed: boolean;
    isStartChatReached: boolean;
    isTransferCallReached: boolean;
    private chatContainer;
    private observer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: Map<string, any>): void;
    private scrollToBottom;
    private renderTimestampDivider;
    private renderMessage;
    private renderLoadingIndicator;
    private getStartChatInfo;
    private getConversationCloseInfo;
    private getTransferCallInfo;
    forceScrollToBottom(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
