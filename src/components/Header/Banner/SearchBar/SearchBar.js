import StyledSearchBar, {
	Content,
	SearchBarItem,
	SearchBarFind,
	SearchBarFindIcon,
	SearchBarPinIcon,
	SearchBarArrowDownIcon,
	SearchBarCalendarIcon,
} from "./SearchBar.styled";
import { useContext } from "react";
import data from "../../../../context/db";

const SearchBar = () => {
	const {
		banner: { searchBarItems },
	} = useContext(data);

	return (
		<StyledSearchBar>
			<Content>
				{searchBarItems.map((elem, index) => {
					return (
						<SearchBarItem key={index}>
							<h3>
								<span>{elem.title}</span>
							</h3>
							<label>
								{elem.ctaText}
								{elem.id === "location" ? (
									<SearchBarPinIcon />
								) : elem.id === "amusements" ? (
									<SearchBarArrowDownIcon />
								) : elem.id === "date" ? (
									<SearchBarCalendarIcon />
								) : (
									""
								)}
							</label>
						</SearchBarItem>
					);
				})}
				<SearchBarFind>
					<SearchBarFindIcon />
				</SearchBarFind>
			</Content>
		</StyledSearchBar>
	);
};

export default SearchBar;
