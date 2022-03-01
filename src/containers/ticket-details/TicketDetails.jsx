import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import MessageHistory from "../message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";
import { fetchSingleTicket } from "../ticket-list/tickets.actions";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "bootstrap";

// const ticket = tickets[0];
const TicketDetails = () => {
	const [message, setMessage] = useState("");
	const [ticket, setTicket] = useState({});

	const { isLoading, error, selectedTicket } = useSelector((state) => state.tickets);
	const dispatch = useDispatch();
	const { tId } = useParams();

	useEffect(() => {
		dispatch(fetchSingleTicket(tId));
	}, [message, tId, dispatch]);

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
				<Col>
					{isLoading && <Spinner variant="primary" animation="border" />}
					{error && <Alert variant="danger">{error}</Alert>}
				</Col>
			</Row>

			<Row>
				<Col className="text-weight-bold text-secondary">
					<div className="subject">Subject: {selectedTicket.subject}</div>
					<div className="openedAt">Opened Date: {selectedTicket.openedAt}</div>
					<div className="status">Status: {selectedTicket.status}</div>
				</Col>

				<Col className="text-end">
					<Button variant="outline-info">Close Ticket</Button>
				</Col>
			</Row>

			<Row className="mt-4">
				<Col>
					{selectedTicket.conversations && <MessageHistory msgs={selectedTicket.conversations} />}
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
