import styled from "styled-components";

const StyledHotels = styled.section`
	background: var(--bgSecondary);
	padding-bottom: 7rem;
	.swiper {
		width: 100%;
		height: 100%;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardsWrapper = styled.div`
	margin-top: 6.4rem;
	width: 100%;
	.swiper {
		padding: 0 3rem;
		padding-bottom: 1rem;
	}
	@media screen and (max-width: 1000px) {
		margin-top: 58px;
		.swiper {
			padding: 0;
			padding-bottom: 1rem;
		}
	}
	@media screen and (max-width: 780px) {
		margin-top: 52px;
	}
	@media screen and (max-width: 640px) {
		margin-top: 46px;
	}
	@media screen and (max-width: 500px) {
		margin-top: 40px;
	}
`;

export default StyledHotels;
