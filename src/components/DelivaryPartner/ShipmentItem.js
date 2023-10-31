import React, { useState } from "react";

function ShipmentStatus() {
  const [status, setStatus] = useState("In Progress");

  const handleUpdateStatus = () => {
    // Add code for updating the shipment status using API
  };

  return (
    <div>
      <h3>Update Shipment Status</h3>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="In Progress">In Progress</option>
        <option value="Delivered">Delivered</option>
      </select>
      <button onClick={handleUpdateStatus}>Update Status</button>
    </div>
  );
}

export default ShipmentStatus;
