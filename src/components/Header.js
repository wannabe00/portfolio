import React, { useState } from "react";
import "./Header.css";
import logo from "./assets/logo.png";
import logoAlt from "./assets/logo-alt.png";

const Header = ({ onNavClick, activeSection }) => {
	const [isFlipping, setIsFlipping] = useState(false);
	const [isLogoAlt, setIsLogoAlt] = useState(false);
	const [displayedLogo, setDisplayedLogo] = useState(logo);

	const handleLogoClick = () => {
		if (isFlipping) return;
		setIsFlipping(true);

		// Sequence for the flipping animation
		const flipSequence = isLogoAlt
			? [logo, logo, logoAlt, logoAlt, logo, logo]
			: [logoAlt, logoAlt, logo, logo, logoAlt, logoAlt];

		let index = 0;
		const interval = setInterval(() => {
			setDisplayedLogo(flipSequence[index]);
			index++;

			if (index === flipSequence.length) {
				clearInterval(interval);
				setIsLogoAlt((prev) => !prev);
				setIsFlipping(false);
			}
		}, 240);
	};

	const handleNavClick = (section, e) => {
		e.preventDefault();
		onNavClick(section);
	};

	return (
		<header className="app__header">
			<div className="header__left">
				<div className="logo__container">
					<img
						src={displayedLogo}
						alt="Logo"
						className={`header__logo ${isFlipping ? "flipping" : ""}`}
						onClick={handleLogoClick}
					/>
				</div>
				<div className="header__info">
					<h1 className="full__name">Levan Kobakhidze</h1>
					<h2 className="job__desc">Student & Trainer</h2>
					<p className="tagline">Welcome to my portfolio project</p>
				</div>
			</div>

			<nav className="header__center">
				<ul className="nav__list">
					<li className="nav__item">
						<a
							href="#about"
							className={`nav__link ${
								activeSection === "about" ? "active" : ""
							}`}
							onClick={(e) => handleNavClick("about", e)}
						>
							About
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#projects"
							className={`nav__link ${
								activeSection === "projects" ? "active" : ""
							}`}
							onClick={(e) => handleNavClick("projects", e)}
						>
							Projects
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#contact"
							className={`nav__link ${
								activeSection === "contact" ? "active" : ""
							}`}
							onClick={(e) => handleNavClick("contact", e)}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className="header__right">
				<div className="social__links">
					<a
						href="https://github.com/wannabe00"
						target="_blank"
						className="social__link"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						href="https://www.instagram.com/kobakha_/"
						target="_blank"
						className="social__link"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
				</div>
				<a
					href="https://www.linkedin.com/in/levan-kobakhidze-0850542a1/"
					className="cta__button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hire Me
				</a>
			</div>
		</header>
	);
};

export default Header;
