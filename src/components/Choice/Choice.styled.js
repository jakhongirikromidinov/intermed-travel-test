import styled from "styled-components";

const StyledChoice = styled.section`
	padding-bottom: 8rem;
	@media screen and (max-width: 1000px) {
		padding-bottom: 6.4rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const UpperLine = styled.div`
	display: flex;
	gap: 1.6rem;
	justify-content: center;
	margin-top: 6.4rem;
	@media screen and (max-width: 1000px) {
		flex-wrap: wrap;
		gap: 1.6rem;
		div {
			width: 45%;
		}
		div:first-child {
			width: 92.5%;
		}
	}
`;
export const BottomLine = styled.div`
	display: flex;
	gap: 1.6rem;
	justify-content: center;
	@media screen and (max-width: 1000px) {
		flex-wrap: wrap;
		gap: 1.6rem;
		div {
			width: 45%;
		}
		div:first-child {
			width: 92.5%;
		}
	}
`;

export const MobileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	@media screen and (min-width: 1000px) {
		display: none;
	}
`;

export default StyledChoice;
