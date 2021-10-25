import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import {About} from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import {Shop} from "./Pages/Shop/Shop";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import { Footer } from './component/Footer/Footer';
import { Cart } from './Pages/Cart/Cart';
import { Checkout } from './Pages/Checkout/Checkout';

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} /> 
      </Switch>
      <Footer />
        {/* </MuiThemeProvider> */}
    </Router>
  );
}

export default App;
