import React, { useEffect } from "react";
import "./FeatureRectangle.css";
import jokerImg from "./assets/slider.jpg"; // Replace with your image path

const FeatureRectangle = ({ activeSection, onSectionChange }) => {
	// Determine if we should show contact (slid state)
	const isSlid = activeSection === "contact";

	// Auto-toggle when activeSection changes
	useEffect(() => {
		// You could add any additional logic here if needed
	}, [activeSection]);

	const handleSlide = () => {
		// Toggle between about and contact
		const newSection = isSlid ? "about" : "contact";
		onSectionChange(newSection);
	};

	return (
		<div className="feature-rectangle">
			<div className={`feature-info ${isSlid ? "hidden" : ""}`}>
				<h2>About Me</h2>
				<p>
					Passionate developer and trainer with a love for <br />
					creative solutions, technology, and continuous learning.
				</p>

				<h3>Work Experience</h3>
				<ul>
					<li>Trainer @ Steve Jobs American Academy</li>
				</ul>

				<h3>Education & Training</h3>
				<ul>
					<li>Currently pursuing BSc in Computer Science @ KIU</li>
					<li>Completed IT Support Course @ TBC</li>
				</ul>
			</div>

			<div
				className={`feature-joker ${isSlid ? "slid" : ""}`}
				onClick={handleSlide}
				title="Click to slide"
			>
				<img src={jokerImg} alt="Logo" />
			</div>

			<div className={`feature-contact ${isSlid ? "show" : ""}`}>
				<h2>Contact Me</h2>
				<p>Email: kobakhidzeleoaa@proton.me</p>
				<p>Phone: +995592120563</p>
			</div>
		</div>
	);
};

export default FeatureRectangle;
