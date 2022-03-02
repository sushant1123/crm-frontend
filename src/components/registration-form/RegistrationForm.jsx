import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newUserRegistration } from "./registration.actions";
import { resetRegistrationMsgs } from "./userRegistrationSlice";

const initialFormState = {
	name: "Sush Bahirat",
	phone: 1234567890,
	email: "sushantbahirat005@gmail.com",
	company: "Some company",
	address: "Somewhere on the earth",
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

const RegistrationForm = () => {
	const [newUser, setNewUser] = useState(initialFormState);
	const [passwordError, setPasswordError] = useState(passwordVerificationError);

	const { isLoading, status, message } = useSelector((state) => state.registration);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(resetRegistrationMsgs());
		};
	}, [newUser]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setNewUser({ ...newUser, [name]: value });

		if (name === "password") {
			const isLengthy = value.length >= 8;
			const hasUpper = /[A-Z]/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const hasSpecialChar = /[&$@#%]/.test(value);

			setPasswordError({ ...passwordError, isLengthy, hasUpper, hasLower, hasNumber, hasSpecialChar });
		}

		if (name === "confirmPassword") {
			setPasswordError({ ...passwordError, confirmPassword: newUser.password === value });
		}
	};

	const handleOnSubmit = (e) => {
		// console.log(newUser);
		e.preventDefault();

		dispatch(newUserRegistration(newUser));
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info">User Registration</h1>
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					{message && (
						<Alert variant={status === "success" ? "success" : "danger"}>{message}</Alert>
					)}
				</Col>
			</Row>

			<Row>
				<Col>
					<Form onSubmit={handleOnSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Name"
								name="name"
								value={newUser.name}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter Phone"
								name="phone"
								value={newUser.phone}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter Email"
								name="email"
								value={newUser.email}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Company Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Company Name"
								name="company"
								value={newUser.company}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Address </Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Address"
								name="address"
								value={newUser.address}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								name="password"
								value={newUser.password}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								value={newUser.confirmPassword}
								onChange={handleOnChange}
							/>
							<Form.Text>
								{!passwordError.confirmPassword && newUser.confirmPassword.length > 3 && (
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
							{isLoading && <Spinner variant="primary" animation="border" />}
						</div>
					</Form>
				</Col>
			</Row>

			<Row className="py-3">
				<Col>
					Already have an account?
					<a href="/">Login Here</a>
				</Col>
			</Row>
		</Container>
	);
};

export default RegistrationForm;
