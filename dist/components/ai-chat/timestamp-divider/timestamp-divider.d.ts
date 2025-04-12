import { LitElement } from "lit";
export declare class TimestampDivider extends LitElement {
    static styles: import("lit").CSSResult[];
    timestamp: string;
    date?: Date;
    private get displayTimestamp();
    render(): import("lit-html").TemplateResult<1>;
}
