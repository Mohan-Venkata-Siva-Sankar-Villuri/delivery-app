import React from "react";

function ShipmentList() {
  // Fetch and display shipments assigned to the delivery partner using API integration
  const assignedShipments = [
    { id: 1, destination: "Address 3", status: "In Progress" },
    { id: 2, destination: "Address 4", status: "Assigned" },
  ];

  return (
    <div>
      <h3>Assigned Shipments</h3>
      <ul>
        {assignedShipments.map((shipment) => (
          <li key={shipment.id}>
            {shipment.destination} - {shipment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShipmentList;
