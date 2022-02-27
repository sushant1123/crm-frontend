import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "./login.actions";
import { useNavigate } from "react-router-dom";

const Login = ({ formSwitcher }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { isLoading, isAuth, error } = useSelector((state) => state.login);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Fill up all the details");
		}

		dispatch(userLogin({ email, password }));
	};

	if (isAuth) {
		navigate("/dashboard");
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleOnSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								value={email}
								onChange={handleOnChange}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
								value={password}
								onChange={handleOnChange}
								required
							/>
						</Form.Group>

						<Button type="submit" style={{ width: "100%" }}>
							Login
						</Button>

						{isLoading && <Spinner variant="primary" animation="border"></Spinner>}
					</Form>
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					<a href="!#" className="link-primary" onClick={() => formSwitcher("reset")}>
						Forgot Password
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

Login.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};
