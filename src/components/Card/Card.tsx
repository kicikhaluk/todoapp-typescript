import { FunctionComponent } from "react";
import styles from "./Card.module.css";

interface CardProps {
  type?: "flex" | "default";
}

const Card: FunctionComponent<CardProps> = ({ children, type = "default" }) => {
  return (
    <div className={`${styles.card} ${type === "flex" ? styles.flex : ""}`}>
      {children}
    </div>
  );
};

export default Card;
