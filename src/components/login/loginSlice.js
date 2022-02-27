import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
	isLoading: false,
	isAuth: false,
	error: "",
};

const loginSlice = createSlice({
	name: "login",
	initialState: initialLoginState,
	reducers: {
		userLoginRequest: (state, action) => {
			state.isLoading = true;
		},
		userLoginSuccess: (state, action) => {
			state.isLoading = false;
			state.isAuth = true;
			state.error = "";
		},
		userLoginFailure: (state, action) => {
			state.isLoading = false;
			state.isAuth = false;
			state.error = action.payload;
		},
	},
});

const { reducer, actions } = loginSlice;

export const { userLoginRequest, userLoginFailure, userLoginSuccess } = actions;

export default reducer;
