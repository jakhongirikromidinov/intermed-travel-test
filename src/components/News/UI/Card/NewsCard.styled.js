import styled from "styled-components";

const StyledNewsCard = styled.div`
	max-width: 36.5rem;
	img {
		margin-bottom: 2.4rem;
	}
	h3 {
		font-weight: 600;
		font-size: 2.4rem;
		color: var(--textPrimary);
		margin-bottom: 1.6rem;
	}

	p {
		font-weight: 400;
		font-size: 1.6rem;
		color: var(--textSecondary);
		line-height: 150%;
	}
	@media screen and (max-width: 1000px) {
		h3 {
			font-size: clamp(1.6rem, 2vw, 2.4rem);
		}
		p {
			font-size: 1.4rem;
			line-height: 157%;
		}
	}
`;
export const MobileTextContainer = styled.div`
	@media screen and (min-width: 1000px) {
		display: none;
	}
`;
export const DesktopTextContainer = styled.div`
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export default StyledNewsCard;
