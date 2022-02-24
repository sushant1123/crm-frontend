import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchForm from "../search-form/SearchForm";
import TicketsTable from "../../components/tickets-table/TicketsTable";
import tickets from "../../assets/data/dummy.tickets.json";

const TicketList = () => {
	const [str, setStr] = useState("");
	const [displayTickets, setDisplayTickets] = useState(tickets);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setStr(value);
		searchTickets(value);
	};

	const searchTickets = (sttr) => {
		const filteredTickets = tickets.filter((ticket) =>
			ticket.subject.toLowerCase().includes(sttr.toLowerCase())
		);

		setDisplayTickets(filteredTickets);
	};

	//not required
	useEffect(() => {}, [str, displayTickets]);

	return (
		<Container>
			<Row>
				<Col>
					<BreadCrumb page="Ticket List" />
				</Col>
			</Row>

			<Row className="mt-4">
				<Col>
					<Button variant="info">Add New Ticket</Button>
				</Col>
				<Col className="text-right">
					<SearchForm handleOnChange={handleOnChange} str={str} />
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					<TicketsTable tickets={displayTickets} />
				</Col>
			</Row>
		</Container>
	);
};

export default TicketList;
