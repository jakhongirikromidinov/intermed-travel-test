// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { SliderItem, SliderButtons } from "./Slider.styled";
import { useContext } from "react";
import { Button } from "../../../Common/Common";
import data from "../../../../context/db";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { useState } from "react";

const BannerSlider = () => {
	const {
		banner: { cities },
	} = useContext(data);

	const [swiperInstance, setSwiperInstance] = useState(null);

	return (
		<Swiper
			onSwiper={(swiper) => setSwiperInstance(swiper)}
			modules={[EffectFade]}
			effect="fade"
			slidesPerView={1}
			breakpoints={{}}
		>
			{cities.map((elem, index) => {
				return (
					<SwiperSlide key={index} city={elem.id}>
						<SliderItem city={elem.id}>
							<label>{elem.supTitle}</label>
							<h2>{elem.title}</h2>
							<SliderButtons>
								<Button
									swiper={swiperInstance}
									direction="prev"
									section="banner"
								/>
								<Button
									swiper={swiperInstance}
									direction="next"
									section="banner"
								/>
							</SliderButtons>
						</SliderItem>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
export default BannerSlider;
