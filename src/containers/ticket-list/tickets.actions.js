import {
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
} from "./ticketSlice";

import {
	getAllTickets,
	getSingleTicket,
	updateReplyTicket,
	updateTicketStatusToClose,
} from "../../api/ticket.api";

//is higher order fn. (fn inside another fn)
// is like writing fetchAllTickets =()=> {
//   return async (dispatch)=>{}
// }
export const fetchAllTickets = () => async (dispatch) => {
	try {
		dispatch(fetchTicketRequest());

		const result = await getAllTickets();

		if (result && result.result.length) {
			dispatch(fetchTicketSuccess(result.result));
		}
	} catch (error) {
		const { message } = error;
		dispatch(fetchTicketFailure(message));
	}
};

//for single ticket by id
export const fetchSingleTicket = (_id) => async (dispatch) => {
	try {
		dispatch(fetchSingleTicketRequest());
		const result = await getSingleTicket(_id);
		if (result && result.data.result) {
			dispatch(fetchSingleTicketSuccess(result.data.result));
		}
	} catch (error) {
		const { message } = error;
		dispatch(fetchSingleTicketFailure(message));
	}
};

//update the conversations of the single ticket
export const replyOnTicket = (_id, messageObj) => async (dispatch) => {
	try {
		dispatch(replyTicketRequest());

		const result = await updateReplyTicket(_id, messageObj);
		console.log("replyOnTicket", result);

		if (result.status === "error") {
			return dispatch(replyTicketFailure(result.message));
		}

		dispatch(replyTicketSuccess(result.message));
		dispatch(fetchSingleTicket(_id));
	} catch (error) {
		const { message } = error;
		dispatch(replyTicketFailure(message));
	}
};

//close the status of the ticket
export const closeTicket = (_id) => async (dispatch) => {
	try {
		dispatch(closeTicketRequest());
		const result = await updateTicketStatusToClose(_id);
		console.log(result);
		if (result.status === "error") {
			return dispatch(closeTicketFailure(result.message));
		}

		dispatch(closeTicketSuccess(result.message));
		dispatch(fetchSingleTicket(_id));
	} catch (error) {
		const { message } = error;
		dispatch(closeTicketFailure(message));
	}
};

export const filterSearchTickets = (str) => async (dispatch) => {
	try {
		dispatch(searchTickets(str));
	} catch (error) {
		const { message } = error;
		console.log(message);
	}
};
