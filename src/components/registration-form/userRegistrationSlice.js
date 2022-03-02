import { createSlice } from "@reduxjs/toolkit";

const initialRegistrationState = {
	isLoading: false,
	status: "",
	message: "",
};

const userRegistrationSlice = createSlice({
	name: "userRegistration",
	initialState: initialRegistrationState,
	reducers: {
		userRegistrationRequest: (state, action) => {
			state.isLoading = true;
			// state.status = "";
			// state.message = "";
		},
		userRegistrationSuccess: (state, action) => {
			state.isLoading = false;
			state.status = "success";
			state.message = action.payload;
		},
		userRegistrationFailure: (state, action) => {
			state.isLoading = false;
			state.status = "error";
			state.message = action.payload;
		},

		// resetRegistrationMsgs: (state, action) => {
		// 	state.isLoading = false;
		// 	state.status = "";
		// 	state.message = "";
		// },
	},
});

const { reducer, actions } = userRegistrationSlice;

export const {
	userRegistrationFailure,
	userRegistrationSuccess,
	userRegistrationRequest,
	// resetRegistrationMsgs,
} = actions;

export default reducer;
