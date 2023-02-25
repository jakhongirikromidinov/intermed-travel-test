import { useContext } from "react";
import data from "../../../../context/db";

import StyledBreadCrump from "./BreadCrump.styled";

const BreadCrump = () => {
	const {
		banner: { breadCrumpLinks },
	} = useContext(data);

	return (
		<StyledBreadCrump>
			{breadCrumpLinks.map((elem, index) => {
				return (
					<a key={index} href={elem.link}>
						{elem.title}
					</a>
				);
			})}
		</StyledBreadCrump>
	);
};

export default BreadCrump;
