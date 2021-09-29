import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./Pages/Home/Home";
import {About} from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import {Shop} from "./Pages/Shop/Shop";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import { Footer } from './component/Footer';

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
      <Footer />
        {/* </MuiThemeProvider> */}
    </Router>
  );
}

export default App;
