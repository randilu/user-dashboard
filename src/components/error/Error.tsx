import styles from "./styles.module.scss";

function Error() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <p className={styles.errorLabel}>
          Something went wrong. Please refresh the page and try again.
        </p>
      </div>
    </div>
  );
}

export default Error;
