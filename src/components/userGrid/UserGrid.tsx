import { User } from "../../types";
import GridItem from "../gridItem";
import Loader from "../loader";
import Error from "../error";
import EmptyBanner from "./EmptyBanner";
import styles from "./styles.module.scss";

interface UserGridProps {
  isLoading: boolean;
  error: Error | null;
  users: User[];
  searchText: string;
}

const UserGrid = ({ isLoading, error, users, searchText }: UserGridProps) => {
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
