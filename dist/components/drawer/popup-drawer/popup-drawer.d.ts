import { LitElement } from "lit";
import "../base-drawer";
export declare class PopupDrawer extends LitElement {
    static styles: import("lit").CSSResult;
    open: boolean;
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    inactivityTimeout: number;
    phoneNumber: string;
    private inactivityTimer;
    private hasUserDismissed;
    connectedCallback(): void;
    disconnectedCallback(): void;
    startInactivityTimer(): void;
    handleActivity(): void;
    private clearInactivityTimer;
    private handleClose;
    private handlePrimaryClick;
    private handleSecondaryClick;
    render(): import("lit-html").TemplateResult<1>;
}
