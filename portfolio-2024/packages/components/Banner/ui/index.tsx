import "./style.scss";
import portrait from "/portrait.png";

export const Banner = () => {
	return (
		<section className="banner">
			<section className="banner__title">
				<h1 className="banner__title--sebastian">Sebastian</h1>
				<h1 className="banner__title--walker">Walker</h1>
			</section>
			<section className="banner__portrait">
				<img src={portrait}></img>
			</section>
		</section>
	);
};
