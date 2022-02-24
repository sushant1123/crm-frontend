import "./App.css";
// import Entry from "./containers/entry/Entry";
import DefaultLayout from "./layout/DefaultLayout";
import AddTicket from "./containers/add-new-ticket/AddTicket";
import Dashboard from "./containers/dashboard/Dashboard";
import TicketList from "./containers/ticket-list/TicketList";

function App() {
	return (
		<div className="App">
			<DefaultLayout>
				{/* <Dashboard /> */}
				{/* <AddTicket /> */}
				<TicketList />
			</DefaultLayout>
		</div>
	);
}

export default App;
