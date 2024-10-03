import "./style.scss";
import { Banner } from "@sebban/banner";
import { Carousel } from "@sebban/carousel";
import { mainStackData, otherTechData } from "@sebban/data";

export const LandingPage = () => {
	return (
		<section className="landing">
			<Banner />
			<Carousel title="Main Stack" items={mainStackData} />
			<Carousel title="Other Tech" items={otherTechData} />
		</section>
	);
};
