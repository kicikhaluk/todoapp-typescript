import React from "react";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import UserProfile from "./UserProfile/UserProfile";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <UserProfile />
      <ul className={styles.categories}>
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
      </ul>
    </nav>
  );
};

export default Navigation;
