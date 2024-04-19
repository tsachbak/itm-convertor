// FindOnMapPage

import React, { useState } from "react";
import GoogleMap from "./GoogleMap";

const FindOnMapPage = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [markerPosition, setmarkerPosition] = useState(null);

  const handleFindLocation = () => {
    setmarkerPosition({
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    });
  };

  return (
    <div>
      <h1>Find Location On Map</h1>
      <div>
        <label>Latitude:</label>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label>Longitude:</label>
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button onClick={handleFindLocation}>Find Location</button>
        <GoogleMap markerPosition={markerPosition} />
      </div>
    </div>
  );
};

export default FindOnMapPage;
