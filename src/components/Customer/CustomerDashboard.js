import React from "react";
import Shipments from "./Shipments";
import ShipmentForm from "./ShipmentForm";

function CustomerDashboard() {
  return (
    <div>
      <h2>Customer Dashboard</h2>
      <ShipmentForm />
      <Shipments />
    </div>
  );
}

export default CustomerDashboard;
