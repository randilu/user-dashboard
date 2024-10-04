import React from "react";

import styles from "./styles.module.scss";

interface SearchInputProps {
  setSearchText: (text: string) => void;
}

const SearchInput = ({ setSearchText }: SearchInputProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.trim());
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

export default SearchInput;
