import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
// import PropTypes from "prop-types";
import { shortText } from "../../utils/validation";
import { addNewTicket } from "./addTicket.actions";

import "./addNewTicketForm.style.css";
import { useDispatch, useSelector } from "react-redux";
import { resetSuccessMsg } from "./addTicketSlice";

const initialAddNewTicketData = {
	subject: "",
	issueDate: "",
	message: "",
	sender: "",
};

const initialAddNewTicketErrorData = {
	subject: false,
	issueDate: false,
	message: false,
	sender: false,
};

const AddNewTicketForm = () => {
	const [formData, setFormData] = useState(initialAddNewTicketData);
	const [formDataError, setFormDataError] = useState(initialAddNewTicketErrorData);
	const {
		user: { name },
	} = useSelector((state) => state.user);

	const { isLoading, error, successMsg } = useSelector((state) => state.newTicket);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			if (!successMsg) {
				dispatch(resetSuccessMsg());
			}
		};
	}, [successMsg, dispatch, formData, formDataError]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		//additional
		setFormDataError(initialAddNewTicketErrorData);

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		setFormDataError(initialAddNewTicketErrorData);

		const isSubjectValid = shortText(formData.subject);

		setFormDataError({
			...formDataError,
			subject: !isSubjectValid,
		});

		dispatch(addNewTicket({ ...formData, sender: name }));
	};

	return (
		<div className="jumbotron add-new-ticket">
			<h1 className="text-center text-info">Add New Ticket</h1>
			<hr />
			<div>
				{isLoading && <Spinner variant="primary" animation="border" />}
				{successMsg && <Alert variant="success">{successMsg}</Alert>}
				{error && <Alert variant="danger">{error}</Alert>}
			</div>
			<Form onSubmit={handleOnSubmit}>
				<Form.Group className="mb-3" as={Row}>
					<Form.Label column sm="3">
						Subject
					</Form.Label>
					<Col sm="9">
						<Form.Control
							type="text"
							name="subject"
							// minLength={3}
							maxLength={100}
							placeholder="Enter subject"
							value={formData.subject}
							onChange={handleOnChange}
							required
						/>
						<Form.Text className="text-danger">
							{formDataError.subject && "Subject should be of min 3 and max 100 characters"}
						</Form.Text>
					</Col>
				</Form.Group>

				<Form.Group className="mb-3" as={Row}>
					<Form.Label column sm="3">
						Created At
					</Form.Label>
					<Col sm="9">
						<Form.Control
							type="date"
							name="issueDate"
							value={formData.issueDate}
							onChange={handleOnChange}
							required
						/>
						{/* <Form.Text>
							{formDataError.subject && "Subject should be of min 3 and max 100 characters"}
						</Form.Text> */}
					</Col>
				</Form.Group>

				<Form.Group className="mb-3" as={Row}>
					<Form.Label column>message</Form.Label>
					<Col sm="12">
						<Form.Control
							as="textarea"
							name="message"
							rows="5"
							placeholder="Enter message"
							value={formData.message}
							onChange={handleOnChange}
							required
						/>
						{/* <Form.Text>
							{!formDataError.subject && "Subject should be of min 3 and max 100 characters"}
						</Form.Text> */}
					</Col>
				</Form.Group>

				<Button type="submit" variant="info" size="lg" style={{ width: "100%" }}>
					Add
				</Button>
			</Form>
		</div>
	);
};

export default AddNewTicketForm;

// AddNewTicketForm.propTypes = {
// 	handleOnChange: PropTypes.func.isRequired,
// 	handleOnSubmit: PropTypes.func.isRequired,
// 	formData: PropTypes.object.isRequired,
// 	formDataError: PropTypes.object.isRequired,
// };
