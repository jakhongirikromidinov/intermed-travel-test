import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useContext, useState } from "react";
import data from "../../../../context/db";

import NewsCard from "../Card/NewsCard";
import { Button } from "../../../Common/Common";

const NewsSlider = () => {
	const {
		news: { newsCards },
	} = useContext(data);

	const [swiperInstance, setSwiperInstance] = useState(null);
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={4}
			onSwiper={(swiper) => setSwiperInstance(swiper)}
			breakpoints={{
				360: {
					slidesPerView: 1.7,
					spaceBetween: 24,
				},
				600: {
					slidesPerView: 2.3,
					spaceBetween: 40,
				},
				1000: {
					slidesPerView: 4,
				},
			}}
		>
			{newsCards.map((card, index) => {
				return (
					<SwiperSlide key={index}>
						<NewsCard
							image={card.image}
							title={card.title}
							descr={card.descr}
						/>
					</SwiperSlide>
				);
			})}

			<Button direction="prev" swiper={swiperInstance} section="news" />
			<Button direction="next" swiper={swiperInstance} section="news" />
		</Swiper>
	);
};

export default NewsSlider;
