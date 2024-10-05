import React from "react";
import { images } from "@sebban/images";

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
				<img src={props.image} alt={props.imageAlt} />
				{props.icons &&
					props.icons.map((icon, index: number) => (
						<img src={icon.icon} alt={icon.iconName} />
					))}
			</section>
		</section>
	);
};
