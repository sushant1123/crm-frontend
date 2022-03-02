import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../containers/ticket-list/ticketSlice";
import loginReducer from "../components/login/loginSlice";
import userReducer from "../containers/dashboard/userSlice";
import addNewTicketReducer from "../components/add-ticket-form/addTicketSlice";
import registrationReducer from "../components/registration-form/userRegistrationSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		newTicket: addNewTicketReducer,
		registration: registrationReducer,
	},
});

export default store;
