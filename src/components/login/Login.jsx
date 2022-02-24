import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = ({ handleOnChange, email, password, handleOnSubmit, formSwitcher }) => {
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
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
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
};
