import styled from "styled-components";

const StyledPhotoCard = styled.div`
	max-width: ${({ id }) =>
		id === "egypt" || id === "netherlands" ? "75.2rem" : "49.6rem"};
	position: relative;
	label {
		position: absolute;
		top: 3.2rem;
		background: rgba(35, 35, 35, 0.5);
		border-radius: 500px;
		padding: 10px 24px;
		font-size: 2rem;
		color: #fff;
		font-weight: 600;
		left: ${({ id }) =>
			id === "egypt" || id === "netherlands" ? "2.4rem" : "1.5rem"};
	}
	@media screen and (max-width: 1000px) {
		max-width: unset;

		label {
			font-size: clamp(1.4rem, 2vw, 2rem);
			padding: 0.7em 1.7em;
			top: 1.2rem;
			left: 1.2rem;
		}
	}
`;

export default StyledPhotoCard;
