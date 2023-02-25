import styled from "styled-components";

const StyledSwiper = styled.div``;

export const SliderItem = styled.div`
	width: 100%;
	min-height: 640px;
	border-radius: 32px;
	padding: 13.6rem 0 0 12rem;
	background: ${({ city }) =>
		city === "LA"
			? "url('/banner_bg.png') center center / cover no-repeat"
			: city === "LON"
			? "url('/slider_bg_2.jpg') center center / cover no-repeat"
			: ""};

	color: #ffff;

	label {
		font-weight: 600;
		font-size: 2.4rem;
	}

	h2 {
		font-weight: 800;
		font-size: 8rem;
		margin-bottom: 8rem;
	}
	@media screen and (max-width: 1000px) {
		padding: 0 2.4rem 1.6rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		h2 {
			margin-bottom: 0;
			font-size: clamp(3rem, 8.5vw, 8rem);
		}
	}
	@media screen and (max-width: 640px) {
		max-width: 57.6rem;
		min-height: 36rem;
		margin: 0 auto;
		h2 {
			font-size: clamp(2.4rem, 6.5vw, 4rem);
		}
	}
	@media screen and (max-width: 500px) {
		max-width: 44.8rem;
		min-height: 28rem;
	}
	@media screen and (max-width: 360px) {
		max-width: 32rem;
		min-height: 20rem;
	}
`;

export const SliderButtons = styled.div`
	display: flex;
	gap: 1.6rem;
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
export default StyledSwiper;
