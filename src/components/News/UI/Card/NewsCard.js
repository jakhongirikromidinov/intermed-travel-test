import StyledNewsCard, {
	MobileTextContainer,
	DesktopTextContainer,
} from "./NewsCard.styled";
import { ReadMoreReadLess } from "../../../Common/Common";

const NewsCard = ({ image, title, descr }) => {
	return (
		<StyledNewsCard>
			<img src={image} alt="destination" />
			<h3>{title}</h3>
			<MobileTextContainer>
				<ReadMoreReadLess limit={160}>{descr}</ReadMoreReadLess>
			</MobileTextContainer>

			<DesktopTextContainer>
				<ReadMoreReadLess limit={190}>{descr}</ReadMoreReadLess>
			</DesktopTextContainer>
		</StyledNewsCard>
	);
};

export default NewsCard;
