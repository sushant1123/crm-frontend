import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const logoutRequest = () => {
		navigate("/");
	};

	return (
		<Navbar bg="info" variant="dark" collapseOnSelect expand="md" sticky="top">
			<Container fluid>
				<Navbar.Brand href="/">
					<img src={logo} alt="logo" width="50px" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<LinkContainer to="/dashboard">
							<Nav.Link>Dashboard</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/tickets">
							<Nav.Link>Tickets</Nav.Link>
						</LinkContainer>
						<Nav.Link onClick={logoutRequest}>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
