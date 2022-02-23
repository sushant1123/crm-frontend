import React from "react";
import Dashboard from "../containers/dashboard/Dashboard";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const DefaultLayout = () => {
	return (
		<div className="default-layout">
			<header className="header">
				<Header />
			</header>

			<main className="main">
				<Dashboard />
			</main>

			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default DefaultLayout;
