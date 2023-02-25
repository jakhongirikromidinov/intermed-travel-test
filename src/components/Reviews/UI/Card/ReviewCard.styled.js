import styled from "styled-components";

const StyledReviewCard = styled.div`
	max-width: 49.3rem;
	min-height: 34.4rem;
	padding: 4rem 2.4rem;
	background: #ffffff;
	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 24px;
	@media screen and (max-width: 780px) {
		padding: 3.2rem 2rem;
	}
`;

export const ClientContent = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	margin-bottom: 3.2rem;
	img {
		width: 100%;
		max-width: 6.4rem;
	}
	@media screen and (max-width: 780px) {
		max-width: 4.8rem;
		margin-bottom: 1.6rem;
	}
`;

export const ClientInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	h3 {
		font-weight: 600;
		font-size: 2rem;
		color: var(--textPrimary);
	}
	label {
		font-size: 1.6rem;
		color: var(--textSecondary);
	}
	@media screen and (max-width: 1000px) {
		label {
			font-size: 1.4rem;
		}
		h3 {
			font-size: 1.6rem;
		}
	}
`;

export const ReviewContent = styled.div`
	h3 {
		margin-top: 2.4rem;
		margin-bottom: 1.6rem;
		color: var(--textPrimary);
		font-weight: 600;
		font-size: 2rem;
	}
	p {
		font-weight: 600;
		font-size: 1.6rem;
		line-height: 150%;
		color: var(--textSecondary);
	}
	@media screen and (max-width: 1000px) {
		h3,
		p {
			font-size: 1.4rem;
		}
		p {
			line-height: 157%;
		}
	}
	@media screen and (max-width: 780px) {
		h3 {
			margin-top: 1.6rem;
		}
	}
`;

export default StyledReviewCard;
