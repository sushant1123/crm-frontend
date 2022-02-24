import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = (props) => {
	return (
		<div className="default-layout">
			<header className="header">
				<Header />
			</header>
			<main className="main">
				<Outlet />
				{/* The nested element tree won't happen automatically. <Routes> will render the first match's element for you (In our case that's <DefaultLayout />). The next match's element is {props.children}. In order to render that, DefaultLayout needs to render an outlet. */}
				{props.children}
			</main>

			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default DefaultLayout;
