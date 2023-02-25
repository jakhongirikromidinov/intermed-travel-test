import StyledSidebar, { SidebarList } from "./Sidebar.styled";

import { useContext } from "react";
import data from "../../../../context/db";

const Sidebar = ({ isOpen, toggle }) => {
	const { navbarData, navbarPhone } = useContext(data);

	return (
		<StyledSidebar isOpen={isOpen}>
			<SidebarList>
				{navbarData.map((item, index) => {
					return (
						<li key={index}>
							<a href={item.link} onClick={toggle}>
								{item.title}
							</a>
						</li>
					);
				})}
				<li>
					<a href={`tel:${navbarPhone}`}>{navbarPhone}</a>
				</li>
			</SidebarList>
		</StyledSidebar>
	);
};

export default Sidebar;
