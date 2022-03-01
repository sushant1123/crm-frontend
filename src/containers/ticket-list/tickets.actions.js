import {
	fetchTicketRequest,
	fetchTicketFailure,
	fetchTicketSuccess,
	searchTickets,
	fetchSingleTicketFailure,
	fetchSingleTicketRequest,
	fetchSingleTicketSuccess,
} from "./ticketSlice";
import { getAllTickets, getSingleTicket } from "../../api/ticket.api";

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
		console.log(result);
		if (result && result.data.result) {
			dispatch(fetchSingleTicketSuccess(result.data.result));
		}
	} catch (error) {
		const { message } = error;
		dispatch(fetchSingleTicketFailure(message));
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
