import { createSlice } from "@reduxjs/toolkit";

const initialTicketState = {
	isLoading: false,
	tickets: [],
	searchTicketList: [],
	error: "",
};

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState: initialTicketState,
	reducers: {
		fetchTicketRequest: (state, action) => {
			state.isLoading = true;
		},
		fetchTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.tickets = action.payload;
			state.searchTicketList = action.payload;
		},
		fetchTicketFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		searchTickets: (state, action) => {
			state.searchTicketList = state.tickets.filter((ticket) => {
				if (!action.payload) return ticket;

				return ticket.subject.toLowerCase().includes(action.payload.toLowerCase());
			});
		},
	},
});

const { reducer, actions } = ticketListSlice;

export const { fetchTicketRequest, fetchTicketFailure, fetchTicketSuccess, searchTickets } = actions;

export default reducer;
