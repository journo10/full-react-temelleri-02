import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Navbar from "./components/Navbar";

// pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";


function App() {
	return (
		<Router>
			<Navbar/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/users" component={Users} />
					<Route path="*" component={Error404} />
				</Switch>
			
		</Router>
	);
}

export default App;
