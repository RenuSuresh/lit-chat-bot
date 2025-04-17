import { LitElement } from "lit";
import type { ChatInfo } from "../types/message.types";
export declare class ChatInfoStrip extends LitElement {
    static styles: import("lit").CSSResult[];
    info?: ChatInfo;
    message: string;
    private get displayMessage();
    render(): import("lit-html").TemplateResult<1>;
}
