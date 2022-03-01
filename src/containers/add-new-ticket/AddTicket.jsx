import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddNewTicketForm from "../../components/add-ticket-form/AddNewTicketForm";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const AddTicket = () => {
	return (
		<Container>
			<Row>
				<Col>
					<BreadCrumb page="Add New Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					<AddNewTicketForm />
				</Col>
			</Row>
		</Container>
	);
};

export default AddTicket;
