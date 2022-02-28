import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSuccess } from "../login/loginSlice";

const PrivateRoute = ({ component, ...rest }) => {
	const { isAuth } = useSelector((state) => state.login);
	const dispatch = useDispatch();

	useEffect(() => {
		if (sessionStorage.getItem("accessToken")) {
			dispatch(userLoginSuccess());
		}
	}, [dispatch]);

	return isAuth ? component : <Navigate to="/" />;
};

export default PrivateRoute;
