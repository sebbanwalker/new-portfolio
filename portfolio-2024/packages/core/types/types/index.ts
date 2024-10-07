export interface carousel {
	image: string;
	name: string;
	url?: string;
}

export interface cardLink {
	text: string;
	icon: string;
	url?: string;
}
[];

export interface cardScore {
	text: string;
	icon?: string;
	score?: string;
}
[];

export interface card {
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
}
