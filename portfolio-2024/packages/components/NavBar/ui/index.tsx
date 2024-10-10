import "./style.scss";

type navbar = {
	categories: string[];
};

export const NavBar = (props: navbar) => {
	return (
		<section className="navbar">
			{props &&
				props.categories.map((category, index: number) => (
					<h1 key={index} className="navbar__category">
						{category}
					</h1>
				))}
		</section>
	);
};
