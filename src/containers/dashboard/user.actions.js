import { fetchUser } from "../../api/user.api";
import { getUserFailure, getUserRequest, getUserSuccess } from "./userSlice";

export const getUserProfile = (user) => async (dispatch) => {
	try {
		dispatch(getUserRequest());

		const result = await fetchUser();
		// console.log(result);
		if (result.user && result.user._id) {
			return dispatch(getUserSuccess(result.user));
		}

		dispatch(getUserFailure("User is not found"));
	} catch (error) {
		console.log(error);
		dispatch(getUserFailure(error.message));
	}
};
