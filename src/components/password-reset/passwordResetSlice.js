import { createSlice } from "@reduxjs/toolkit";

const initialPasswordResetState = {
	isLoading: false,
	status: "",
	message: "",
	showUpdatePassForm: false,
	email: "",
};

const passwordResetSlice = createSlice({
	name: "passwordReset",
	initialState: initialPasswordResetState,
	reducers: {
		resetPasswordOtpRequest: (state, action) => {
			state.isLoading = true;
		},
		resetPasswordOtpSuccess: (state, action) => {
			state.isLoading = false;
			state.status = "success";
			state.message = action.payload.message;
			state.email = action.payload.email;
			state.showUpdatePassForm = true;
		},
		updatePasswordSuccess: (state, action) => {
			state.isLoading = false;
			state.status = "success";
			state.message = action.payload.message;
			// state.showUpdatePassForm = true;
		},
		resetPasswordOtpFailure: (state, action) => {
			// console.log("from resetPasswordOtpFailure::slicer", action.payload);
			state.isLoading = false;
			state.status = "error";
			state.message = action.payload.message;
			// state.showUpdatePassForm = false;
		},
	},
});

const { reducer, actions } = passwordResetSlice;

export const {
	resetPasswordOtpRequest,
	resetPasswordOtpSuccess,
	resetPasswordOtpFailure,
	updatePasswordSuccess,
} = actions;
export default reducer;
