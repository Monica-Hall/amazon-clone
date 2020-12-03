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
        
        {/* RENDERS AT ALL TIMES */}
        <Header />

        <Switch>

        <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
