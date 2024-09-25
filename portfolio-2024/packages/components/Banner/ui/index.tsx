import "./style.scss";
import portrait from "/portrait.png";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import leetcode from "/leetcode.svg";

export const Banner = () => {
	return (
		<section className="banner">
			<section className="banner__title">
				<div className="banner__title--container">
					<h1 className="banner__title--sebastian">SEBASTIAN</h1>
					<h1 className="banner__title--walker">WALKER</h1>
				</div>
				<p>Impassioned Frontend Developer based in Stockholm, Sweden.</p>
				<section className="banner__links">
					<a href="https://github.com/sebbanwalker">
						<img src={github} className="banner__link--image"></img>
					</a>
					<a href="https://linkedin.com/in/sebbanwalker">
						<img src={linkedin} className="banner__link--image"></img>
					</a>
					<a href="https://leetcode.com/sebbanwalker">
						<img src={leetcode} className="banner__link--image"></img>
					</a>
				</section>
			</section>
			<section className="banner__portrait">
				<img src={portrait} className="banner__portrait--photo"></img>
			</section>
		</section>
	);
};
