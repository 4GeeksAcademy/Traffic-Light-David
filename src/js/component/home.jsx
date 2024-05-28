import React, { useState } from "react";

const Home = () => {

	const [selectedColor, setSelecterColor] = useState("red");
	
	return (

		<div className="container d-flex align-item-center justify-content-center flex-column text-center mt-10">
			<div className="stick justify-content-center"></div>
			<div className="semaforo">
				<div
					onClick={() => setSelecterColor("red")}
					className={"redLight" + (selectedColor === "red" ? " glow" : "")}></div>
				<div
					onClick={() => setSelecterColor("yellow")}
					className={"yellowLight" + (selectedColor === "yellow" ? " glow" : "")}></div>
				<div
					onClick={() => setSelecterColor("green")}
					className={"greenLight" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
			
		</div >
	);
};

export default Home;