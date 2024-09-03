import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "@sebban/landingpage";
import { BiographyPage } from "@sebban/biographypage";
import { ProjectsPage } from "@sebban/projectspage";
import { ContactPage } from "@sebban/contactpage";

type Props = {};

export const AppRouter = (props: Props) => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/biography" element={<BiographyPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
};
