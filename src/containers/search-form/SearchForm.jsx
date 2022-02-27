import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTickets } from "../ticket-list/tickets.actions";

const SearchForm = () => {
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { value } = e.target;
		// console.log(value);
		dispatch(filterSearchTickets(value));
	};

	return (
		<Form>
			<Form.Group as={Row}>
				<Form.Label column sm="3">
					Search:
				</Form.Label>
				<Col sm="9">
					<Form.Control
						name="searchStr"
						type="text"
						placeholder="Search ..."
						onChange={handleOnChange}
						// value={str}
					/>
				</Col>
			</Form.Group>
		</Form>
	);
};

export default SearchForm;
