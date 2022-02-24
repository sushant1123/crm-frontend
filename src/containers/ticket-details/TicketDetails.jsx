import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import tickets from "../../assets/data/dummy.tickets.json";
import MessageHistory from "../message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";

const ticket = tickets[0];
const TicketDetails = () => {
	const [message, setMessage] = useState("");

	useEffect(() => {}, [message]);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleOnSubmit = (e) => {
		alert("submit clicked");
	};

	return (
		<Container>
			<Row>
				<Col>
					<BreadCrumb page={"Ticket"} />
				</Col>
			</Row>

			<Row>
				<Col className="text-weight-bold text-secondary">
					<div className="subject">Subject: {ticket.subject}</div>
					<div className="openedAt">Opened Date: {ticket.addedAt}</div>
					<div className="status">Status: {ticket.status}</div>
				</Col>

				<Col className="text-end">
					<Button variant="outline-info">Close Ticket</Button>
				</Col>
			</Row>

			<Row className="mt-4">
				<Col>
					<MessageHistory msgs={ticket.history} />
				</Col>
			</Row>

			<hr />

			<Row className="mt-4">
				<Col>
					<UpdateTicket
						message={message}
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default TicketDetails;
