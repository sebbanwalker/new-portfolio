import "./style.scss";
import { Link } from "react-router-dom";

type item = {
	categories: link[];
};

type link = {
	category: string;
	link: string;
};

export const NavBar = (props: item) => {
	return (
		<section className="navbar">
			{props &&
				props.categories.map((item, index: number) => (
					<Link key={index} className="navbar__category" to={item.link}>
						{item.category}
					</Link>
				))}
		</section>
	);
};
