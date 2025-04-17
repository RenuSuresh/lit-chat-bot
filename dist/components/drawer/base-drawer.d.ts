import { LitElement } from "lit";
export declare class BaseDrawer extends LitElement {
    static styles: import("lit").CSSResult;
    open: boolean;
    private isClosing;
    private backdrop;
    private popStateHandler;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    private toggleBodyOverflow;
    private handleClose;
    private addBackdrop;
    private removeBackdrop;
    private handleBackdropClick;
    render(): import("lit-html").TemplateResult<1>;
}
