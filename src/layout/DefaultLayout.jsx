import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const DefaultLayout = (props) => {
	return (
		<div className="default-layout">
			<header className="header">
				<Header />
			</header>

			<main className="main">{props.children}</main>

			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default DefaultLayout;
