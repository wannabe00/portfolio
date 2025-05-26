import React, { useState } from "react";
import Header from "./components/Header";
import FeatureRectangle from "./components/FeatureRectangle";

const App = () => {
	const [activeSection, setActiveSection] = useState("about"); // Default to about

	const handleNavClick = (section) => {
		setActiveSection(section);
	};

	return (
		<div className="App">
			<Header onNavClick={handleNavClick} activeSection={activeSection} />
			<FeatureRectangle
				activeSection={activeSection}
				onSectionChange={setActiveSection}
			/>
			{/* Other components */}
		</div>
	);
};

export default App;
