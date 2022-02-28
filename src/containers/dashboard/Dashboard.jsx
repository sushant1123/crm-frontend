import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketsTable from "../../components/tickets-table/TicketsTable";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "../ticket-list/tickets.actions";

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllTickets());
	}, [dispatch]);

	return (
		<Container>
			<Row>
				<Col>
					<BreadCrumb page={"Dashboard"} />
				</Col>
			</Row>
			<Row>
				<Col className="text-center mt-5 mb-2">
					<Link to={"/add-ticket"}>
						<Button variant="info" style={{ fontSize: "2rem", padding: "10px 30px" }}>
							Add New Ticket
						</Button>
					</Link>
				</Col>
			</Row>
			<Row>
				<Col className="text-center mt-2 mb-2">
					<div>Total Tickets: 0</div>
					<div>Pending Tickets: 0</div>
				</Col>
			</Row>

			<Row>
				<Col className="text-center mt-3 mb-2">
					<h3>Recently Added Tickets</h3>
				</Col>
			</Row>

			<Row>
				<Col className="recent-tickets">
					{}
					<TicketsTable />
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
