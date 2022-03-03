import {
	resetPasswordOtpRequest,
	resetPasswordOtpSuccess,
	resetPasswordOtpFailure,
	updatePasswordSuccess,
} from "./passwordResetSlice";

import { requestPasswordResetOtp, updateUserPassword } from "../../api/password.api";

export const sendPasswordResetOtp = (email) => async (dispatch) => {
	try {
		dispatch(resetPasswordOtpRequest());

		const result = await requestPasswordResetOtp(email);
		// console.log(result);

		if (result.status === "success") {
			return dispatch(resetPasswordOtpSuccess({ message: result.message, email }));
		}
		dispatch(resetPasswordOtpFailure(result.message));
	} catch (error) {
		dispatch(resetPasswordOtpFailure({ status: "error", message: error.message }));
	}
};

export const updatePassword = (formData) => async (dispatch) => {
	try {
		dispatch(resetPasswordOtpRequest());

		const result = await updateUserPassword(formData);
		// console.log(result);

		if (result.status === "success") {
			return dispatch(updatePasswordSuccess({ message: result.message }));
		}
		dispatch(resetPasswordOtpFailure({ message: result.message }));
	} catch (error) {
		console.log(error);
		dispatch(resetPasswordOtpFailure({ status: "error", message: error.message }));
	}
};
