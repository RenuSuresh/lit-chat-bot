import { LitElement } from "lit";
declare const ChatInput_base: (new (...args: any[]) => LitElement & {
    chatContext: import("../../../context/chat-context.interface").ChatContext;
}) & typeof LitElement;
export declare class ChatInput extends ChatInput_base {
    static styles: import("lit").CSSResult[];
    private inputValue;
    private charCount;
    sendMsgEnableImage: string;
    sendMsgDisableImage: string;
    private _focusInput;
    private _handleFocus;
    private _adjustHeight;
    private _handleInput;
    private _handleKeyPress;
    private handleSendClick;
    private emitSendMessage;
    private handleSendMessage;
    private getCurrentTime;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
