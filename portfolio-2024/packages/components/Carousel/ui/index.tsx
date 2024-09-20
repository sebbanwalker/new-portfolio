import "./style.scss";

interface carouselProps {
	title: string;
	items: string[];
}

export const Carousel: React.FC<carouselProps> = (props) => {
	return (
		<section className="carousel">
			<h1 className="carousel__title">{props.title}</h1>
			<section className="carousel__items">
				{props.items.map((item, index) => (
					<img key={index} src={item} alt={`carousel item ${index}`} />
				))}
			</section>
		</section>
	);
};
