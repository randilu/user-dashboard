import styles from "./styles.module.scss";

interface EmptyGridProps {
  hasSearchText: boolean;
}

function EmptyBanner({ hasSearchText }: EmptyGridProps) {
  return (
    <div className={styles.emptyBanner}>
      {hasSearchText ? (
        <p> No results found for your search</p>
      ) : (
        <p>No users to display</p>
      )}
    </div>
  );
}

export default EmptyBanner;
