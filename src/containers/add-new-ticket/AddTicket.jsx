import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddNewTicketForm from "../../components/add-ticket-form/AddNewTicketForm";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { shortText } from "../../utils/validation";

const initialAddNewTicketData = {
	subject: "",
	issueDate: "",
	status: "",
};

const initialAddNewTicketErrorData = {
	subject: false,
	issueDate: false,
	status: false,
};

const AddTicket = () => {
	const [formData, setFormData] = useState(initialAddNewTicketData);
	const [formDataError, setFormDataError] = useState(initialAddNewTicketErrorData);
	useEffect(() => {}, [formData]);
	useEffect(() => {}, [formDataError]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);

		// setFormData((prevState) => {
		// 	return {
		// 		...prevState,
		// 		[name]: value,
		// 	};
		// });

		//additional
		setFormDataError(initialAddNewTicketErrorData);

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		setFormDataError(initialAddNewTicketErrorData);

		const isSubjectValid = shortText(formData.subject);

		setFormDataError({
			...formDataError,
			subject: !isSubjectValid,
		});

		console.log(formData, "form submit req. received");
	};

	return (
		<Container>
			<Row>
				<Col>
					<BreadCrumb page="Add New Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					<AddNewTicketForm
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						formData={formData}
						formDataError={formDataError}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default AddTicket;
