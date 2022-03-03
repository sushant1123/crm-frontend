import React from "react";
import LoginForm from "../../components/login/Login";
// import PasswordReset from "../../components/password-reset/PasswordReset";
import "./entry.style.css";

const Entry = () => {
	// const [formLoad, setFormLoad] = useState("login");

	// const handlePasswordResetSubmit = (e) => {
	// 	e.preventDefault();
	// };

	// const formSwitcher = (formType) => {
	// 	setFormLoad(formType);
	// };

	return (
		<div className="entry-page bg-info">
			<div className="jumbotron form-box">
				<LoginForm />

				{/* {formLoad === "reset" && (
					<PasswordReset
						handlePasswordResetSubmit={handlePasswordResetSubmit}
						formSwitcher={formSwitcher}
					/>
				)} */}
			</div>
		</div>
	);
};

export default Entry;
