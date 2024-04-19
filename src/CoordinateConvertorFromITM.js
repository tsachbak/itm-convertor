import React, { useState } from "react";
import axios from "axios";
import styles from "./CoordinateConvertor.module.css";

const CoordinateConverterFromItm = () => {
  const [itmEast, setItmEast] = useState("");
  const [itmNorth, setItmNorth] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleConvert = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5087/api/ConvertFromITM/coordinates",
        {
          itmEast: parseInt(itmEast),
          itmNorth: parseInt(itmNorth),
        }
      );
      setLatitude(response.data.latitude);
      setLongitude(response.data.longitude);
    } catch (error) {
      console.error("Error converting coordinates:", error);
    }
  };

  return (
    <div className={styles.CoordinateConvertor}>
      <h2>ITM to Latitude - Longitude</h2>
      <div className={styles.inputGroup}>
        <label>ITM East:</label>
        <input
          type="text"
          value={itmEast}
          onChange={(e) => setItmEast(e.target.value)}
        />
        <label>ITM North:</label>
        <input
          type="text"
          value={itmNorth}
          onChange={(e) => setItmNorth(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        <label>Latitude:</label>
        <input type="text" value={latitude} readOnly />
        <label>Longitude:</label>
        <input type="text" value={longitude} readOnly />
      </div>
    </div>
  );
};

export default CoordinateConverterFromItm;
