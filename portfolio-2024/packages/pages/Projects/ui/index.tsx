import "./style.scss";
import { Card } from "@sebban/card";
import { images } from "@sebban/images";
import { mysticalMeadows as mm } from "@sebban/data";
import { NavBar } from "@sebban/navbar";

export const ProjectsPage = () => {
	return (
		<section className="projects-page">
			<NavBar
				categories={[
					"Full Websites",
					"Specialized",
					"Miscellaneous",
					"Bachelor's Dissertation",
				]}
			/>
			<section className="projects">
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
