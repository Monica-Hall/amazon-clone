import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header/Header"; 
import Home from "./components/Home/Home"; 
import Login from "./components/Authentication/Login"; 
import Checkout from "./components/Checkout/Checkout"; 
import Payment from "./components/Payment/Payment"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import {auth} from "./firebase"; 
import {useStateValue} from "./ducks/reducer/StateProvider"; 

function App() {

  const [{}, dispatch] = useStateValue(); 

  // - LISTENER
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: "SET_USER", 
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER", 
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Header />  
            <Home />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
