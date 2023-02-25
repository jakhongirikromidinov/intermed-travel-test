import styled from "styled-components";

const StyledCard = styled.div`
	max-width: 36.5rem;
	height: 497px;
	background: #ffffff;

	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 24px;

	img {
		border-radius: 24px 24px 0 0;
		margin-bottom: 0.5rem;
	}
	@media screen and (max-width: 1380px) {
		height: 450px;
	}
	@media screen and (max-width: 1300px) {
		height: 497px;
	}
	@media screen and (max-width: 1000px) {
		max-width: 310px;
		height: 422.5px;
	}
	@media screen and (max-width: 780px) {
		max-width: 201px;
		height: 364px;
	}
`;
export const Content = styled.div`
	padding: 2.4rem 2.4rem 3.6rem 2.4rem;

	h3 {
		margin-top: 1.6rem;
		margin-bottom: 0.4rem;
		font-weight: 600;
		font-size: 20px;
		color: var(--textPrimary);
	}
	@media screen and (max-width: 1000px) {
		h3 {
			font-size: clamp(1.4rem, 2vw, 2rem);
		}
	}
`;
export const LocationLabel = styled.label`
	margin-bottom: 4.8rem;
	position: relative;
	font-weight: 600;
	font-size: 16px;
	color: var(--textSecondary);
	::after {
		content: "";
		position: absolute;
		bottom: -2.4rem;
		left: 0;
		width: 100%;
		height: 2px;
		background: var(--accent100);
	}
	@media screen and (max-width: 1000px) {
		font-size: clamp(1.4rem, 2vw, 2rem);
		margin-bottom: 42px;
	}
	@media screen and (max-width: 780px) {
		margin-bottom: 36px;
		::after {
			bottom: -21px;
		}
	}
	@media screen and (max-width: 640px) {
		margin-bottom: 30px;
		::after {
			bottom: -18px;
		}
	}
	@media screen and (max-width: 500px) {
		margin-bottom: 24px;
		::after {
			bottom: -15px;
		}
	}
	@media screen and (max-width: 360px) {
		::after {
			bottom: -12px;
		}
	}
`;

export const ReviewWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 1550px) {
		gap: 0;
		justify-content: space-between;
	}
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.8rem;
	}
`;
export const ReviewMark = styled.label`
	padding: 0.4rem 1.2rem;
	background: rgba(155, 240, 234, 0.4);
	color: var(--accent);
	border-radius: 500px;
	font-weight: 700;
	font-size: 1.6rem;
	@media screen and (max-width: 1000px) {
		font-size: 1.4rem;
	}
`;
export const ReviewAmount = styled.label`
	font-weight: 600;
	font-size: 16px;
	span {
		color: var(--textSecondary);
	}
	@media screen and (max-width: 1000px) {
		font-size: 1.2rem;
	}
`;

export const Price = styled.label`
	font-weight: 600;
	font-size: 20px;
	color: var(--textPrimary);
	display: flex;
	align-items: flex-end;
	gap: 1.2rem;
	span {
		color: var(--textSecondary);
		font-weight: 600;
		font-size: 14px;
	}
	@media screen and (max-width: 1000px) {
		font-size: clamp(1.6rem, 2.5vw, 2rem);
	}
`;

export default StyledCard;
