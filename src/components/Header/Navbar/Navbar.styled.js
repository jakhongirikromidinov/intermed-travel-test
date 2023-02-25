import styled from "styled-components";

const StyledNavbar = styled.nav`
	display: flex;
	padding: 3.2rem 4rem;
	align-items: center;
	gap: 8.4rem;
	border-radius: 500px;

	color: var(--textPrimary);

	font-size: 2rem;
	font-weight: 600;

	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
	@media screen and (max-width: 1450px) {
		gap: 0;
		justify-content: space-between;
	}
	@media screen and (max-width: 1000px) {
		border-radius: 0 0 24px 24px;
		padding: 1.6rem 2.8rem;
	}
	@media screen and (max-width: 420px) {
		border-radius: 0 0 24px 24px;
		padding: 1.6rem 1.6rem;
	}
`;

export const NavbarLogo = styled.a`
	img {
		max-width: 29.2rem;
	}
	@media screen and (max-width: 1150px) {
		max-width: 20rem;
	}
	@media screen and (max-width: 420px) {
		max-width: 16rem;
	}
`;

export const NavbarList = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 5.4rem;
	li {
		a {
			position: relative;
			::after {
				content: "";
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: -3.1rem;
				width: 6px;
				height: 6px;
				border-radius: 50%;

				background: #ecedee;
			}
		}
	}
	li:last-child {
		a {
			::after {
				display: none;
			}
		}
	}
	@media screen and (max-width: 1450px) {
		gap: 4rem;
		font-size: clamp(1.6rem, 1.4vw, 2rem);
	}
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const NavbarPhone = styled.a`
	margin-left: auto;
	@media screen and (max-width: 1450px) {
		margin-left: unset;
		font-size: clamp(1.6rem, 1.4vw, 2rem);
	}
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const SidebarButton = styled.div`
	padding: 0.8rem;
	border: 3px solid var(--accent);
	border-radius: 12px;
	margin-left: auto;
	display: none;

	@media screen and (max-width: 1000px) {
		display: block;
	}
	@media screen and (max-width: 420px) {
		padding: 0.3rem;
	}
`;

export default StyledNavbar;
