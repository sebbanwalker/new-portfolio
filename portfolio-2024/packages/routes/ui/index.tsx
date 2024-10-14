import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { LandingPage } from "@sebban/landingpage";
import { BiographyPage } from "@sebban/biographypage";
import { ProjectsPage } from "@sebban/projectspage";
import { CredentialsPage } from "@sebban/credentialspage";
import { ContactPage } from "@sebban/contactpage";
import { Header } from "@sebban/header";
import {
	Websites,
	Specialized,
	Miscellaneous,
	Bachelors,
} from "@sebban/projectcomponents";

export const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/biography" element={<BiographyPage />} />
				<Route path="/projects" element={<ProjectsPage />}>
					<Route index element={<Navigate to="websites" replace />} />
					<Route path="websites" element={<Websites />} />
					<Route path="specialized" element={<Specialized />} />
					<Route path="misc" element={<Miscellaneous />} />
					<Route path="bachelors" element={<Bachelors />} />
				</Route>
				<Route path="/credentials" element={<CredentialsPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
};
