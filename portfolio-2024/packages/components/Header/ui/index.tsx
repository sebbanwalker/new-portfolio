import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<section className="header">
			<button className="header__hamburger" onClick={toggleMenu}>
				☰
			</button>
			<nav className={`header__nav${isMenuOpen ? "--open" : ""}`}>
				<Link
					to="/"
					className="header__button"
					onClick={() => setIsMenuOpen(false)}>
					Home
				</Link>
				<Link
					to="/projects"
					className="header__button"
					onClick={() => setIsMenuOpen(false)}>
					Projects
				</Link>
				<Link
					to="/credentials"
					className="header__button"
					onClick={() => setIsMenuOpen(false)}>
					Credentials
				</Link>
				<Link
					to="/biography"
					className="header__button"
					onClick={() => setIsMenuOpen(false)}>
					Biography
				</Link>
				<Link
					to="/contact"
					className="header__button"
					onClick={() => setIsMenuOpen(false)}>
					Contact
				</Link>
			</nav>
		</section>
	);
};
