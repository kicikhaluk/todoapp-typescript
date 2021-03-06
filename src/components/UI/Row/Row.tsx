import React, { FunctionComponent } from "react";
import styles from "./Row.module.css";

const Row: FunctionComponent = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
