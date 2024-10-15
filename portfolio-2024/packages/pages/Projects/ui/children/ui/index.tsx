import { Card } from "@sebban/card";
import { mysticalMeadows as mm } from "@sebban/data";

export const Websites = () => {
	return <Card {...mm} />;
};
export const Specialized = () => {
	return <div>specialized</div>;
};

export const Miscellaneous = () => {
	return <div>misc</div>;
};

export const Bachelors = () => {
	return <div>bachelor</div>;
};

export const ProjectComponents = {
	Websites,
	Specialized,
	Miscellaneous,
	Bachelors,
};
