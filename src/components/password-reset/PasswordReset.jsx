import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PasswordReset = ({ handleOnChange, email, handlePasswordResetSubmit, formSwitcher }) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center"> Reset Password</h1>
					<hr />
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
							PasswordReset
						</Button>
					</Form>
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					<a href="!#" className="link-primary" onClick={() => formSwitcher("login")}>
						Login Now
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default PasswordReset;

PasswordReset.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handlePasswordResetSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
};
