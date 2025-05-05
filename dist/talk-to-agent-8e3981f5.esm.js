import{i as t,s as e,D as n,x as o,a,c as i,_ as r,n as s,e as l}from"./index-1e71b6c7.esm.js";const p=t`
	.talk-to-agent-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 16px;
		box-shadow: 0px 0px 2px 0px #30363c05;
	}

	.talk-to-agent-button {
		background-color: #10847e;
		color: #ffffff;
		border-radius: 12px;
		gap: 8px;
		box-shadow: 0px 0px 2px 0px #30363c05;
		padding: 16px 24px;
		border: none;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-family);
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
	}
`;let c=class t extends e{constructor(){super(...arguments);this.phoneNumber=n.CUSTOMER_CARE_NUMBER}handleClick(){window.location.href=`tel:${this.phoneNumber}`}render(){return o`
			<div class="talk-to-agent-container">
				<button class="talk-to-agent-button" @click=${this.handleClick}>
					<img
						src=${a.PHONE}
						alt="Talk to our agent"
						width="24"
						height="24"
					/>
					Talk to our agent
				</button>
			</div>
		`}};c.styles=[i,p];r([s({type:String})],c.prototype,"phoneNumber",void 0);c=r([l("talk-to-agent")],c);export{c as TalkToAgent};
