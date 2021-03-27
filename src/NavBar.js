import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import "./Stylesheet.css";

function NavBar() {
  return (
    <Router>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column nav-list">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        
      </div>
    </Router>
  );
}
export default NavBar;
