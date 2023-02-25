import styled from "styled-components";

const StyledSearchBar = styled.div`
	position: absolute;
	bottom: -86px;
	z-index: 1;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 128rem;
	height: 176px;
	background: #ffffff;
	box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
	border-radius: 24px;
	@media screen and (max-width: 1550px) {
		width: 80%;
	}
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const Content = styled.div`
	padding: 4.8rem 8rem;
	display: flex;
	gap: 10.8rem;
	@media screen and (max-width: 1400px) {
		gap: 0;
		justify-content: space-between;
	}
`;

export const SearchBarItem = styled.div`
	h3 {
		font-weight: 700;
		font-size: 2.4rem;
		margin-bottom: 2.4rem;
		span {
			position: relative;
			::after {
				content: "";
				position: absolute;
				bottom: 3px;
				left: 0;
				z-index: -1;
				background: #fcd88c;
				width: 105%;
				height: 8px;
				border-radius: 1px;
			}
		}
	}
	label {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		font-weight: 600;
		font-size: 1.6rem;
		text-decoration-line: underline;
		color: var(--textAccent);
		cursor: pointer;
	}
	@media screen and (max-width: 1400px) {
		label {
			gap: 1rem;
		}
	}
`;

export const SearchBarFind = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	width: 80px;
	height: 80px;
	background: var(--accent);
	border-radius: 12px;
	cursor: pointer;
	transition: all 0.3s ease;
	:hover {
		background-color: #ffff;
		outline: 1px solid var(--accent);
		svg {
			path {
				fill: var(--accent);
			}
		}
	}
	@media screen and (max-width: 1400px) {
		margin-left: unset;
	}
`;

export const SearchBarFindIcon = () => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.6666 5.33335C9.51197 5.33335 5.33329 9.51203 5.33329 14.6667C5.33329 19.8213 9.51197 24 14.6666 24C19.8213 24 24 19.8213 24 14.6667C24 9.51203 19.8213 5.33335 14.6666 5.33335ZM2.66663 14.6667C2.66663 8.03927 8.03921 2.66669 14.6666 2.66669C21.294 2.66669 26.6666 8.03927 26.6666 14.6667C26.6666 21.2941 21.294 26.6667 14.6666 26.6667C8.03921 26.6667 2.66663 21.2941 2.66663 14.6667Z"
				fill="white"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21.2572 21.2572C21.7779 20.7365 22.6221 20.7365 23.1428 21.2572L28.9428 27.0572C29.4635 27.5779 29.4635 28.4221 28.9428 28.9428C28.4221 29.4635 27.5779 29.4635 27.0572 28.9428L21.2572 23.1428C20.7365 22.6221 20.7365 21.7779 21.2572 21.2572Z"
				fill="white"
			/>
		</svg>
	);
};

export const SearchBarPinIcon = () => {
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
				d="M10 1.66667C8.23191 1.66667 6.53622 2.36905 5.28597 3.61929C4.03573 4.86953 3.33335 6.56522 3.33335 8.33333C3.33335 10.915 5.01313 13.4202 6.85498 15.3644C7.75886 16.3185 8.66558 17.0996 9.34725 17.6424C9.60095 17.8444 9.82254 18.0127 10 18.1438C10.1775 18.0127 10.3991 17.8444 10.6528 17.6424C11.3345 17.0996 12.2412 16.3185 13.1451 15.3644C14.9869 13.4202 16.6667 10.915 16.6667 8.33333C16.6667 6.56522 15.9643 4.86953 14.7141 3.61929C13.4638 2.36905 11.7681 1.66667 10 1.66667ZM10 19.1667C9.53777 19.86 9.53756 19.8599 9.53732 19.8597L9.53494 19.8581L9.52938 19.8544L9.51029 19.8415C9.49406 19.8305 9.47092 19.8147 9.44132 19.7942C9.38213 19.7532 9.29707 19.6934 9.18985 19.616C8.97548 19.4612 8.67199 19.2352 8.30904 18.9462C7.58446 18.3692 6.61618 17.5357 5.64506 16.5106C3.73691 14.4965 1.66669 11.585 1.66669 8.33333C1.66669 6.1232 2.54466 4.00358 4.10746 2.44078C5.67027 0.877974 7.78988 0 10 0C12.2102 0 14.3298 0.877974 15.8926 2.44078C17.4554 4.00358 18.3334 6.1232 18.3334 8.33333C18.3334 11.585 16.2631 14.4965 14.355 16.5106C13.3839 17.5357 12.4156 18.3692 11.691 18.9462C11.3281 19.2352 11.0246 19.4612 10.8102 19.616C10.703 19.6934 10.6179 19.7532 10.5587 19.7942C10.5291 19.8147 10.506 19.8305 10.4898 19.8415L10.4707 19.8544L10.4651 19.8581L10.4633 19.8593C10.4631 19.8595 10.4623 19.86 10 19.1667ZM10 19.1667L10.4623 19.86C10.1824 20.0467 9.81724 20.0464 9.53732 19.8597L10 19.1667Z"
				fill="#4F4F4F"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10 6.66667C9.07955 6.66667 8.33335 7.41286 8.33335 8.33333C8.33335 9.25381 9.07955 10 10 10C10.9205 10 11.6667 9.25381 11.6667 8.33333C11.6667 7.41286 10.9205 6.66667 10 6.66667ZM6.66669 8.33333C6.66669 6.49238 8.15907 5 10 5C11.841 5 13.3334 6.49238 13.3334 8.33333C13.3334 10.1743 11.841 11.6667 10 11.6667C8.15907 11.6667 6.66669 10.1743 6.66669 8.33333Z"
				fill="#4F4F4F"
			/>
		</svg>
	);
};

export const SearchBarArrowDownIcon = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1_292)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.99998 2.49998C5.85784 2.49998 2.49998 5.85784 2.49998 9.99998C2.49998 14.1421 5.85784 17.5 9.99998 17.5C14.1421 17.5 17.5 14.1421 17.5 9.99998C17.5 5.85784 14.1421 2.49998 9.99998 2.49998ZM0.833313 9.99998C0.833313 4.93737 4.93737 0.833313 9.99998 0.833313C15.0626 0.833313 19.1666 4.93737 19.1666 9.99998C19.1666 15.0626 15.0626 19.1666 9.99998 19.1666C4.93737 19.1666 0.833313 15.0626 0.833313 9.99998Z"
					fill="#4F4F4F"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.07739 9.41076C6.40283 9.08533 6.93047 9.08533 7.2559 9.41076L9.99998 12.1548L12.7441 9.41076C13.0695 9.08533 13.5971 9.08533 13.9226 9.41076C14.248 9.7362 14.248 10.2638 13.9226 10.5893L10.5892 13.9226C10.2638 14.248 9.73616 14.248 9.41072 13.9226L6.07739 10.5893C5.75195 10.2638 5.75195 9.7362 6.07739 9.41076Z"
					fill="#4F4F4F"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M10 5.83331C10.4603 5.83331 10.8334 6.20641 10.8334 6.66665V13.3333C10.8334 13.7936 10.4603 14.1666 10 14.1666C9.53978 14.1666 9.16669 13.7936 9.16669 13.3333V6.66665C9.16669 6.20641 9.53978 5.83331 10 5.83331Z"
					fill="#4F4F4F"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1_292">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const SearchBarCalendarIcon = () => {
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
				d="M4.16663 4.16667C3.70639 4.16667 3.33329 4.53976 3.33329 5V16.6667C3.33329 17.1269 3.70639 17.5 4.16663 17.5H15.8333C16.2935 17.5 16.6666 17.1269 16.6666 16.6667V5C16.6666 4.53976 16.2935 4.16667 15.8333 4.16667H4.16663ZM1.66663 5C1.66663 3.61929 2.78591 2.5 4.16663 2.5H15.8333C17.214 2.5 18.3333 3.61929 18.3333 5V16.6667C18.3333 18.0474 17.214 19.1667 15.8333 19.1667H4.16663C2.78591 19.1667 1.66663 18.0474 1.66663 16.6667V5Z"
				fill="#4F4F4F"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.3333 0.833313C13.7936 0.833313 14.1667 1.20641 14.1667 1.66665V4.99998C14.1667 5.46022 13.7936 5.83331 13.3333 5.83331C12.8731 5.83331 12.5 5.46022 12.5 4.99998V1.66665C12.5 1.20641 12.8731 0.833313 13.3333 0.833313Z"
				fill="#4F4F4F"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.66671 0.833313C7.12694 0.833313 7.50004 1.20641 7.50004 1.66665V4.99998C7.50004 5.46022 7.12694 5.83331 6.66671 5.83331C6.20647 5.83331 5.83337 5.46022 5.83337 4.99998V1.66665C5.83337 1.20641 6.20647 0.833313 6.66671 0.833313Z"
				fill="#4F4F4F"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.66663 8.33333C1.66663 7.8731 2.03972 7.5 2.49996 7.5H17.5C17.9602 7.5 18.3333 7.8731 18.3333 8.33333C18.3333 8.79357 17.9602 9.16667 17.5 9.16667H2.49996C2.03972 9.16667 1.66663 8.79357 1.66663 8.33333Z"
				fill="#4F4F4F"
			/>
		</svg>
	);
};

export default StyledSearchBar;
