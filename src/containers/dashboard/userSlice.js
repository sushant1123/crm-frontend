import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
	isLoading: false,
	user: {},
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState: initialUserState,
	reducers: {
		getUserRequest: (state, action) => {
			state.isLoading = true;
		},
		getUserSuccess: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.error = "";
		},
		getUserFailure: (state, action) => {
			state.isLoading = false;
			state.user = {};
			state.error = action.payload;
		},
	},
});

const { reducer, actions } = userSlice;

export const { getUserFailure, getUserRequest, getUserSuccess } = actions;

export default reducer;
