import "./style.scss";
import { Card } from "@sebban/card";
import { images } from "@sebban/images";

export const ProjectsPage = () => {
	return (
		<section className="projects">
			<Card
				image={images.mysticalmeadows}
				imageAlt={"Mystical Meadows"}
				title={"Mystical Meadows"}
				description={
					"An animation project showcasing the principles of animation to augment the user experience. "
				}
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
