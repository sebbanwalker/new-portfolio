import "./style.scss";
import portrait from "./portrait.png";

export const Banner = () => {
	return (
		<section className="landing__banner">
			<section className="landing__title">
				<h1 className="landing__title--sebastian">Sebastian</h1>
				<h1 className="landing__title--walker">Walker</h1>
			</section>
			<section className="landing__portrait">
				<img src={portrait}></img>
			</section>
		</section>
	);
};
