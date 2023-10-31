import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import DeliveryPartnerDashboard from "./components/DeliveryPartner/DeliveryPartnerDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Public routes for authentication */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {/* Protected routes for customers and delivery partners */}
          <Route path="/customer" component={CustomerDashboard} />
          <Route
            path="/delivery-partner"
            component={DeliveryPartnerDashboard}
          />

          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
