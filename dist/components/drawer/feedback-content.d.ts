import { LitElement } from "lit";
export declare class FeedbackContent extends LitElement {
    static styles: import("lit").CSSResult;
    rating: number;
    submitted: boolean;
    private handleSubmit;
    private handleStarClick;
    private renderThankYou;
    private renderFeedbackForm;
    render(): import("lit-html").TemplateResult<1>;
}
