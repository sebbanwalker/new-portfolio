import "./style.scss";
import portrait from "/portrait.png";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import leetcode from "/leetcode.svg";
import { Tooltip } from "@sebban/tooltip";

export const Banner = () => {
	return (
		<section className="banner">
			<section className="banner__title">
				<div className="banner__title--container">
					<h1 className="banner__title--sebastian">SEBASTIAN</h1>
					<h1 className="banner__title--walker">WALKER</h1>
				</div>
				<p className="banner__text">
					Impassioned Frontend Developer based in Stockholm, Sweden.
				</p>
				<section className="banner__links">
					<section className="banner__links--item">
						<Tooltip text="GitHub Profile">
							<a href="https://github.com/sebbanwalker">
								<img src={github} className="banner__links--image"></img>
							</a>
						</Tooltip>
					</section>
					<section className="banner__links--item">
						<Tooltip text="LinkedIn Profile">
							<a href="https://linkedin.com/in/sebbanwalker">
								<img src={linkedin} className="banner__links--image"></img>
							</a>
						</Tooltip>
					</section>
					<section className="banner__links--item">
						<Tooltip text="LeetCode Profile">
							<a href="https://leetcode.com/sebbanwalker">
								<img src={leetcode} className="banner__links--image"></img>
							</a>
						</Tooltip>
					</section>
				</section>
			</section>
			<section className="banner__portrait">
				<img src={portrait} className="banner__portrait--photo"></img>
			</section>
		</section>
	);
};
