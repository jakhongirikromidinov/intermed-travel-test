import StyledButton from "./Button.styled";
import { PrevArrow, NextArrow } from "./Button.styled";

const Button = ({ swiper, direction }) => {
	return (
		<StyledButton
			direction={direction}
			onClick={
				direction === "prev"
					? () => swiper.slidePrev()
					: direction === "next"
					? () => swiper.slideNext()
					: ""
			}
		>
			{direction === "prev" ? (
				<PrevArrow />
			) : direction === "next" ? (
				<NextArrow />
			) : (
				""
			)}
		</StyledButton>
	);
};

export default Button;
