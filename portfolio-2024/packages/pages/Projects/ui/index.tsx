import "./style.scss";
import { Card } from "@sebban/card";
import { images } from "@sebban/images";
import { mysticalMeadows as mm } from "@sebban/data";

export const ProjectsPage = () => {
	return (
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
	);
};
