import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  MouseEvent,
} from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler?: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  props?: any;
  full?: boolean;
  size?: "sm" | "m" | "l" | "xl";
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  clickHandler,
  full,
  size,
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${size ? styles["btn-" + size] : ""} ${
        full ? styles.btnFull : ""
      }`}
      onClick={clickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
