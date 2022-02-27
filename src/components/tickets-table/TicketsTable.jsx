import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TicketsTable = () => {
	const { tickets, searchTicketList, isLoading, error } = useSelector((state) => state.tickets);

	if (isLoading) {
		return <h3>Loading.....!</h3>;
	}

	if (error) {
		return <h3>{error}</h3>;
	}

	return (
		<Table responsive="sm md lg" striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Ticket Id</th>
					<th>Subject</th>
					<th>Ticket Status</th>
					<th>Added At</th>
				</tr>
			</thead>
			<tbody>
				{searchTicketList && searchTicketList.length > 0 ? (
					searchTicketList.map((ticket, index) => {
						return (
							<tr key={ticket._id}>
								<td>{index + 1}</td>
								<td>{ticket._id}</td>
								<td>
									<Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link>
								</td>
								<td>{ticket.status}</td>
								<td>{ticket.openedAt}</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td colSpan={4} className="text-center">
							No Tickets to show
						</td>
					</tr>
				)}
			</tbody>
		</Table>
	);
};

export default TicketsTable;
