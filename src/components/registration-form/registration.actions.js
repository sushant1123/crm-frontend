import {
	userRegistrationFailure,
	userRegistrationSuccess,
	userRegistrationRequest,
} from "./userRegistrationSlice";

import { userRegistration } from "../../api/user.api";

export const newUserRegistration = (formData) => async (dispatch) => {
	try {
		dispatch(userRegistrationRequest());
		const result = await userRegistration(formData);
		// console.log(result);
		if (result.status === "success") {
			dispatch(userRegistrationSuccess(result.message));
		} else {
			dispatch(userRegistrationFailure(result.message));
		}
	} catch (error) {
		dispatch(userRegistrationFailure(error.message));
	}
};
