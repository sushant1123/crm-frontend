import { createSlice } from "@reduxjs/toolkit";

const initialTicketState = {
	isLoading: false,
	tickets: [],
	searchTicketList: [],
	selectedTicket: {},
	replyMsg: "",
	replyTicketError: "",
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
		fetchSingleTicketRequest: (state, action) => {
			state.isLoading = true;
		},
		fetchSingleTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.selectedTicket = action.payload;
			state.error = "";
		},
		fetchSingleTicketFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		replyTicketRequest: (state, action) => {
			state.isLoading = true;
		},
		replyTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.replyMsg = action.payload;
			state.replyTicketError = "";
		},
		replyTicketFailure: (state, action) => {
			state.isLoading = false;
			state.replyTicketError = action.payload;
		},

		closeTicketRequest: (state, action) => {
			state.isLoading = true;
		},
		closeTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.replyMsg = action.payload;
			state.error = "";
		},
		closeTicketFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

const { reducer, actions } = ticketListSlice;

export const {
	fetchTicketRequest,
	fetchTicketFailure,
	fetchTicketSuccess,
	searchTickets,
	fetchSingleTicketFailure,
	fetchSingleTicketRequest,
	fetchSingleTicketSuccess,
	replyTicketRequest,
	replyTicketSuccess,
	replyTicketFailure,
	closeTicketRequest,
	closeTicketSuccess,
	closeTicketFailure,
} = actions;

export default reducer;
