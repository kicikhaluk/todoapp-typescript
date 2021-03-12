import { FunctionComponent } from "react";
import styles from "./UserProfile.module.css";

interface UserProfileProps {
  name: string | undefined;
}

const UserProfile: FunctionComponent<UserProfileProps> = ({ name }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>{name?.charAt(0)}</div>
      <div className={styles.user}>{name && name}</div>
    </div>
  );
};

export default UserProfile;
