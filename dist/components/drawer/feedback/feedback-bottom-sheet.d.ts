import { LitElement } from "lit";
import "../base-drawer";
import "./feedback-content";
export declare class FeedbackBottomSheet extends LitElement {
    open: boolean;
    rating: number;
    submitted: boolean;
    private handleClose;
    private handleSubmit;
    private handleRatingSelect;
    render(): import("lit-html").TemplateResult<1>;
}
