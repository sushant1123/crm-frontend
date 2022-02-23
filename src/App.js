import "./App.css";
// import Entry from "./containers/entry/Entry";
import DefaultLayout from "./layout/DefaultLayout";

function App(props) {
	return (
		<div className="App">
			<DefaultLayout>{props.chidren}</DefaultLayout>
			{/* <Entry /> */}
		</div>
	);
}

export default App;
