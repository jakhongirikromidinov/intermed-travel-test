import { useContext, useState } from "react";
import data from "../../../../context/db";

import { Swiper, SwiperSlide } from "swiper/react";
import Circle from "../Circle/Circle";
import { Button } from "../../../Common/Common";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
	const {
		tours: { tourTypes },
	} = useContext(data);

	const [swiperInstance, setSwiperInstance] = useState(null);
	return (
		<Swiper
			className="swiper"
			spaceBetween={40}
			slidesPerView={6}
			loop={true}
			onSwiper={(swiper) => setSwiperInstance(swiper)}
			breakpoints={{
				360: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
				1024: {
					slidesPerView: 6,
				},
			}}
		>
			{tourTypes.map((tour, index) => {
				return (
					<SwiperSlide key={index}>
						<Circle
							image={tour.image}
							title={tour.title}
							subtitle={tour.subtitle}
						/>
					</SwiperSlide>
				);
			})}

			<Button swiper={swiperInstance} direction="prev" section="tours" />
			<Button swiper={swiperInstance} direction="next" section="tours" />
		</Swiper>
	);
};
export default Slider;
