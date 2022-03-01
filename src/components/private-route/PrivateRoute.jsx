import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSuccess } from "../login/loginSlice";
import { getUserProfile } from "../../containers/dashboard/user.actions";
import { fetchNewAccessToken } from "../../api/user.api";

const PrivateRoute = ({ component, ...rest }) => {
	const { isAuth } = useSelector((state) => state.login);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		const updateAccessToken = async () => {
			const result = await fetchNewAccessToken();
			result && dispatch(userLoginSuccess());
		};

		if (!user._id) {
			dispatch(getUserProfile());
		}

		if (!sessionStorage.getItem("accessToken") && localStorage.getItem("crmSite")) {
			updateAccessToken();
		}

		if (!isAuth && sessionStorage.getItem("accessToken")) {
			dispatch(userLoginSuccess());
		}
	}, [dispatch, isAuth, user._id]);

	return isAuth ? component : <Navigate to="/" />;
};

export default PrivateRoute;
