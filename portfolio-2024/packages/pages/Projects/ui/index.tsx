import "./style.scss";
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
			</section>
		</section>
	);
};
