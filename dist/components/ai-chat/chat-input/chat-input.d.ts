import { LitElement } from "lit";
export declare class ChatInput extends LitElement {
    static styles: import("lit").CSSResult[];
    private inputValue;
    sendMsgEnableImage: string;
    sendMsgDisableImage: string;
    render(): import("lit-html").TemplateResult<1>;
    private handleInput;
    private handleKeyPress;
    private handleSendClick;
    private emitSendMessage;
}
