import { Filters, User } from "../../types";
import GridItem from "../gridItem";
import styles from "./styles.module.scss";
import useFetch from "../../hooks/useFetch";
import { API_BASE_URL } from "../../constants";
import { filterUsers, sortUsers } from "../../helpers";
import Loader from "../loader";
import Error from "../error";
import EmptyBanner from "./EmptyBanner";

interface UserGridProps {
  searchText: string;
  filters: Filters;
}

const UserGrid = ({ searchText, filters }: UserGridProps) => {
  let userList;
  const {
    isLoading,
    error,
    data: users,
  } = useFetch<User[]>(`${API_BASE_URL}/users`);

  if (isLoading) {
    return <Loader />;
  }

  if (users === null || error) {
    return <Error />;
  }

  if (users.length === 0) {
    return <EmptyBanner searchText={searchText} />;
  }

  if (!searchText.trim()) {
    userList = users;
  }

  userList = filterUsers(searchText, users);

  const userGrid =
    userList.length === 0 ? (
      <EmptyBanner searchText={searchText} />
    ) : (
      sortUsers(userList, filters).map((user: User) => (
        <GridItem key={user.id} user={user} />
      ))
    );

  return (
    <div>
      <div className={styles.gridContainer}>{userGrid}</div>
    </div>
  );
};

export default UserGrid;
