import React from "react";
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Login from "./components/login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {


  return (
    <div className="origin-div">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
