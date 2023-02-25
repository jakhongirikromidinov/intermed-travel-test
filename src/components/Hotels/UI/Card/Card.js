import StyledCard, {
	Content,
	LocationLabel,
	ReviewWrapper,
	ReviewMark,
	ReviewAmount,
	Price,
} from "./Card.styled";
import { CreateRatingStars } from "../../../Common/Common";

const Card = ({ img, title, location, rating, review, reviewNum, price }) => {
	return (
		<StyledCard>
			<img src={img} alt="hotel" />

			<Content>
				<CreateRatingStars amount={3} />
				<h3>{title}</h3>
				<LocationLabel>{location}</LocationLabel>
				<ReviewWrapper>
					<ReviewMark>{rating}</ReviewMark>
					<ReviewAmount>
						{review} <span>{reviewNum}</span>
					</ReviewAmount>
				</ReviewWrapper>

				<Price>
					<span>От:</span>
					{price}
				</Price>
			</Content>
		</StyledCard>
	);
};

export default Card;
