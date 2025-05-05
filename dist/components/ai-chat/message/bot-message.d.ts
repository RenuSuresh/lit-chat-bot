import { LitElement } from "lit";
import type { ChatMessage } from "../types/message.types";
export declare class BotMessage extends LitElement {
    static styles: import("lit").CSSResult[];
    message: ChatMessage;
    botImage: string;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
