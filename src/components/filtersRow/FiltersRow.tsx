import { Filters } from "../../types";
import styles from "./styles.module.scss";

interface FiltersRowProps {
  isDisabled: boolean;
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FiltersRow = ({
  isDisabled,
  filters,
  setFilters,
}: FiltersRowProps) => {
  const initialFilters: Filters = {
    name: false,
    email: false,
    isDescending: filters.isDescending,
  };
  const isSortFilterDisabled =
    (!filters.name && !filters.email) || isDisabled;

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
          disabled={isDisabled}
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
          disabled={isDisabled}
        >
          Email
        </button>
        <button
          className={styles.filterButton}
          onClick={toggleSortOrder}
          disabled={isSortFilterDisabled}
        >
          Sort {filters.isDescending ? "▼" : "▲"}
        </button>
      </div>
    </div>
  );
};

export default FiltersRow;
