import styled from "styled-components";

const StyledCircle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		margin-bottom: 1.6rem;
		min-width: 9.6rem;
	}
	h3 {
		margin-bottom: 0.4rem;
		font-weight: 600;
		font-size: 2rem;
		color: var(--textPrimary);
		text-align: center;
	}
	label {
		font-weight: 600;
		font-size: 1.6rem;
		color: var(--textSecondary);
	}
	@media screen and (max-width: 1000px) {
		margin-bottom: 0;
	}
	@media screen and (max-width: 780px) {
		h3 {
			font-size: clamp(1.6rem, 3vw, 2rem);
		}
	}
	@media screen and (max-width: 500px) {
		label {
			font-size: 1.4rem;
		}
	}
`;

export default StyledCircle;
