import React from "react";
import { useSelector } from "react-redux";

import PasswordReset from "../../components/password-reset/PasswordReset";
import UpdatePasswordForm from "../../components/password-reset/UpdatePasswordForm";

import "./passwordOtpForm.style.css";

const PasswordOtpForm = () => {
	const { showUpdatePassForm } = useSelector((state) => state.password);
	return (
		<div className="password-reset-page bg-info">
			<div className="jumbotron form-box">
				{showUpdatePassForm ? <UpdatePasswordForm /> : <PasswordReset />}
				<div className="text-center mt-3">
					<a href="/">Login Now</a>
				</div>
			</div>
		</div>
	);
};

export default PasswordOtpForm;
