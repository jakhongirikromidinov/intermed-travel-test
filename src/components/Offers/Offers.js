import { useContext } from "react";
import data from "../../context/db";

import StyledOffers, {
	Content,
	HeaderWrapper,
	CardsWrapper,
	MobileContent,
} from "./Offers.styled";

import { Container } from "../Common/Common.styled";

import { Title, Subtitle } from "../Common/Common";

import OfferCard from "./UI/Card/OfferCard";

import OffersSlider from "./UI/Slider/OffersSlider";

const Offers = () => {
	const {
		offers: { title, subtitle, offerCards },
	} = useContext(data);
	return (
		<StyledOffers id="offers">
			<Container>
				<Content>
					<HeaderWrapper>
						<Title value={title} />
						<Subtitle value={subtitle} />
					</HeaderWrapper>

					<CardsWrapper>
						<OffersSlider />
					</CardsWrapper>
				</Content>
				<MobileContent>
					<HeaderWrapper>
						<Title value={title} />
					</HeaderWrapper>
					{offerCards.map((card, index) => {
						return (
							<OfferCard
								key={index}
								id={card.id}
								image={card.image}
								title={card.title}
								location={card.location}
								offerType_1={card.offerType_1}
								offerType_2={card.offerType_2}
								price={card.price}
								descr={card.mobile_descr}
								buttonText={card.buttonText}
							/>
						);
					})}
					<Subtitle value={subtitle} type="mobile" />
				</MobileContent>
			</Container>
		</StyledOffers>
	);
};

export default Offers;
