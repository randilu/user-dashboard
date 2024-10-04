import { useState } from "react";
import { Filters } from "../../types";
import UserGrid from "../userGrid";
import Search from "../search";
import FiltersRow from "../filtersRow";

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
      <div className={styles.topBar}>
        <Search setSearchText={setSearchText} />
        <FiltersRow setFilters={setFilters} filters={filters} />
      </div>
      <UserGrid searchText={searchText.trim()} filters={filters}/>
    </div>
  );
}

export default Dashboard;
