import React, { FunctionComponent } from "react";
import Button from "../UI/Button/Button";
import styles from "./Card.module.css";

interface CardProps {
  type?: "default" | "overlay";
}

const Card: FunctionComponent<CardProps> = ({ children, type = "overlay" }) => {
  return (
    <div
      className={`${styles.card} ${type === "default" ? styles.default : ""}`}
    >
      {children}
      {type === "overlay" ? (
        <div className={styles.overlay}>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
