import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchForm from "../search-form/SearchForm";
import TicketsTable from "../../components/tickets-table/TicketsTable";
// import tickets from "../../assets/data/dummy.tickets.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./tickets.actions";

const TicketList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllTickets());
	}, []);

	//not required
	useEffect(() => {}, [dispatch]);

	return (
		<Container>
			<Row>
				<Col>
					<BreadCrumb page="Ticket List" />
				</Col>
			</Row>

			<Row className="mt-4">
				<Col>
					<Link to={"/add-ticket"}>
						<Button variant="info">Add New Ticket</Button>
					</Link>
				</Col>
				<Col className="text-right">
					<SearchForm />
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					<TicketsTable />
				</Col>
			</Row>
		</Container>
	);
};

export default TicketList;
