import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <Router >
        <MuiThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
        </MuiThemeProvider>
    </Router>
  );
}

export default App;
