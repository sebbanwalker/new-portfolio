import { images } from "@sebban/images";
import { card, carousel, cardScore, cardLink } from "@sebban/types";

//Carousels

export const mainStackData: carousel[] = [
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
		image: images.node,
		name: "Node.js",
		url: "https://nodejs.org/en",
	},
	{
		image: images.vite,
		name: "Vite",
		url: "https://vitejs.dev/",
	},
];

export const otherTechData: carousel[] = [
	{
		image: images.bem,
		name: "BEM Convention",
		url: "https://getbem.com/",
	},
	{
		image: images.csharp,
		name: "C#",
		url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
	},
	{
		image: images.cplus,
		name: "C++",
		url: "https://isocpp.org/",
	},
	{
		image: images.docker,
		name: "Docker",
		url: "https://www.docker.com/",
	},
	{
		image: images.java,
		name: "Java",
		url: "https://dev.java/learn/",
	},
	{
		image: images.nextjs,
		name: "Next.js",
		url: "https://nextjs.org/",
	},
	{
		image: images.redux,
		name: "Redux",
		url: "https://redux.js.org/",
	},
	{
		image: images.unity,
		name: "Unity",
		url: "https://unity.com/",
	},
	{
		image: images.vercel,
		name: "Vercel",
		url: "https://vercel.com/",
	},
];

//Card

export const w3cValidation: cardScore = {
	text: "W3C Validation",
	icon: images.w3c,
};

export const lighthouseScore: cardScore = {
	text: "Lighthouse Score: ",
};

export const visitApp: cardLink = {
	text: "Visit App",
	icon: images.popup,
};

export const gitRepo: cardLink = {
	text: "GitHub Repo",
	icon: images.popup,
};

export const mysticalMeadows: card = {
	image: images.mysticalmeadows,
	imageAlt: "Mystical Meadows",
	title: "Mystical Meadows",
	icons: [
		{
			icon: images.javascript,
			iconName: "JavaScript",
		},
		{
			icon: images.react,
			iconName: "React",
		},
		{
			icon: images.sass,
			iconName: "SASS",
		},
		{
			icon: images.framermotion,
			iconName: "Framer Motion",
		},
	],
	description:
		"An animation project showcasing the principles of animation to augment the user experience. ",
	score: [
		{
			...w3cValidation,
		},
		{
			...lighthouseScore,
			score: "100",
		},
	],
	link: [
		{
			...visitApp,
			url: "https://mystical-meadows-react.netlify.app/",
		},
		{
			...gitRepo,
			url: "https://github.com/sebbanwalker/mystical-meadows-react",
		},
	],
};
