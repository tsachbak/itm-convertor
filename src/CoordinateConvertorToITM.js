import React, { useState } from "react";
import axios from "axios";
import styles from "./CoordinateConvertor.module.css";

const CoordinateConverterToItm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [itmEast, setItmEast] = useState("");
  const [itmNorth, setItmNorth] = useState("");

  const handleConvert = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5087/api/ConvertToITM/coordinates",
        {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        }
      );
      setItmEast(response.data.itmEast);
      setItmNorth(response.data.itmNorth);
    } catch (error) {
      console.error("Error converting coordinates:", error);
    }
  };

  return (
    <div className={styles.CoordinateConvertor}>
      <h2>Latitude - Longitude to ITM</h2>
      <div className={styles.inputGroup}>
        <label>Latitude:</label>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label>Longitude</label>
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        <label>ITM East:</label>
        <input type="text" value={itmEast} readOnly />
        <label>ITM North</label>
        <input type="text" value={itmNorth} readOnly />
      </div>
    </div>
  );
};

export default CoordinateConverterToItm;
