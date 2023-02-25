import StyledBanner from "./Banner.styled";
import BannerSlider from "./Slider/Slider";
import SearchBar from "./SearchBar/SearchBar";
import BreadCrump from "./BreadCrump/BreadCrump";

const Banner = () => {
	return (
		<StyledBanner>
			<BannerSlider />
			<SearchBar />
			<BreadCrump />
		</StyledBanner>
	);
};

export default Banner;
