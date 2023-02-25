import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useContext, useState } from "react";
import data from "../../../../context/db";

import ReviewCard from "../Card/ReviewCard";

import { Button } from "../../../Common/Common";

const Reviews = () => {
	const {
		reviews: { reviewCards },
	} = useContext(data);

	const [swiperInstance, setSwiperInstance] = useState(null);

	return (
		<Swiper
			spaceBetween={35}
			slidesPerView={3}
			onSwiper={(swiper) => setSwiperInstance(swiper)}
			breakpoints={{
				360: {
					slidesPerView: 1.1,
					spaceBetween: 12,
				},
				420: {
					slidesPerView: 1.3,
					spaceBetween: 12,
				},
				780: {
					slidesPerView: 2,
				},
				1000: {
					slidesPerView: 2.3,
				},
				1260: {
					slidesPerView: 3,
				},
			}}
		>
			{reviewCards.map((card, index) => {
				return (
					<SwiperSlide key={index}>
						<ReviewCard
							card
							clientImage={card.clientImage}
							clientName={card.clientName}
							clientLocation={card.clientLocation}
							clientMark={card.clientMark}
							reviewTitle={card.reviewTitle}
							reviewText={card.reviewText}
						/>
					</SwiperSlide>
				);
			})}
			<Button
				direction="prev"
				section="reviews"
				swiper={swiperInstance}
			></Button>
			<Button
				direction="next"
				section="reviews"
				swiper={swiperInstance}
			></Button>
		</Swiper>
	);
};

export default Reviews;
