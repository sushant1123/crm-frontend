import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { userLoginRequest, userLoginFailure, userLoginSuccess } from "./loginSlice";
import { getUserProfile } from "../../containers/dashboard/user.actions";

const Login = ({ formSwitcher }) => {
	const [email, setEmail] = useState("sushantbahirat001@gmail.com");
	const [password, setPassword] = useState("Sushant@123");
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state) => state.login);

	useEffect(() => {
		if (sessionStorage.getItem("accessToken")) {
			navigate("/dashboard");
		}
	}, [navigate]);

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

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Fill up all the details");
		}

		dispatch(userLoginRequest());

		try {
			const isAuth = await userLogin({ email, password });
			// console.log("isAuth", isAuth);
			if (isAuth.status === "error") {
				return dispatch(userLoginFailure(isAuth.message));
			}

			dispatch(userLoginSuccess());
			dispatch(getUserProfile());
			navigate("/dashboard");
		} catch (error) {
			// console.log("from error", error);
			dispatch(userLoginFailure(error.message));
		}
	};

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
					<a href="/reset-password" className="link-primary" onClick={() => formSwitcher("reset")}>
						Forgot Password
					</a>
				</Col>
			</Row>

			<Row className="py-4">
				<Col>
					Are you new here?{" "}
					<a href="/registration" className="link-primary" onClick={() => formSwitcher("reset")}>
						Signup User
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
