import styled from "styled-components";

const StyledSidebar = styled.nav`
	position: fixed;
	overflow: hidden;
	z-index: 999;
	width: 100%;
	height: 100vh;
	margin-bottom: -200px;
	background: var(--accent);
	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 70px 70px 0 0;
	left: 0;
	transition: 0.5s ease-in-out;
	bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const SidebarList = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding-top: 25%;
	color: #ffff;
	font-size: 2.6rem;
`;

export default StyledSidebar;
