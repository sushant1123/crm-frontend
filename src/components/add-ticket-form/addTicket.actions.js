import { addNewTicketFailure, addNewTicketRequest, addNewTicketSuccess } from "./addTicketSlice";
import { createNewTicketAPI } from "../../api/ticket.api";

export const addNewTicket = (formData) => async (dispatch) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(addNewTicketRequest());
			//api call
			const result = await createNewTicketAPI(formData);

			// console.log(result);

			if (result.status === "error") {
				return dispatch(addNewTicketFailure(result.message));
			}
			dispatch(addNewTicketSuccess(result.message));
		} catch (error) {
			console.log(error);
			dispatch(addNewTicketFailure(error.message));
		}
	});
};
