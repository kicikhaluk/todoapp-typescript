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
  variant: "primary" | "secondary" | "light";
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  clickHandler,
  full,
  size,
  variant = "secondary",
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${
        size ? styles["btn-" + size] : ""
      } ${full ? styles.btnFull : ""}`}
      onClick={clickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
