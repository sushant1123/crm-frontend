import { fetchTicketRequest, fetchTicketSuccess, fetchTicketFailure, searchTickets } from "./ticketSlice";
import axios from "../../helpers/axios";
//is higher order fn. (fn inside another fn)
// is like writing fetchAllTickets =()=> {
//   return async (dispatch)=>{}
// }

export const fetchAllTickets = () => async (dispatch) => {
	try {
		dispatch(fetchTicketRequest());
		const result = await axios.get("/ticket");
		console.log(result);

		dispatch(fetchTicketSuccess(result.data.result));
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
