import React from "react";
import { images } from "@sebban/images";
import "./style.scss";

interface link {
	text: string;
	icon: string;
}
[];

interface score {
	text: string;
	icon?: string;
	highlight?: string;
}
[];

type cardProps = {
	image: string;
	imageAlt: string;
	title: string;
	icons?: {
		icon: string;
		iconName: string;
	}[];
	description: string;
	score?: score[];
	link?: link[];
};

export const Card = (props: cardProps) => {
	return (
		<section className="card">
			<section className="card__container">
				<img src={props.image} alt={props.imageAlt} className="card__image" />
				{props.icons &&
					props.icons.map((icon, index: number) => (
						<img src={icon.icon} alt={icon.iconName} key={index} />
					))}
				{props.score &&
					props.score.map((score, index: number) => (
						<section key={index}>
							<p className="card__score--text">{score.text}</p>
							{score.highlight && (
								<img
									src={score.highlight}
									className="card__score--text--highlight"></img>
							)}
							{score.icon && (
								<img className="card__score--img">{score.icon} </img>
							)}
						</section>
					))}
				{props.link &&
					props.link.map((link, index: number) => (
						<section key={index}>
							{link.text && <p className="card__link--text">{link.text}</p>}
							{link.icon && (
								<img src={link.icon} className="card__link--image"></img>
							)}
						</section>
					))}
			</section>
		</section>
	);
};
