import { useState } from "react";
import { Filters } from "../../types";
import UserGrid from "../userGrid";
import FilterBar from "../filterBar";

import styles from "./styles.module.scss";
import useSearchUsers from "../../hooks/useSearchUsers";

function Dashboard() {
  const [searchText, setSearchText] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    name: false,
    email: false,
    isDescending: false,
  });
  const {
    isLoading,
    error,
    filteredUsers: users,
  } = useSearchUsers(searchText, filters);

  const isFiltersDisabled =
    isLoading || !!error || !users || users.length === 0;

  return (
    <div className={styles.dashboardContainer} data-testid="dashboard">
      <FilterBar
        setSearchText={setSearchText}
        setFilters={setFilters}
        filters={filters}
        isFiltersDisabled={isFiltersDisabled}
      />
      <UserGrid
        isLoading={isLoading}
        error={error}
        users={users}
        searchText={searchText}
      />
    </div>
  );
}

export default Dashboard;
