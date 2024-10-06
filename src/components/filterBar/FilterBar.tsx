import { Filters } from "../../types";
import Search from "../searchInput";
import FiltersRow from "../filtersRow";

import styles from "./styles.module.scss";

interface FilterBarProps {
  setSearchText: (searchText: string) => void;
  setFilters: (filters: Filters) => void;
  filters: Filters;
  isFiltersDisabled: boolean;
}

function FilterBar({
  setSearchText,
  setFilters,
  filters,
  isFiltersDisabled,
}: FilterBarProps) {
  return (
    <div className={styles.filterBar}>
      <Search setSearchText={setSearchText} />
      <FiltersRow
        setFilters={setFilters}
        filters={filters}
        isDisabled={isFiltersDisabled}
      />
    </div>
  );
}

export default FilterBar;
