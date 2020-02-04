import React from "react";

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-success px-10 ">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

// everything in the return statement is rendering, which means putting it out on the page.  React can only render one piece at time.  That is why everything is only under one tag for instance here everything is under the <div></div>.. if we try to add another element we will get an error. If you encompass everything inside <></> it will work!
// if you have an error that cuts the server (err) you must run NPM Run Start again to refresh the server.
