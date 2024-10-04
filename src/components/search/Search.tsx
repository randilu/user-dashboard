import React from "react";

import styles from "./styles.module.scss";

interface SearchProps {
  setSearchText: (text: string) => void;
}

const Search = ({ setSearchText }: SearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
