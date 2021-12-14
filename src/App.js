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
import CartDetail from './Pages/CartDetail/Detail';
import Login from './component/Profile/Login';
import Register from './component/Register/Register';

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
        <Route path="/cartdetail" component={CartDetail} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/register" component={Register} /> 
      </Switch>
      <Footer />
        {/* </MuiThemeProvider> */}
    </Router>
  );
}

export default App;
