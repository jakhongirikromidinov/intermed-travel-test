import styled from "styled-components";

const StyledReviews = styled.section`
	background: var(--bgSecondary);
	padding-bottom: 15rem;
	@media screen and (max-width: 1000px) {
		padding-bottom: 0;
	}
`;

export const Content = styled.div``;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const CardsWrapper = styled.div`
	margin-top: 12rem;
	.swiper {
		padding: 0 3rem;
		padding-bottom: 1rem;
	}
	@media screen and (max-width: 1000px) {
		margin-top: 4rem;
		.swiper {
			padding: 0;
			padding-bottom: 1rem;
		}
	}
`;

export const MobileContent = styled.div`
	display: flex;
	justify-content: center;
`;

export default StyledReviews;
