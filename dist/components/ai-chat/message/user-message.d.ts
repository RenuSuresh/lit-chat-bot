import { LitElement } from "lit";
import type { ChatMessage } from "../types/message.types";
export declare class UserMessage extends LitElement {
    static styles: import("lit").CSSResult[];
    message: ChatMessage | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
