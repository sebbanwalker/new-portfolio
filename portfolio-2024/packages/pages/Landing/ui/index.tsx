import "./style.scss";
import { Banner } from "@sebban/banner";

export const LandingPage = () => {
	return (
		<section className="landing">
			<Banner />
			<section className="landing__main-stack"></section>
			<section className="landing__other-tech"></section>
		</section>
	);
};
