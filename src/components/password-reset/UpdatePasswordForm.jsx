import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./passwordReset.actions";

const initialFormState = {
	pin: "",
	password: "Sushant@12",
	confirmPassword: "Sushant@12",
};

const passwordVerificationError = {
	isLengthy: false,
	hasUpper: false,
	hasLower: false,
	hasNumber: false,
	hasSpecialChar: false,
	confirmPassword: false,
};

const UpdatePasswordForm = () => {
	const [newPassword, setNewPassword] = useState(initialFormState);
	const [passwordError, setPasswordError] = useState(passwordVerificationError);

	const { isLoading, status, message, email } = useSelector((state) => state.password);
	const dispatch = useDispatch();

	useEffect(() => {}, [newPassword]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setNewPassword({ ...newPassword, [name]: value });

		if (name === "password") {
			const isLengthy = value.length >= 8;
			const hasUpper = /[A-Z]/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const hasSpecialChar = /[&$@#%]/.test(value);

			setPasswordError({ ...passwordError, isLengthy, hasUpper, hasLower, hasNumber, hasSpecialChar });
		}

		if (name === "confirmPassword") {
			setPasswordError({ ...passwordError, confirmPassword: newPassword.password === value });
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const { pin, password } = newPassword;

		const updatePasswordObj = { pin, newPassword: password, email };
		// console.log(updatePasswordObj);
		dispatch(updatePassword(updatePasswordObj));
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info">Update New Password</h1>
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					{message && (
						<Alert variant={status === "success" ? "success" : "danger"}>{message}</Alert>
					)}
					{isLoading && <Spinner variant="primary" animation="border" />}
				</Col>
			</Row>

			<Row>
				<Col>
					<Form onSubmit={handleOnSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>OTP</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter Pin"
								name="pin"
								value={newPassword.pin}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								name="password"
								value={newPassword.password}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								value={newPassword.confirmPassword}
								onChange={handleOnChange}
							/>
							<Form.Text>
								{!passwordError.confirmPassword && newPassword.confirmPassword.length > 3 && (
									<div className="text-danger mb-3">Password doesn't match!</div>
								)}
							</Form.Text>
						</Form.Group>

						<ul className="mb-4">
							<li className={passwordError.isLengthy ? "text-success" : "text-danger"}>
								Minimum of 8 characters
							</li>
							<li className={passwordError.hasUpper ? "text-success" : "text-danger"}>
								Atleast 1 uppercase
							</li>
							<li className={passwordError.hasLower ? "text-success" : "text-danger"}>
								Atleast 1 lowercase
							</li>
							<li className={passwordError.hasNumber ? "text-success" : "text-danger"}>
								Atleast 1 number
							</li>
							<li className={passwordError.hasSpecialChar ? "text-success" : "text-danger"}>
								Atleast 1 of the following special characters: &, $, @, #, %
							</li>
						</ul>

						<div className="d-grid gap-2">
							<Button
								variant="primary"
								size="lg"
								type="submit"
								disabled={Object.values(passwordError).includes(false)}
							>
								Submit
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default UpdatePasswordForm;
