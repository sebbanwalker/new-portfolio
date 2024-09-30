import "./style.scss";
import { images } from "@sebban/images";
import { Banner } from "@sebban/banner";
import { Carousel } from "@sebban/carousel";

export const LandingPage = () => {
	return (
		<section className="landing">
			<Banner />
			<Carousel
				title="Main Stack"
				items={[
					{
						image: images.figma,
						name: "Figma",
						url: "https://www.figma.com/design/",
					},
					{
						image: images.typescript,
						name: "TypeScript",
						url: "https://www.typescriptlang.org/",
					},
					{
						image: images.javascript,
						name: "JavaScript",
						url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
					},
					{
						image: images.react,
						name: "React",
						url: "https://react.dev/",
					},
					{
						image: images.sass,
						name: "SASS",
						url: "https://sass-lang.com/",
					},
					{
						image: images.tailwind,
						name: "Tailwind CSS",
						url: "https://tailwindcss.com/",
					},
					{
						image: images.aws,
						name: "Amazon Web Services",
						url: "https://aws.amazon.com/what-is-aws/",
					},
					{
						image: images.redux,
						name: "Redux",
						url: "https://redux.js.org/",
					},
					{
						image: images.node,
						name: "Node.js",
						url: "https://nodejs.org/en",
					},
				]}
			/>
			<Carousel title="Other Tech" items={[]} />
		</section>
	);
};
