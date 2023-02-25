import styled from "styled-components";

const StyledOffers = styled.section`
	padding-bottom: 7rem;
`;

export const Content = styled.div`
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const CardsWrapper = styled.div`
	margin-top: 6.4rem;
	.swiper {
		padding: 0 3rem;
		padding-bottom: 1rem;
	}
`;

export const MobileContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;
	@media screen and (min-width: 1000px) {
		display: none;
	}
	@media screen and (max-width: 1000px) {
		h2 {
			margin-bottom: 4rem;
		}
	}
`;

export default StyledOffers;
