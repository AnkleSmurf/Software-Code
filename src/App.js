import React, { useContext } from "react";
import Header from "./components/header"
import Welcome from "./components/Welcome"
import Login from "./components/login"
import Signup from "./components/Signup"
import Dashboard from "./components/dashboard"
import {AppContext} from "./components/lib/contextLib"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// asdfgdhfgj

const App = () => {

  const { isAuthenticated } = useContext(AppContext);

  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Welcome></Welcome>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
