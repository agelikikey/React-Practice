import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";

// ./ means this folder and ../ means the previous folder

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="text-center mt-5 bg-primary">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<div className="d-flex justify-content-center flex-lg-fill">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
