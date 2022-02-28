import axios from "../../helpers/axios";
import { getUserFailure, getUserRequest, getUserSuccess } from "./userSlice";

export const getUserProfile = (user) => async (dispatch) => {
	try {
		dispatch(getUserRequest());

		const accessToken = sessionStorage.getItem("accessToken");
		if (!accessToken) {
			dispatch(getUserFailure("Token not found.."));
		}

		const result = await axios.get("/user", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		if (result.data.user && result.data.user._id) {
			dispatch(getUserSuccess(result.data.user));
		}
	} catch (error) {
		console.log(error);
		dispatch(getUserFailure(error.message));
	}
};
