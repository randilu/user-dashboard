import { Filters, User } from "../../types";
import GridItem from "../gridItem";
import Loader from "../loader";
import Error from "../error";
import EmptyBanner from "./EmptyBanner";
import useSearchUsers from "../../hooks/useSearchUsers";
import styles from "./styles.module.scss";

interface UserGridProps {
  searchText: string;
  filters: Filters;
}

const UserGrid = ({ searchText, filters }: UserGridProps) => {
  const {
    isLoading,
    error,
    filteredUsers: users,
  } = useSearchUsers(searchText, filters);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (users.length === 0) {
    return <EmptyBanner hasSearchText={!!searchText} />;
  }

  const userGrid = users.map((user: User) => (
    <GridItem key={user.id} user={user} />
  ));

  return <div className={styles.gridContainer}>{userGrid}</div>;
};

export default UserGrid;
