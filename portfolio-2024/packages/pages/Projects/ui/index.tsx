import "./style.scss";
import { Card } from "@sebban/card";
import { images } from "@sebban/images";
import { mysticalMeadows as mm } from "@sebban/data";
import { NavBar } from "@sebban/navbar";
import { Outlet } from "react-router-dom";

export const ProjectsPage = () => {
	return (
		<section className="projects-page">
			<NavBar
				categories={[
					{
						category: "Full Websites",
						link: "websites",
					},
					{
						category: "Specialized",
						link: "specialized",
					},
					{
						category: "Miscellaneous",
						link: "misc",
					},
					{
						category: "Bachelor's Dissertation",
						link: "bachelors",
					},
				]}
			/>
			<section className="projects">
				<Outlet />
				<Card
					{...mm}
					icons={[
						{
							icon: images.typescript,
							iconName: "TypeScript",
						},
						{
							icon: images.react,
							iconName: "React",
						},
						{
							icon: images.sass,
							iconName: "SASS",
						},
					]}
				/>
			</section>
		</section>
	);
};
