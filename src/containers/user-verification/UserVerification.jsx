import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { userRegistrationVerification } from "../../api/user.api";

import "./userVerification.style.css";

const initialResponse = {
	status: "",
	message: "",
};

const UserVerification = () => {
	const { _id, email } = useParams();
	const dt = { _id, email };

	const [response, setResponse] = useState(initialResponse);

	useEffect(() => {
		const apiCall = async () => {
			const result = await userRegistrationVerification(dt);
			setResponse(result);
		};

		!response.status && apiCall();
	}, [response]);

	//call api and send the _id to verify user
	// console.log("response", response);

	return (
		<div className="registration-page bg-info">
			<div className="mt-5">
				<div className="jumbotron form-box">
					{!response.status && <Spinner variant="info" animation="border" />}

					{response.status && (
						<Alert variant={response.status === "success" ? "success" : "danger"}>
							{response.message}
						</Alert>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserVerification;
