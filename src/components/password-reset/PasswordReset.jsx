import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "./passwordReset.actions";

const PasswordReset = () => {
	const [email, setEmail] = useState("a@a.com");
	const { isLoading, status, message } = useSelector((state) => state.password);

	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handlePasswordResetSubmit = (e) => {
		e.preventDefault();
		// console.log(email);
		if (!email) {
			return alert("Please enter email");
		}
		dispatch(sendPasswordResetOtp(email));
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center"> Reset Password</h1>
					<hr />
					{message && (
						<Alert variant={status === "success" ? "success" : "danger"}>{message}</Alert>
					)}
					{isLoading && <Spinner variant="primary" animation="border" />}
					<Form onSubmit={handlePasswordResetSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								value={email}
								onChange={handleOnChange}
								// required
							/>
						</Form.Group>

						<Button type="submit" style={{ width: "100%" }}>
							Reset Password
						</Button>
					</Form>
				</Col>
			</Row>

			<hr />
		</Container>
	);
};

export default PasswordReset;
