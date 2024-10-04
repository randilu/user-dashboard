import { useState } from "react";
import { Filters } from "../../types";
import UserGrid from "../userGrid";
import FilterBar from "../filterBar";

import styles from "./styles.module.scss";

function Dashboard() {
  const [searchText, setSearchText] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    name: false,
    email: false,
    isDescending: false,
  });

  return (
    <div className={styles.dashboardContainer}>
      <FilterBar
        setSearchText={setSearchText}
        setFilters={setFilters}
        filters={filters}
      />
      <UserGrid searchText={searchText.trim()} filters={filters} />
    </div>
  );
}

export default Dashboard;
