import { Container } from "../Common/Common.styled";
import { Title } from "../Common/Common";

import StyledNews, {
	Content,
	HeaderWrapper,
	CardsWrapper,
} from "./News.styled";

import NewsSlider from "./UI/Slider/NewsSlider";

import { useContext } from "react";
import data from "../../context/db";

const News = () => {
	const {
		news: { title },
	} = useContext(data);

	return (
		<StyledNews>
			<Container>
				<Content>
					<HeaderWrapper>
						<Title value={title} />
					</HeaderWrapper>

					<CardsWrapper>
						<NewsSlider />
					</CardsWrapper>
				</Content>
			</Container>
		</StyledNews>
	);
};

export default News;
