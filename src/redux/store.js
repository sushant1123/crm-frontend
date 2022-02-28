import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../containers/ticket-list/ticketSlice";
import loginReducer from "../components/login/loginSlice";
import userReducer from "../containers/dashboard/userSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
	},
});

export default store;
