import { LitElement } from "lit";
export declare class ChatHeader extends LitElement {
    static styles: import("lit").CSSResult[];
    closeChatIcon: string;
    onCloseChat?: () => void;
    private handleCloseChat;
    render(): import("lit-html").TemplateResult<1>;
}
