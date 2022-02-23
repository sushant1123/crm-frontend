import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

const Header = () => {
	return (
		<Navbar bg="info" variant="dark" collapseOnSelect expand="md" sticky="top">
			<Container fluid>
				<Navbar.Brand href="/">
					<img src={logo} alt="logo" width="50px" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#dashboard">Dashboard</Nav.Link>
						<Nav.Link href="#tickets">Tickets</Nav.Link>
						<Nav.Link href="#Logout">Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
