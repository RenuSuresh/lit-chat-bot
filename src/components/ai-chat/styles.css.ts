import { css } from "lit";

export const commonStyles = css`
	:host {
		display: block;
		font-family: var(--font-family);
		overflow: hidden;
	}

	/* OR target specific elements */
	p,
	h1,
	h2,
	h3 {
		margin-block-start: 0;
		margin-block-end: 0;
	}
`;
