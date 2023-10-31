import React from "react";

function Shipments() {
  // Fetch and display customer's shipments using API integration
  const shipments = [
    { id: 1, destination: "Address 1", status: "In Progress" },
    { id: 2, destination: "Address 2", status: "Delivered" },
  ];

  return (
    <div>
      <h3>Shipments</h3>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.id}>
            {shipment.destination} - {shipment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shipments;
