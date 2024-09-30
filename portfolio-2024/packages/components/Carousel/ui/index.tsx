import "./style.scss";
import { Tooltip } from "@sebban/tooltip";

interface carouselProps {
	title: string;
	items: {
		image: string;
		name: string;
		url?: string;
	}[];
}

export const Carousel: React.FC<carouselProps> = (props) => {
	return (
		<section className="carousel">
			<h1 className="carousel__title">{props.title}</h1>
			<section className="carousel__items">
				{props.items.map((item, index: number) => (
					<Tooltip text={item.name}>
						{item.url ? (
							<a href={item.url} target="_blank" rel="noopener noreferrer">
								<img
									key={index}
									src={item.image}
									alt={`carousel item ${index}`}
								/>
							</a>
						) : (
							<img
								key={index}
								src={item.image}
								alt={`carousel item ${index}`}
							/>
						)}
					</Tooltip>
				))}
			</section>
		</section>
	);
};
