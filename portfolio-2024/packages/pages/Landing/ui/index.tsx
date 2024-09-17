import "./style.scss";
import { Banner } from "@sebban/banner";
import { Carousel } from "@sebban/carousel";

export const LandingPage = () => {
	return (
		<section className="landing">
			<Banner />
			<Carousel />
			<Carousel />
		</section>
	);
};
