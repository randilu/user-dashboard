import { Filters } from "../../types";
import styles from "./styles.module.scss";

interface FiltersRowProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FiltersRow = ({ setFilters, filters }: FiltersRowProps) => {
  const initialFilters: Filters = {
    name: false,
    email: false,
    isDescending: filters.isDescending,
  };

  const toggleSortBy = <K extends keyof Filters>(field: K) => {
    setFilters({
      ...initialFilters,
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
          className={styles.filterButton}
          onClick={toggleSortOrder}
          disabled={!filters.name && !filters.email}
        >
          Sort {filters.isDescending ? "▼" : "▲"}
        </button>
      </div>
    </div>
  );
};

export default FiltersRow;
