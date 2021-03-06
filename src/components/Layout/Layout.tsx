import React, { FunctionComponent } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout;
