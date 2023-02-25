import styled from "styled-components";

const StyledBreadCrump = styled.div`
	display: flex;
	gap: 4.5rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%) rotate(-90deg);
	right: -230px;
	a {
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--textPrimary);
		position: relative;
		::after {
			content: "/";
			font-size: inherit;
			color: inherit;
			position: absolute;
			right: -2.7rem;
		}
	}
	a:last-child {
		::after {
			display: none;
		}
	}
`;

export default StyledBreadCrump;
