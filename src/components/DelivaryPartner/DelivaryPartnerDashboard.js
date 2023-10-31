import React from "react";
import ShipmentList from "./ShipmentList";
import ShipmentStatus from "./ShipmentStatus";

function DeliveryPartnerDashboard() {
  return (
    <div>
      <h2>Delivery Partner Dashboard</h2>
      <ShipmentList />
      <ShipmentStatus />
    </div>
  );
}

export default DeliveryPartnerDashboard;
