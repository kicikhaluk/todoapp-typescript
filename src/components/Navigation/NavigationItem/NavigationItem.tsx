import React from "react";
import styles from "./NavigationItem.module.css";
const NavigationItem = () => {
  return (
    <li>
      <label className={styles.category}>
        <input type="checkbox" name="" id="" />
        Category
      </label>
    </li>
  );
};

export default NavigationItem;
