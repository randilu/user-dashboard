import { Filters } from "../../types";
import styles from "./styles.module.scss";

interface FiltersRowProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FiltersRow = ({ setFilters, filters }: FiltersRowProps) => {
  const toggleSortBy = <K extends keyof Filters>(field: K) => {
    setFilters({
      ...filters,
      [field]: !filters[field],
    });
  };

  const toggleSortOrder = () => {
    setFilters({
      ...filters,
      isDescending: !filters.isDescending,
    });
  };

  return (
    <div>
      <div className={styles.filters}>
        <button
          className={
            filters.name
              ? `${styles.filterButton} ${styles.selected}`
              : styles.filterButton
          }
          onClick={() => toggleSortBy("name")}
        >
          Name
        </button>
        <button
          className={
            filters.email
              ? `${styles.filterButton} ${styles.selected}`
              : styles.filterButton
          }
          onClick={() => toggleSortBy("email")}
        >
          Email
        </button>
        <button
          className={
            filters.isDescending
              ? `${styles.filterButton} ${styles.selected}`
              : styles.filterButton
          }
          name="sort"
          onClick={toggleSortOrder}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default FiltersRow;
