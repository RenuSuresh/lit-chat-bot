import { LitElement } from "lit";
export declare class ChatInput extends LitElement {
    static styles: import("lit").CSSResult[];
    private inputValue;
    sendMsgEnableImage: string;
    sendMsgDisableImage: string;
    render(): import("lit-html").TemplateResult<1>;
    private _focusInput;
    private _handleFocus;
    private _adjustHeight;
    private _handleInput;
    private _handleKeyPress;
    private handleSendClick;
    private emitSendMessage;
}
