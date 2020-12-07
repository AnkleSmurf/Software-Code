import React from "react";
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Login from "./components/login"
import Signup from "./components/Signup"
import Dashboard from "./components/dashboard"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

const App = () => {


  return (
    <div className="container">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Welcome></Welcome>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
