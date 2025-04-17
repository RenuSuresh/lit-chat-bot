import { LitElement } from "lit";
import "../timestamp-divider/timestamp-divider";
declare const ChatMessageList_base: (new (...args: any[]) => LitElement & {
    chatContext: import("../context/chat-context.interface").ChatContext;
}) & typeof LitElement;
export declare class ChatMessageList extends ChatMessageList_base {
    static styles: import("lit").CSSResult[];
    isNewConversation: boolean;
    botImage: string;
    private chatContainer;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: Map<string, any>): void;
    private scrollToBottom;
    render(): import("lit-html").TemplateResult<1>;
    private renderTimestampDivider;
    private renderMessage;
    private renderLoadingIndicator;
}
export {};
