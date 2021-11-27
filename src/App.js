import "./App.css";
import Header from "./Header";
import Home from "./Home";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Jp9tkSHSCHWkQTbWKAnppkW8nwHjowMqPbjtyQra1glP6E0XbXqt4yyozxq0Hshi6FEsosSFGbdZ8PuKvt99Jue00GPPaR4vF"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in/the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment" element={<Payment1 />} />
          <Route path="/login" element={<Login1 />} />

          <Route path="/checkout" element={<Checkout1 />} />

          <Route path="/" element={<Home1 />} />
        </Switch>
      </div>
    </Router>
  );
}
function Payment1() {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </>
  );
}
function Login1() {
  return (
    <>
      <Login />
    </>
  );
}
function Checkout1() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}
function Home1() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
