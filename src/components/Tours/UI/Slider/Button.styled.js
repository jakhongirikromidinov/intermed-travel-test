import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 500px;
	background: #ffffff;
	padding: 1.2rem;
	position: absolute;
	z-index: 9999;
	top: 50%;
	transform: translateY(-50%);
	left: ${({ direction }) => (direction === "prev" ? "16px" : "")};
	right: ${({ direction }) => (direction === "next" ? "16px" : "")};
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

export default StyledButton;
