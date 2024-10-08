import "./style.scss";
import { card } from "@sebban/types";

export const Card = (props: card) => {
	const getHighlightColor = (score: string): string => {
		const numericScore = parseFloat(score);
		if (isNaN(numericScore)) return "white";
		if (numericScore >= 0 && numericScore < 25) return "red";
		if (numericScore >= 25 && numericScore < 50) return "orange";
		if (numericScore >= 50 && numericScore < 75) return "yellow";
		if (numericScore >= 75 && numericScore <= 100) return "green";
		return "white";
	};

	return (
		<section className="card">
			<section className="card__container">
				<section className="card__box">
					<img src={props.image} alt={props.imageAlt} className="card__image" />
					<section className="card__info">
						<p className="card__title">{props.title}</p>
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
										{score.score !== undefined && (
											<p
												className="card__score--text--highlight"
												style={{ color: getHighlightColor(score.score) }}>
												{score.score}
											</p>
										)}
										{score.icon && (
											<img
												className="card__score--img"
												src={score.icon}
												alt={"Score Icon"}
											/>
										)}
									</section>
								))}
						</section>
						<section className="card__link">
							{props.link &&
								props.link.map((link, index: number) => (
									<a
										key={index}
										className="card__link--container"
										href={link.url}>
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
									</a>
								))}
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};
