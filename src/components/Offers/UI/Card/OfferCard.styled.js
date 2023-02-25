import styled from "styled-components";

const StyledOfferCard = styled.div`
	max-width: 49.3rem;
	height: 75.6rem;
	background: #ffffff;
	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 24px;
	overflow: hidden;
	@media screen and (max-width: 1000px) {
		max-width: 419px;
		height: 642.6px;
	}
	@media screen and (max-width: 780px) {
		max-width: 320px;
		height: unset;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	::after {
		content: url("/cityIcon.svg");
		position: absolute;
		bottom: -40px;
		right: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.76rem;
		background-color: ${({ id }) =>
			id === "berlin"
				? "var(--offerCardOrange)"
				: id === "hong-kong"
				? "var(--offerCardRed)"
				: id === "sanfran"
				? "var(--offerCardPurple)"
				: ""};
		@media screen and (max-width: 1000px) {
			padding: 1.4rem;
			right: 24px;
		}
	}
`;

export const Content = styled.div`
	padding: 2.4rem 4rem 4rem 4rem;
	@media screen and (max-width: 1000px) {
		padding: 2.4rem;
	}
`;

export const LocationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--accent100);
	h3 {
		font-weight: 600;
		font-size: 2.4rem;
	}
	label {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-weight: 600;
		font-size: 1.6rem;
		color: var(--textSecondary);
	}
	@media screen and (max-width: 1000px) {
		h3 {
			font-size: 2rem;
		}
	}
`;
export const OfferTypeWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2rem;
	border-bottom: 1px solid var(--accent100);
	padding-bottom: 2rem;
`;
export const OfferLabelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	label {
		color: var(--textSecondary);
		font-size: 1.6rem;
		font-weight: 600;
	}
	@media screen and (max-width: 1000px) {
		label {
			font-size: 1.4rem;
		}
	}
`;

export const PriceWrapper = styled.div`
	margin-left: auto;
	label {
		color: var(--textPrimary);
		font-size: 2.4rem;
		font-weight: 600;
	}
	@media screen and (max-width: 1000px) {
		label {
			font-size: 2rem;
		}
	}
`;
export const OfferDescrWrapper = styled.div`
	margin-top: 2rem;
	p {
		margin-bottom: 2.4rem;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 150%;
	}
	button {
		padding: 1.2rem 2.4rem;
		border-radius: 8px;
		background: var(--accent);
		font-weight: 600;
		font-size: 1.6rem;
		color: #ffffff;
	}
	@media screen and (max-width: 1000px) {
		p {
			font-size: 1.4rem;
			line-height: 157%;
			margin-bottom: 1.6rem;
		}
		button {
			width: 100%;
		}
	}
`;

export const LocationIcon = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10 1.66667C8.2319 1.66667 6.5362 2.36905 5.28596 3.61929C4.03572 4.86953 3.33334 6.56522 3.33334 8.33333C3.33334 10.915 5.01312 13.4202 6.85497 15.3644C7.75885 16.3185 8.66556 17.0996 9.34724 17.6424C9.60093 17.8444 9.82252 18.0127 10 18.1438C10.1775 18.0127 10.3991 17.8444 10.6528 17.6424C11.3344 17.0996 12.2412 16.3185 13.145 15.3644C14.9869 13.4202 16.6667 10.915 16.6667 8.33333C16.6667 6.56522 15.9643 4.86953 14.7141 3.61929C13.4638 2.36905 11.7681 1.66667 10 1.66667ZM10 19.1667C9.53776 19.86 9.53754 19.8599 9.5373 19.8597L9.53492 19.8582L9.52937 19.8544L9.51027 19.8415C9.49404 19.8305 9.4709 19.8147 9.4413 19.7942C9.38211 19.7532 9.29706 19.6934 9.18983 19.616C8.97546 19.4612 8.67197 19.2352 8.30902 18.9462C7.58445 18.3692 6.61616 17.5357 5.64504 16.5106C3.73689 14.4965 1.66667 11.585 1.66667 8.33333C1.66667 6.1232 2.54465 4.00358 4.10745 2.44078C5.67025 0.877974 7.78987 0 10 0C12.2101 0 14.3298 0.877974 15.8926 2.44078C17.4554 4.00358 18.3333 6.1232 18.3333 8.33333C18.3333 11.585 16.2631 14.4965 14.355 16.5106C13.3838 17.5357 12.4156 18.3692 11.691 18.9462C11.328 19.2352 11.0246 19.4612 10.8102 19.616C10.703 19.6934 10.6179 19.7532 10.5587 19.7942C10.5291 19.8147 10.506 19.8305 10.4897 19.8415L10.4706 19.8544L10.4651 19.8582L10.4633 19.8593C10.4631 19.8595 10.4623 19.86 10 19.1667ZM10 19.1667L10.4623 19.86C10.1823 20.0467 9.81722 20.0464 9.5373 19.8597L10 19.1667Z"
				fill="#828282"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10 6.66667C9.07953 6.66667 8.33334 7.41286 8.33334 8.33333C8.33334 9.25381 9.07953 10 10 10C10.9205 10 11.6667 9.25381 11.6667 8.33333C11.6667 7.41286 10.9205 6.66667 10 6.66667ZM6.66667 8.33333C6.66667 6.49238 8.15906 5 10 5C11.841 5 13.3333 6.49238 13.3333 8.33333C13.3333 10.1743 11.841 11.6667 10 11.6667C8.15906 11.6667 6.66667 10.1743 6.66667 8.33333Z"
				fill="#828282"
			/>
		</svg>
	);
};

export default StyledOfferCard;
