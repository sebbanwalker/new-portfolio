import "./style.scss";
import { card } from "@sebban/types";

export const Card = (props: card) => {
	return (
		<section className="card">
			<section className="card__container">
				<p className="card__title">{props.title}</p>
				<section className="card__box">
					<img src={props.image} alt={props.imageAlt} className="card__image" />
					<section className="card__info">
						<section className="card__icons">
							{props.icons &&
								props.icons.map((icon, index: number) => (
									<img
										src={icon.icon}
										alt={icon.iconName}
										key={index}
										className="card__icons--icon"
									/>
								))}
						</section>
						<section className="card__score">
							{props.score &&
								props.score.map((score, index: number) => (
									<section key={index} className="card__score--container">
										<p className="card__score--text">{score.text}</p>
										{score.score && (
											<p className="card__score--text--highlight">
												{score.score}
											</p>
										)}
										{score.icon && (
											<img
												className="card__score--img"
												src={score.icon}
												//TODO: Find a fix for score icon
												alt={"Score Icon"}
											/>
										)}
									</section>
								))}
						</section>
						<section className="card__link">
							{props.link &&
								props.link.map((link, index: number) => (
									<section key={index}>
										{link.text && (
											<p className="card__link--text">{link.text}</p>
										)}
										{link.icon && (
											<img
												className="card__link--image"
												src={link.icon}
												//TODO: Find a fix for score icon
												alt="Link Icon"></img>
										)}
									</section>
								))}
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};
