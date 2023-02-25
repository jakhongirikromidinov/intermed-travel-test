import styled from "styled-components";

export const Container = styled.div`
	width: 1600px;
	max-width: 95%;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		max-width: 90%;
	}
`;
export const StyledTitle = styled.h2`
	font-weight: 600;
	font-size: 4rem;
	color: var(--textPrimary);
	margin-top: 4rem;
	text-align: ${({ center }) => (center ? "center" : "")};
	@media screen and (max-width: 1000px) {
		margin-top: 76px;
		font-size: clamp(3rem, 4vw, 4rem);
	}
	@media screen and (max-width: 780px) {
		margin-top: 72px;
	}
	@media screen and (max-width: 640px) {
		margin-top: 68px;
		font-size: clamp(2rem, 5.5vw, 2.8rem);
	}
	@media screen and (max-width: 500px) {
		margin-top: 64px;
	}
`;
export const StyledSubtitle = styled.a`
	display: ${({ type }) => (type === "mobile" ? "none" : "block")};
	font-weight: 600;
	font-size: 2rem;
	color: var(--accent);
	margin-top: 2.4rem;
	padding-bottom: 0.2rem;
	border-bottom: 1.5px dashed var(--accent);
	transition: all 0.6s ease-in-out;
	:hover {
		transition: all 0.6s ease-in-out;
		color: var(--textAccent);
		border-color: var(--textAccent);
	}
	@media screen and (max-width: 1000px) {
		display: ${({ type }) => (type === "mobile" ? "block" : "none")};
		margin-top: 4rem;
		margin-bottom: 7.2rem;
		font-size: clamp(1.4rem, 2.5vw, 2rem);
	}
`;
export const StarIcon = () => {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.35001 17.5165L10.5 14.8082V1.6665L7.92501 6.88317L2.16667 7.72484L6.33334 11.7832L5.35001 17.5165Z"
				fill="#FEBE40"
			/>
			<path
				d="M13.075 6.88317L10.5 1.6665V14.8082L15.65 17.5165L14.6667 11.7832L18.8333 7.72484L13.075 6.88317Z"
				fill="#FEBE40"
			/>
			<path
				d="M10.5 1.6665L13.075 6.88317L18.8333 7.72484L14.6667 11.7832L15.65 17.5165L10.5 14.8082M10.5 1.6665L7.92501 6.88317L2.16667 7.72484L6.33334 11.7832L5.35001 17.5165L10.5 14.8082M10.5 1.6665V14.8082"
				stroke="#FEBE40"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const RatingStarsWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
`;

export const PrevArrow = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 12C20 12.5523 19.5523 13 19 13H5C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11H19C19.5523 11 20 11.4477 20 12Z"
				fill="#1AB2A6"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071Z"
				fill="#1AB2A6"
			/>
		</svg>
	);
};

export const NextArrow = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
				fill="#1AB2A6"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
				fill="#1AB2A6"
			/>
		</svg>
	);
};

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2rem;
	border-radius: 500px;
	box-shadow: ${({ section }) =>
		section === "banner" ? "" : "2px 4px 12px rgba(0, 0, 0, 0.08)"};
	border: ${({ section }) => (section === "banner" ? "1.5px solid #ffff" : "")};
	background: ${({ section }) =>
		section === "banner" ? "transparent" : "#ffff"};
	position: ${({ section }) => (section === "banner" ? "" : "absolute")};
	z-index: 9999;
	transform: ${({ section }) =>
		section === "banner" ? "" : section === "tours" ? "translateY(-50%)" : ""};
	top: ${({ section }) =>
		section === "tours"
			? "50%"
			: section === "hotels"
			? "42%"
			: section === "news"
			? "50%"
			: section === "reviews"
			? "44%"
			: section === "offers"
			? "40%"
			: ""};
	left: ${({ direction, section }) =>
		direction === "prev" && section === "tours"
			? "16px"
			: direction === "prev" && section === "hotels"
			? "8px"
			: direction === "prev" && section === "news"
			? "-5px;"
			: direction === "prev" && section === "reviews"
			? "3px"
			: direction === "prev" && section === "offers"
			? "5px"
			: ""};
	right: ${({ direction, section }) =>
		direction === "next" && section === "tours"
			? "16px"
			: direction === "next" && section === "hotels"
			? "8px"
			: direction === "next" && section === "news"
			? "5px"
			: direction === "next" && section === "reviews"
			? "3px"
			: direction === "next" && section === "offers"
			? "5px"
			: ""};
	svg {
		path {
			fill: ${({ section }) =>
				section === "banner" ? "#ffff" : "var(--accent)"};
		}
	}
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
export const StyledReadMoreReadLess = styled.p`
	button {
		background: transparent;
	}
`;
