import React from "react";
import { Navigate } from "react-router-dom";

const isAuth = true;
const PrivateRoute = ({ component, ...rest }) => {
	return isAuth ? component : <Navigate to="/" />;
};

export default PrivateRoute;
