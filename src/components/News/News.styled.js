import styled from "styled-components";

const StyledNews = styled.section`
	padding-bottom: 8rem;
	@media screen and (max-width: 1000px) {
		padding-bottom: 6.4rem;
	}
`;

export const Content = styled.div``;

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 6.4rem;
`;

export const CardsWrapper = styled.div`
	.swiper {
		padding: 0 3rem;
	}
	@media screen and (max-width: 1000px) {
		.swiper {
			padding: 0;
		}
	}
`;

export default StyledNews;
