import styles from "./styles.module.scss";

function Loader () {
  return <div className={styles.loader} data-testid="loader"></div>;
};

export default Loader;
