import { useContext } from "react";
import { Container } from "../Common/Common.styled";
import { Title } from "../Common/Common";
import data from "../../context/db";

import StyledChoice, {
	Content,
	UpperLine,
	BottomLine,
	MobileContent,
} from "./Choice.styled";
import PhotoCard from "./UI/PhotoCard";

const Choice = () => {
	const {
		choice: {
			title,
			photoCards_big,
			photoCards_small,
			photoCards_mobile_1,
			photoCards_mobile_2,
		},
	} = useContext(data);
	return (
		<StyledChoice>
			<Container>
				<Content>
					<Title value={title} />
					<UpperLine>
						{photoCards_big.map((card, index) => {
							return (
								<PhotoCard
									key={index}
									title={card.title}
									image={card.image}
									id={card.id}
								/>
							);
						})}
					</UpperLine>
					<BottomLine>
						{photoCards_small.map((card, index) => {
							return (
								<PhotoCard
									key={index}
									title={card.title}
									image={card.image}
									id={card.id}
								/>
							);
						})}
					</BottomLine>
				</Content>

				<MobileContent>
					<Title value={title} center />
					<UpperLine>
						{photoCards_mobile_1.map((card, index) => {
							return (
								<PhotoCard
									key={index}
									title={card.title}
									image={card.image}
									id={card.id}
								/>
							);
						})}
					</UpperLine>
					<BottomLine>
						{photoCards_mobile_2.map((card, index) => {
							return (
								<PhotoCard
									key={index}
									title={card.title}
									image={card.image}
									id={card.id}
								/>
							);
						})}
					</BottomLine>
				</MobileContent>
			</Container>
		</StyledChoice>
	);
};

export default Choice;
