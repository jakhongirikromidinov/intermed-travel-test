import StyledHeader, { Content } from "./Header.styled";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Links from "./Links/Links";
import { Container } from "../Common/Common.styled";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Content>
					<Navbar />
					<Banner />
					<Links />
				</Content>
			</Container>
		</StyledHeader>
	);
};

export default Header;
