// index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      {/* Define more routes here */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
