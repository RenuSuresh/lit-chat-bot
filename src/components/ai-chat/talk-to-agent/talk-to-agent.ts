import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { commonStyles } from "../styles.css";
import { styles } from "./talk-to-agent.css";

@customElement("talk-to-agent")
export class TalkToAgent extends LitElement {
	static styles = [commonStyles, styles];

	@property({ type: String })
	customerCareNumber: string = "+917666100300";

	private handleClick() {
		window.location.href = `tel:${this.customerCareNumber}`;
	}

	render() {
		return html`
			<div class="talk-to-agent-container">
				<button class="talk-to-agent-button" @click=${this.handleClick}>
					<img
						src="https://assets.pharmeasy.in/web-assets/images/callPhoneFilledWhite.svg"
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
