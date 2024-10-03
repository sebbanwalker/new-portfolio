import React from "react";
import { images } from "@sebban/images";

type cardProps = {
	image: string;
	imageAlt: string;
	title: string;
	icons?: {
		icon: string;
		iconName: string;
	}[];
};

export const Card = (props: cardProps) => {
	return (
		<section className="card">
			<section className="card__container">
				<img src={props.image} alt={props.imageAlt} />
				{props.icons &&
					props.icons.map((icon, index: number) => (
						<img src={icon.icon} alt={icon.iconName} />
					))}
			</section>
		</section>
	);
};
