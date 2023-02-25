import { useContext } from "react";
import data from "../../context/db";

import StyledTours, { Content, ToursWrapper } from "./Tours.styled";
import { Container } from "../Common/Common.styled";
import { Title } from "../Common/Common";
import Slider from "./UI/Slider/Slider";

const Tours = () => {
	const {
		tours: { title },
	} = useContext(data);
	return (
		<StyledTours id="tours">
			<Container>
				<Content>
					<Title value={title} center />
					<ToursWrapper>
						<Slider />
					</ToursWrapper>
				</Content>
			</Container>
		</StyledTours>
	);
};

export default Tours;
