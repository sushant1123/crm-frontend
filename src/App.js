import "./App.css";
import Entry from "./containers/entry/Entry";
import DefaultLayout from "./layout/DefaultLayout";
import AddTicket from "./containers/add-new-ticket/AddTicket";
import Dashboard from "./containers/dashboard/Dashboard";
import TicketList from "./containers/ticket-list/TicketList";
import TicketDetails from "./containers/ticket-details/TicketDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Entry />} />

					{/* way 1 */}
					{/* <DefaultLayout>
					<Routes>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/add-ticket" element={<AddTicket />} />
						<Route path="/tickets" element={<TicketList />} />
						<Route path="/ticket/:id" element={<TicketDetails />} />
					</Routes>
				</DefaultLayout> */}

					{/* way 2 */}
					{/* <Route element={<DefaultLayout />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/add-ticket" element={<AddTicket />} />
						<Route path="/tickets" element={<TicketList />} />
						<Route path="/ticket/:id" element={<TicketDetails />} />
					</Route> */}

					{/* ********* */}
					{/* Very Important */}
					{/* The nested element tree won't happen automatically. <Routes> will render the first match's element for you (In our case that's <DefaultLayout />). The next match's element is {props.children}. In order to render that, DefaultLayout needs to render an outlet. */}

					<Route element={<DefaultLayout />}>
						<Route path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
						<Route path="/add-ticket" element={<PrivateRoute component={<AddTicket />} />} />
						<Route path="/tickets" element={<PrivateRoute component={<TicketList />} />} />
						<Route path="/ticket/:tId" element={<PrivateRoute component={<TicketDetails />} />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
