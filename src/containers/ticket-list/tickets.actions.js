import { fetchTicketRequest, fetchTicketSuccess, fetchTicketFailure, searchTickets } from "./ticketSlice";
import { getAllTickets } from "../../api/ticket.api";

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

export const filterSearchTickets = (str) => async (dispatch) => {
	try {
		dispatch(searchTickets(str));
	} catch (error) {
		const { message } = error;
		console.log(message);
	}
};
