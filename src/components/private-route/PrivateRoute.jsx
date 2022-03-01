import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSuccess } from "../login/loginSlice";
import { fetchNewAccessToken } from "../../api/user.api";

const PrivateRoute = ({ component, ...rest }) => {
	const { isAuth } = useSelector((state) => state.login);
	const dispatch = useDispatch();

	useEffect(() => {
		const updateAccessToken = async () => {
			const result = await fetchNewAccessToken();
			result && dispatch(userLoginSuccess());
		};

		if (!sessionStorage.getItem("accessToken") && localStorage.getItem("crmSite")) {
			updateAccessToken();
		}

		if (!isAuth && sessionStorage.getItem("accessToken")) {
			dispatch(userLoginSuccess());
		}
	}, [dispatch, isAuth]);

	return isAuth ? component : <Navigate to="/" />;
};

export default PrivateRoute;
