import { useContext } from "react";
import data from "../../context/db";

import { Title, Subtitle } from "../Common/Common";
import { Container } from "../Common/Common.styled";

import StyledReviews, {
	Content,
	HeaderWrapper,
	CardsWrapper,
	MobileContent,
} from "./Reviews.styled";

import ReviewsSlider from "./UI/Slider/ReviewsSlider";

const Reviews = () => {
	const {
		reviews: { title, subtitle },
	} = useContext(data);
	return (
		<StyledReviews id="reviews">
			<Container>
				<Content>
					<HeaderWrapper>
						<Title value={title} />
						<Subtitle value={subtitle} />
					</HeaderWrapper>

					<CardsWrapper>
						<ReviewsSlider />
					</CardsWrapper>

					<MobileContent>
						<Subtitle value={subtitle} type="mobile" />
					</MobileContent>
				</Content>
			</Container>
		</StyledReviews>
	);
};

export default Reviews;
