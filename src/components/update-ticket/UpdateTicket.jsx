import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { replyOnTicket } from "../../containers/ticket-list/tickets.actions";

const UpdateTicket = ({ _id }) => {
	//get only the name of the user from user object.
	const {
		user: { name },
	} = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const [message, setMessage] = useState("");

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const messageObj = {
			message,
			sender: name,
		};
		// alert(JSON.stringify(messageObj));
		dispatch(replyOnTicket(_id, messageObj));

		setMessage("");
	};

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
	_id: PropTypes.string.isRequired,
};
