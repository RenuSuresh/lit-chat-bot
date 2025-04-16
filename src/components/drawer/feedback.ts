import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("bottom-drawer")
export class BottomDrawer extends LitElement {
	static styles = css`
		:host {
			display: block;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1000;
			transform: translateY(100%);
			transition: transform 0.3s ease-out;
		}

		:host([open]) {
			transform: translateY(0);
		}

		.drawer-container {
			background: white;
			border-radius: 16px 16px 0 0;
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
			padding: 20px;
			max-height: 80vh;
			overflow-y: auto;
		}

		.handle {
			width: 40px;
			height: 4px;
			background: #ddd;
			border-radius: 2px;
			margin: 0 auto 16px;
			cursor: pointer;
		}

		.content {
			padding-bottom: env(safe-area-inset-bottom);
		}
	`;

	@property({ type: Boolean, reflect: true })
	open = false;

	@query(".drawer-container")
	private drawerContainer!: HTMLDivElement;

	private startY = 0;
	private startTranslateY = 0;

	render() {
		return html`
			<div
				class="drawer-container"
				@touchstart=${this.handleTouchStart}
				@touchmove=${this.handleTouchMove}
			>
				<div class="handle" @click=${this.toggle}></div>
				<div class="content">
					<slot></slot>
				</div>
			</div>
		`;
	}

	toggle() {
		this.open = !this.open;
		this.dispatchEvent(new CustomEvent("toggle", { detail: this.open }));
	}

	show() {
		this.open = true;
	}

	hide() {
		this.open = false;
	}

	private handleTouchStart(e: TouchEvent) {
		this.startY = e.touches[0].clientY;
		this.startTranslateY = this.open ? 0 : 100;
		this.drawerContainer.style.transition = "none";
	}

	private handleTouchMove(e: TouchEvent) {
		if (!this.startY) return;

		const currentY = e.touches[0].clientY;
		const diff = currentY - this.startY;
		const percentage = Math.min(Math.max(diff / 200, -1), 1); // Limit to -100% to 100%

		if (this.open && percentage > 0) {
			// Dragging down on open drawer
			this.style.transform = `translateY(${percentage * 100}%)`;
		} else if (!this.open && percentage < 0) {
			// Dragging up on closed drawer
			this.style.transform = `translateY(${100 + percentage * 100}%)`;
		}

		if (e.cancelable) {
			e.preventDefault();
		}
	}

	private handleTouchEnd() {
		this.drawerContainer.style.transition = "";
		const currentTransform = this.style.transform;
		const currentTranslate = parseInt(
			currentTransform.replace(/[^\d.]/g, "") || "100"
		);

		if (this.open) {
			// If dragged more than 40% down, close it
			if (currentTranslate > 40) {
				this.hide();
			} else {
				this.style.transform = "translateY(0)";
			}
		} else {
			// If dragged more than 60% up, open it
			if (currentTranslate < 40) {
				this.show();
			} else {
				this.style.transform = "translateY(100%)";
			}
		}

		this.startY = 0;
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener("touchend", this.handleTouchEnd);
		this.addEventListener("touchcancel", this.handleTouchEnd);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("touchend", this.handleTouchEnd);
		this.removeEventListener("touchcancel", this.handleTouchEnd);
	}
}
