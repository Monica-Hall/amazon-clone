import {React} from "react";
import './App.css';
import Header from "./components/Header/Header"; 
import Home from "./components/Home/Home"; 
import Checkout from "./components/Checkout/Checkout"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

        <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
