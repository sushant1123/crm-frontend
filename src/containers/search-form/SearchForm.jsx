import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchForm = ({ handleOnChange, str }) => {
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
						value={str}
					/>
				</Col>
			</Form.Group>
		</Form>
	);
};

export default SearchForm;

SearchForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	str: PropTypes.string.isRequired,
};
