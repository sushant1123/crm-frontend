import React from "react";
import { Table } from "react-bootstrap";

const TicketsTable = ({ tickets }) => {
	console.log(tickets);
	return (
		<Table responsive="sm md lg" striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Subject</th>
					<th>Ticket Status</th>
					<th>Added At</th>
				</tr>
			</thead>
			<tbody>
				{tickets.length > 0 ? (
					tickets.map((ticket) => {
						return (
							<tr key={ticket.id}>
								<td>{ticket.id}</td>
								<td>{ticket.subject}</td>
								<td>{ticket.status}</td>
								<td>{ticket.addedAt}</td>
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
