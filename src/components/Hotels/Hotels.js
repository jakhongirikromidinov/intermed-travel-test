import { useContext } from "react";
import data from "../../context/db";

import { Container } from "../Common/Common.styled";
import StyledHotels, {
	HeaderWrapper,
	Content,
	CardsWrapper,
} from "./Hotels.styled";
import { Title, Subtitle } from "../Common/Common";
import HotelsSlider from "./UI/Slider/HotelsSlider";

const Hotels = () => {
	const {
		hotels: { title, subtitle },
	} = useContext(data);

	return (
		<StyledHotels id="hotels">
			<Container>
				<Content>
					<HeaderWrapper>
						<Title value={title} center />
						<Subtitle value={subtitle} />
					</HeaderWrapper>

					<CardsWrapper>
						<HotelsSlider />
					</CardsWrapper>

					<Subtitle value={subtitle} type="mobile" />
				</Content>
			</Container>
		</StyledHotels>
	);
};

export default Hotels;
