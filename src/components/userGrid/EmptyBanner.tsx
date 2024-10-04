import styles from "./styles.module.scss";

interface EmptyGridProps {
  searchText: string;
}

function EmptyBanner({ searchText }: EmptyGridProps) {
  return (
    <div className={styles.emptyBanner}>
        {searchText ? (
          <p> No results found for your search</p>
        ) : (
          <p>No users to display</p>
        )}
    </div>
  );
}

export default EmptyBanner;
