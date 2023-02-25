import {
	StyledTitle,
	StyledSubtitle,
	RatingStarsWrapper,
	StarIcon,
	StyledButton,
	PrevArrow,
	NextArrow,
	StyledReadMoreReadLess,
} from "./Common.styled";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export const Title = ({ value, center }) => {
	const str = Object.values(value);
	return <StyledTitle center={center}>{str}</StyledTitle>;
};

export const Subtitle = ({ value, type }) => {
	const str = Object.values(value);
	return (
		<StyledSubtitle href="/" type={type}>
			{str}
		</StyledSubtitle>
	);
};

export const CreateRatingStars = ({ amount }) => {
	const arr = Array(amount).fill(null);
	return (
		<RatingStarsWrapper>
			{arr.map((num, index) => (
				<StarIcon key={index} />
			))}
		</RatingStarsWrapper>
	);
};

export const Button = ({ swiper, direction, section }) => {
	return (
		<StyledButton
			section={section}
			direction={direction}
			onClick={
				direction === "prev"
					? () => swiper.slidePrev()
					: direction === "next"
					? () => swiper.slideNext()
					: null
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

export const ReadMoreReadLess = ({ limit, children }) => {
	const text = children;

	const [isReadMoreShown, setIsReadMoreShown] = useState(false);

	const toggle = () => {
		setIsReadMoreShown((prevState) => !prevState);
	};
	return (
		<StyledReadMoreReadLess>
			{isReadMoreShown ? text : text.substr(0, limit)}
			{text.length >= limit ? <button onClick={toggle}>...</button> : <></>}
		</StyledReadMoreReadLess>
	);
};
