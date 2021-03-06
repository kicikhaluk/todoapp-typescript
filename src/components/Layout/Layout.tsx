import React, { FunctionComponent } from "react";
import Navigation from "../Navigation/Navigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
