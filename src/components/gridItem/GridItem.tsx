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
          <strong>{name}</strong>
        </p>
        <div className={styles.divider}></div>
        <p className={styles.label}>Email: {email}</p>
        <p className={styles.label}>Phone: {phone}</p>
        <p className={styles.label}>Website: {website}</p>
        <p className={styles.label}>
          Address: {address.street}, {address.suite}, {address.city},{" "}
          {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default GridItem;
