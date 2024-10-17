export type carousel = {
	image: string;
	name: string;
	url?: string;
};

export type cardLink = {
	text: string;
	icon: string;
	url?: string;
};
[];

export type cardScore = {
	text: string;
	icon?: string;
	score?: string;
};
[];

export type card = {
	image: string;
	imageAlt: string;
	title: string;
	icons?: {
		icon: string;
		iconName: string;
	}[];
	description: string;
	score?: cardScore[];
	link?: cardLink[];
};
