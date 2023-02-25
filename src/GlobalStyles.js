import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--textPrimary: #242424;
		--textSecondary: #828282;
		--textPlaceholder: #BDBDBD;
		--textAccent: #4f4f4f;

		--accent: #1AB2A6;
		--accent100: #ecedee;

		--bgSecondary: #F7F8FA;

		--offerCardOrange: #FFBE53;
		--offerCardRed: #F76870;
		--offerCardPurple: #BF71CA;

	}
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	* {
		user-select: none;
	}
	html,
	body {
		height: 100%;
		font-size: 62.5%;

	}

	body {
		font-family: 'Proxima Nova, sans-serif';
		font-style: normal;
		font-size: 1.25rem;
	}

	#__next {
		// Pushing the footer to the bottom of the page
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
	}
	label {
		display: block;
	}

	main {
		flex: 1;
	}

	a {
		font-weight: inherit;
		font-size: inherit;
		text-decoration: none;
		color: inherit;
	}	

	img {
		width: 100%;
		display: block;
	}
	h1, h2, h3 {
		line-height: 110%;
	}
	ul {
		list-style-type: none;
	}
	button {
		border: none;
		cursor: pointer;
		color: inherit;
	}
	footer {
		margin-top: auto;
	}
	.hidden {
		overflow: hidden;
	}
	p {
		line-height: 145%;
	}
`;

export default GlobalStyle;
