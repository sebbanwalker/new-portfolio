import "./style.scss";
import portrait from "/portrait.png";

export const Banner = () => {
	return (
		<section className="banner">
			<section className="banner__title">
				<div className="banner__title--container">
					<h1 className="banner__title--sebastian">SEBASTIAN</h1>
					<h1 className="banner__title--walker">WALKER</h1>
				</div>
			</section>
			<section className="banner__portrait">
				<img src={portrait} className="banner__portrait--photo"></img>
			</section>
		</section>
	);
};
