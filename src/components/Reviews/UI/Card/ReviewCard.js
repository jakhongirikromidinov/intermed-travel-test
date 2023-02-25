import StyledReviewCard, {
	ClientContent,
	ClientInfo,
	ReviewContent,
} from "./ReviewCard.styled";

import { CreateRatingStars } from "../../../Common/Common";

const ReviewCard = ({
	clientImage,
	clientName,
	clientLocation,
	clientMark,
	reviewTitle,
	reviewText,
}) => {
	return (
		<StyledReviewCard>
			<ClientContent>
				<img src={clientImage} alt="client" />
				<ClientInfo>
					<h3>{clientName}</h3>
					<label>{clientLocation}</label>
				</ClientInfo>
			</ClientContent>

			<ReviewContent>
				<CreateRatingStars amount={Number(clientMark)} />
				<h3>{reviewTitle}</h3>
				<p>{reviewText}</p>
			</ReviewContent>
		</StyledReviewCard>
	);
};

export default ReviewCard;
