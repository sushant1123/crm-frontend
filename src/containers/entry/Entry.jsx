import React, { useState } from "react";
import LoginForm from "../../components/login/Login";
import PasswordReset from "../../components/password-reset/PasswordReset";
import "./entry.style.css";

const Entry = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formLoad, setFormLoad] = useState("login");

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Fill up all the details");
		}

		//TODO call api to submit the form
		console.log(email, password);
	};

	const handlePasswordResetSubmit = (e) => {
		e.preventDefault();
		if (!email) {
			return alert("Fill up the details");
		}

		//TODO call api to password reset
		console.log(email);
	};

	const formSwitcher = (formType) => {
		setFormLoad(formType);
	};

	return (
		<div className="entry-page bg-info">
			<div className="jumbotron form-box">
				{formLoad === "login" && (
					<LoginForm
						handleOnChange={handleOnChange}
						email={email}
						password={password}
						handleOnSubmit={handleOnSubmit}
						formSwitcher={formSwitcher}
					/>
				)}

				{formLoad === "reset" && (
					<PasswordReset
						handleOnChange={handleOnChange}
						email={email}
						handlePasswordResetSubmit={handlePasswordResetSubmit}
						formSwitcher={formSwitcher}
					/>
				)}
			</div>
		</div>
	);
};

export default Entry;
