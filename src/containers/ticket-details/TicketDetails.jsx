import React, { useEffect } from "react";
import { Button, Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import MessageHistory from "../message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import { closeTicket, fetchSingleTicket } from "../ticket-list/tickets.actions";

const TicketDetails = () => {
	const { isLoading, error, selectedTicket, replyTicketError } = useSelector((state) => state.tickets);
	const { replyMsg } = useSelector((state) => state.tickets);

	const dispatch = useDispatch();
	const { tId } = useParams();

	useEffect(() => {
		dispatch(fetchSingleTicket(tId));
	}, [tId, dispatch]);

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
					{replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}
					{replyMsg && <Alert variant="success">{replyMsg}</Alert>}
				</Col>
			</Row>

			<Row>
				<Col className="text-weight-bold text-secondary">
					<div className="subject">Subject: {selectedTicket.subject}</div>
					<div className="openedAt">
						Opened Date:{" "}
						{selectedTicket.openedAt && new Date(selectedTicket.openedAt).toLocaleString()}
					</div>
					<div className="status">Status: {selectedTicket.status}</div>
				</Col>

				<Col className="text-end">
					<Button
						variant="outline-info"
						onClick={() => dispatch(closeTicket(tId))}
						disabled={selectedTicket.status === "Closed"}
					>
						Close Ticket
					</Button>
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
					<UpdateTicket _id={tId} />
				</Col>
			</Row>
		</Container>
	);
};

export default TicketDetails;
