import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./pages/About";
import Programming from "./pages/Programming";
import Blog from "./pages/Blog";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch >
        <div className="App-body">
        <Route 
          exact 
          path="/" 
          render={(props) => <Programming {...props} />} />
        
        <Route 
          exact 
          path="/programming" 
          render={(props) => <Programming {...props} />} />

        <Route
          exact
          path="/about"
          render={(props) => <About {...props} />}

        />
        <Route
          exact
          path="/blogs"
          render={(props) => <Blog {...props} />}
        />
        </div>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
