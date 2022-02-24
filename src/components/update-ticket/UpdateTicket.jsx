import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Label>Reply</Form.Label>
			<br />
			<Form.Text>Please reply to the ticket by commenting here</Form.Text>
			<Form.Control as="textarea" rows={5} name="details" value={message} onChange={handleOnChange} />

			<div className="text-center mt-3 mb-3">
				<Button variant="info" type="submit">
					Reply
				</Button>
			</div>
		</Form>
	);
};

export default UpdateTicket;

UpdateTicket.propTypes = {
	message: PropTypes.string.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
};
