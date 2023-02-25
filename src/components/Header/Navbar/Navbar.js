//components
import StyledNavbar, {
	NavbarLogo,
	NavbarList,
	NavbarPhone,
	SidebarButton,
} from "./Navbar.styled";

//images
import logo from "../../../images/nav_logo.png";

//data coming from "db"
import data from "../../../context/db";

//required modules
import { useContext, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

import Sidebar from "./UI/Sidebar";

const Navbar = () => {
	const { navbarData, navbarPhone } = useContext(data);

	const [sidebarOpen, setSidebarOpen] = useState(null);

	const toggle = () => {
		return setSidebarOpen(!sidebarOpen);
	};
	console.log(sidebarOpen);

	return (
		<StyledNavbar>
			<NavbarLogo href="/">
				<img src={logo} alt="logo" />
			</NavbarLogo>

			<NavbarList>
				{navbarData.map((elem, index) => {
					return (
						<li key={index}>
							<a href={elem.link}>{elem.title}</a>
						</li>
					);
				})}
			</NavbarList>

			<NavbarPhone href={`tel:${navbarPhone}`}>{navbarPhone}</NavbarPhone>

			<SidebarButton onClick={toggle}>
				<Hamburger
					color="var(--accent)"
					size={24}
					toggled={sidebarOpen}
					toggle={setSidebarOpen}
				/>
			</SidebarButton>

			<Sidebar isOpen={sidebarOpen} toggle={toggle} />
		</StyledNavbar>
	);
};

export default Navbar;
