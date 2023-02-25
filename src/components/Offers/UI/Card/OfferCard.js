import StyledOfferCard, {
	Content,
	ImageWrapper,
	LocationWrapper,
	OfferTypeWrapper,
	OfferLabelWrapper,
	PriceWrapper,
	OfferDescrWrapper,
	LocationIcon,
} from "./OfferCard.styled";

const OfferCard = ({
	image,
	id,
	title,
	location,
	offerType_1,
	offerType_2,
	price,
	descr,
	buttonText,
}) => {
	return (
		<StyledOfferCard>
			<ImageWrapper id={id}>
				<img src={image} alt="offer" />
			</ImageWrapper>

			<Content>
				<LocationWrapper>
					<h3>{title}</h3>
					<label>
						<LocationIcon />
						{location}
					</label>
				</LocationWrapper>

				<OfferTypeWrapper>
					<OfferLabelWrapper>
						<label>{offerType_1}</label>
						<label>{offerType_2}</label>
					</OfferLabelWrapper>

					<PriceWrapper>
						<label>{price}</label>
					</PriceWrapper>
				</OfferTypeWrapper>

				<OfferDescrWrapper>
					<p>{descr}</p>
					<button>{buttonText}</button>
				</OfferDescrWrapper>
			</Content>
		</StyledOfferCard>
	);
};

export default OfferCard;
