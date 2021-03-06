import React, { FunctionComponent } from "react";
import styles from "./Column.module.css";

const Column: FunctionComponent = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};

export default Column;
