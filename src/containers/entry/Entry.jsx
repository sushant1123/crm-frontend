import React, { useState } from "react";
import LoginForm from "../../components/login/Login";
import PasswordReset from "../../components/password-reset/PasswordReset";
import "./entry.style.css";

const Entry = () => {
	const [formLoad, setFormLoad] = useState("login");

	const handlePasswordResetSubmit = (e) => {
		e.preventDefault();
	};

	const formSwitcher = (formType) => {
		setFormLoad(formType);
	};

	return (
		<div className="entry-page bg-info">
			<div className="jumbotron form-box">
				{formLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

				{formLoad === "reset" && (
					<PasswordReset
						// handleOnChange={handleOnChange}
						// email={email}
						handlePasswordResetSubmit={handlePasswordResetSubmit}
						formSwitcher={formSwitcher}
					/>
				)}
			</div>
		</div>
	);
};

export default Entry;
