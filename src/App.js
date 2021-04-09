import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/user/User";
import GitHubState from "./context/github/GitHubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;
