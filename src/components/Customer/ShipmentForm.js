import React, { useState } from "react";

function ShipmentForm() {
  const [destination, setDestination] = useState("");

  const handleCreateShipment = () => {
    // Add code for creating a shipment using API
  };

  return (
    <div>
      <h3>Create Shipment</h3>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleCreateShipment}>Create Shipment</button>
    </div>
  );
}

export default ShipmentForm;
