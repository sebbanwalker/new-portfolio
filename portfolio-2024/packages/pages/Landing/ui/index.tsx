import "./style.scss";

export const LandingPage = () => {
	return (
		<section className="landing">
			<section className="landing__banner">
				<section className="landing__title">
					<h1 className="landing__title--sebastian">Sebastian</h1>
					<h1 className="landing__title--walker">Walker</h1>
				</section>
				<section className="landing__portrait"></section>
			</section>
			<section className="landing__main-stack"></section>
			<section className="landing__other-tech"></section>
		</section>
	);
};
