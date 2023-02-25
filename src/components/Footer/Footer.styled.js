import styled from "styled-components";

const StyledFooter = styled.div`
	position: relative;
	padding-top: 15.5rem;
	overflow: hidden;
	::before {
		content: url("/footer_divider.png");
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 25px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10.2rem;
	padding-bottom: 12rem;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const FooterInfo = styled.div`
	width: 40%;
	img {
		max-width: 29.2rem;
	}
	p {
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 150%;
		color: var(--textSecondary);
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
		p {
			font-size: 1.4rem;
			line-height: 157%;
		}
	}
	@media screen and (max-width: 500px) {
		img {
			min-width: 19.1rem;
		}
	}
`;

export const FooterMain = styled.div`
	display: flex;
	gap: 11rem;
	ul {
		color: var(--testPrimary);
		font-size: 1.6rem;
		font-weight: 600;
		.listHeader {
			color: #828282;
			font-weight: 700;
		}
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}
	.paymentMethods {
		gap: 4rem;
	}
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const FooterBottom = styled.div`
	width: 100%;
	ul {
		display: flex;
		gap: 4rem;
		font-weight: 600;
		font-size: 1.4rem;
		color: var(--textPlaceholder);
	}
	@media screen and (max-width: 1000px) {
		ul {
			flex-direction: column;
			align-items: center;
		}
	}
	@media screen and (max-width: 760px) {
		ul {
			gap: 1.6rem;
		}
	}
	@media screen and (max-width: 1000px) {
		ul {
			flex-direction: column;
			align-items: center;
		}
	}
`;

export default StyledFooter;
