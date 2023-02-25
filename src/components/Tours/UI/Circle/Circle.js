import StyledCircle from "./Circle.styled";

const Circle = ({ image, title, subtitle }) => {
	return (
		<StyledCircle>
			<img src={image} alt="circle" />
			<h3>{title}</h3>
			<label>{subtitle}</label>
		</StyledCircle>
	);
};

export default Circle;
