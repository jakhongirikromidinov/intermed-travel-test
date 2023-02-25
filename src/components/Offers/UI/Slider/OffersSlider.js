import { Swiper, SwiperSlide } from "swiper/react";

import { useContext, useState } from "react";
import data from "../../../../context/db";

import OfferCard from "../Card/OfferCard";

import { Button } from "../../../Common/Common";

import "swiper/css";

const OffersSlider = () => {
	const {
		offers: { offerCards },
	} = useContext(data);

	const [swiperInstance, setSwiperInstance] = useState(null);

	return (
		<Swiper
			spaceBetween={35}
			slidesPerView={3}
			onSwiper={(swiper) => setSwiperInstance(swiper)}
			breakpoints={{
				1000: {
					slidesPerView: 2.3,
				},
				1250: {
					slidesPerView: 3,
				},
			}}
		>
			{offerCards.map((card, index) => {
				return (
					<SwiperSlide key={index}>
						<OfferCard
							id={card.id}
							image={card.image}
							title={card.title}
							location={card.location}
							offerType_1={card.offerType_1}
							offerType_2={card.offerType_2}
							price={card.price}
							descr={card.descr}
							buttonText={card.buttonText}
						/>
					</SwiperSlide>
				);
			})}
			<Button direction="prev" swiper={swiperInstance} section="offers" />
			<Button direction="next" swiper={swiperInstance} section="offers" />
		</Swiper>
	);
};

export default OffersSlider;
