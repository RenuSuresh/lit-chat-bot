import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./talk-to-agent.css";
import { DEFAULT_IMAGES, DEFAULT_VALUES } from "../constants";

@customElement("talk-to-agent")
export class TalkToAgent extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: String }) phoneNumber: string =
		DEFAULT_VALUES.CUSTOMER_CARE_NUMBER;

	private handleClick() {
		window.location.href = `tel:${this.phoneNumber}`;
	}

	render() {
		return html`
			<div class="talk-to-agent-container">
				<button class="talk-to-agent-button" @click=${this.handleClick}>
					<img
						src=${DEFAULT_IMAGES.PHONE}
						alt="Talk to our agent"
						width="24"
						height="24"
					/>
					Talk to our agent
				</button>
			</div>
		`;
	}
}
