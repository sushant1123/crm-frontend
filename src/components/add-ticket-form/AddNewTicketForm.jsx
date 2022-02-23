import React from "react";
import "./addNewTicketForm.style.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const AddNewTicketForm = ({ handleOnSubmit, handleOnChange, formData, formDataError }) => {
	return (
		<div className="jumbotron add-new-ticket">
			<h1 className="text-center text-info">Add New Ticket</h1>
			<hr />
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
					<Form.Label column>Status</Form.Label>
					<Col sm="12">
						<Form.Control
							as="textarea"
							name="status"
							rows="5"
							placeholder="Enter status"
							value={formData.status}
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

AddNewTicketForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formData: PropTypes.object.isRequired,
	formDataError: PropTypes.object.isRequired,
};
