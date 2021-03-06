import React from "react";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>HFK</div>
      <div className={styles.user}>Haluk Furkan Kıcık</div>
    </div>
  );
};

export default UserProfile;
