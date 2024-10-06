import { User } from "../../types";

import styles from "./styles.module.scss";

interface GridItemProps {
  user: User;
}

const GridItem = ({ user }: GridItemProps) => {
  const { name, email, phone, website, address } = user;
  return (
    <div className={styles.gridItem}>
      <div className={styles.card}>
        <p className={styles.label}>
          <b>{name}</b>
        </p>
        <div className={styles.divider}></div>
        <p className={styles.label}>
          <b>Email:</b> {email}
        </p>
        <p className={styles.label}>
          <b>Phone:</b> {phone}
        </p>
        <p className={styles.label}>
          <b>Website:</b> {website}
        </p>
        <p className={styles.label}>
          <b>Address:</b> {address.street}, {address.suite}, {address.city},{" "}
          {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default GridItem;
