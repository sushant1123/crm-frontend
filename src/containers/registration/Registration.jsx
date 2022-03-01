import React from "react";
import RegistrationForm from "../../components/registration-form/RegistrationForm";
import "./registration.style.css";

const Registration = () => {
	return (
		<div className="registration-page bg-info">
			<div className="mt-5 mb-5">
				<div className="jumbotron form-box">
					<RegistrationForm />
				</div>
			</div>
		</div>
	);
};

export default Registration;
