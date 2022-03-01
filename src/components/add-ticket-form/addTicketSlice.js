import { createSlice } from "@reduxjs/toolkit";

const initialNewTicketState = {
	isLoading: false,
	error: "",
	successMsg: "",
};

const addTicketSlice = createSlice({
	name: "newTicket",
	initialState: initialNewTicketState,
	reducers: {
		addNewTicketRequest: (state, action) => {
			state.isLoading = true;
		},
		addNewTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.successMsg = action.payload;
			state.error = "";
		},
		addNewTicketFailure: (state, action) => {
			state.isLoading = false;
			state.successMsg = "";
			state.error = action.payload;
		},
		resetSuccessMsg: (state, action) => {
			state.isLoading = false;
			state.successMsg = "";
			state.error = "";
		},
	},
});

const { reducer, actions } = addTicketSlice;

export const { addNewTicketFailure, addNewTicketRequest, addNewTicketSuccess, resetSuccessMsg } = actions;

export default reducer;
