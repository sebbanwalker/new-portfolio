import "./style.scss";
import { card } from "@sebban/types";

export const Card = (props: card) => {
	return (
		<section className="card">
			<section className="card__container">
				<p className="card__title">{props.title}</p>
				<img src={props.image} alt={props.imageAlt} className="card__image" />
				{props.icons &&
					props.icons.map((icon, index: number) => (
						<img src={icon.icon} alt={icon.iconName} key={index} />
					))}
				{props.score &&
					props.score.map((score, index: number) => (
						<section key={index}>
							<p className="card__score--text">{score.text}</p>
							{score.score && (
								<p className="card__score--text--highlight">{score.score}</p>
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
