//MainPage.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to MishConvertor</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.taskCard}>
          <h2>Convert Single Coordinate</h2>
          <p>Convert Latityde and Longitude to ITM East and ITM North</p>
          <Link to="/single-cord-convert">
            <button className={styles.taskButton}>Convert</button>
          </Link>
        </div>

        <div className={styles.taskCard}>
          <h2>Convert Coordinate from file</h2>
          <p>upload a file contain latitude and longitude coordinates</p>
          <Link to="/upload">
            <button className={styles.taskButton}>Upload File</button>
          </Link>
        </div>

        <div className={styles.taskCard}>
          <h2>Find On Map</h2>
          <p>Find a location on the map</p>
          <Link to="/find-on-map">
            <button className={styles.taskButton}>Go to Map</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
