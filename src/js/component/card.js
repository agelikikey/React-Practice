import React from "react";

//create your first component
export function Card() {
	return (
		<>
			<div className="card" style={{ width: "300px;" }}>
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
}

// everything needs to be closed in react so we will always have to troubleshoot.  Also react cant have a style attrivbute like style='width''18rem;'  instead it must look like the one above. When you add {{}} you can write anything in JS.  There are no apostrophs in react it will cause an error. Style has to be coded as an object.
