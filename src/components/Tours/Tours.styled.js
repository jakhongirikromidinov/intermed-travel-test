import styled from "styled-components";

const StyledTours = styled.section`
	padding-bottom: 8rem;
	@media screen and (max-width: 1000px) {
		padding-bottom: 6.4rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ToursWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 4rem;
	justify-content: center;
	margin-top: 64px;
	.swiper {
		width: 90%;
		padding: 0 3rem;
	}
	@media screen and (max-width: 1000px) {
		margin-top: 58px;
		.swiper {
			width: 100%;
			padding: 0;
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

export default StyledTours;
