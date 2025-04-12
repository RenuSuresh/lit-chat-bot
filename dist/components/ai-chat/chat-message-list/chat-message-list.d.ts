import { LitElement } from "lit";
import "../timestamp-divider/timestamp-divider";
interface ChatMessage {
    sender: "user" | "bot";
    text: string;
    time: string;
    meta?: {
        userId?: string;
        isEdited?: boolean;
    };
}
export declare class ChatMessageList extends LitElement {
    static styles: import("lit").CSSResult[];
    isNewConversation: boolean;
    messages: ChatMessage[];
    loading: boolean;
    botImage: string;
    render(): import("lit-html").TemplateResult<1>;
    private renderTimestampDivider;
    private renderMessage;
    private renderLoadingIndicator;
}
export {};
