import StyledPhotoCard from "./PhotoCard.styled";

const PhotoCard = ({ title, image, id }) => {
	return (
		<StyledPhotoCard id={id}>
			<label>{title}</label>
			<img src={image} alt="destination" />
		</StyledPhotoCard>
	);
};

export default PhotoCard;
