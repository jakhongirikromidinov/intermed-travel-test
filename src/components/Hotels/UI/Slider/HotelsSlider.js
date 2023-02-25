import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import StyledHotelsSlider from "./HotelsSlider.styled";
import Card from "../Card/Card";
import { Button } from "../../../Common/Common";

import { useContext, useState } from "react";
import data from "../../../../context/db";

const HotelsSlider = () => {
	const {
		hotels: { hotelCards },
	} = useContext(data);

	const [swiperInstance, setSwiperInstance] = useState(null);
	return (
		<StyledHotelsSlider>
			<Swiper
				onSwiper={(swiper) => setSwiperInstance(swiper)}
				spaceBetween={35}
				slidesPerView={4}
				breakpoints={{
					360: {
						slidesPerView: 1.6,
						spaceBetween: 12,
					},
					500: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 3,
					},
					1300: {
						slidesPerView: 4,
						spaceBetween: 35,
					},
				}}
			>
				{hotelCards.map((hotel, index) => {
					return (
						<SwiperSlide key={index}>
							<Card
								img={hotel.image}
								title={hotel.title}
								location={hotel.location}
								review={hotel.review}
								rating={hotel.rating}
								reviewNum={hotel.reviewNum}
								price={hotel.price}
							/>
						</SwiperSlide>
					);
				})}
				<Button direction="prev" swiper={swiperInstance} section="hotels" />
				<Button direction="next" swiper={swiperInstance} section="hotels" />
			</Swiper>
		</StyledHotelsSlider>
	);
};

export default HotelsSlider;
