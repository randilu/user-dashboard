import { Filters } from "../../types";
import Search from "../search";
import FiltersRow from "../filtersRow";

import styles from "./styles.module.scss";

interface FilterBarProps {
  setSearchText: (searchText: string) => void;
  setFilters: (filters: Filters) => void;
  filters: Filters;
}

function FilterBar({ setSearchText, setFilters, filters }: FilterBarProps) {
  return (
    <div className={styles.filterBar}>
      <Search setSearchText={setSearchText} />
      <FiltersRow setFilters={setFilters} filters={filters} />
    </div>
  );
}

export default FilterBar;
