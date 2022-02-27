import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../containers/ticket-list/ticketSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
	},
});

export default store;
