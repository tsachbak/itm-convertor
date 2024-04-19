// CordinateConversionPage

import React from "react";
import CoordinateConverterToItm from "./CoordinateConvertorToITM";
import CoordinateConverterFromItm from "./CoordinateConvertorFromITM";
import styles from "./CoordinateConversionPage.module.css";

const CoordinateConversionPage = () => {
  return (
    <div className={styles.title}>
      <h1>Coordinate Conversion</h1>
      <div className={styles.row}>
        <CoordinateConverterToItm />
        <CoordinateConverterFromItm />
      </div>
    </div>
  );
};

export default CoordinateConversionPage;
