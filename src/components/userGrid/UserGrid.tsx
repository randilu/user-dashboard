import { useEffect, useState } from "react";
import { User } from "../../types";
import GridItem from "../gridItem";
import styles from "./styles.module.scss";

interface UserGridProps {
  searchText: string;
  filters: Filters;
}

const UserGrid = ({ searchText, filters }: UserGridProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch users");
        }
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  if (error) {
    return "Error";
  }

  if (users.length === 0) {
    return "Loading...";
  }

  let userList;

  if (!searchText) {
    userList = users;
  }

  const searchTextLowerCase = searchText.toLowerCase();

  const filteredUsers = users.filter((user) => {
    const {
      name,
      email,
      phone,
      website,
      address: { street, suite, city, zipcode },
    } = user;

    const fieldsToSearch = [
      name,
      email,
      phone,
      website,
      street,
      suite,
      city,
      zipcode,
    ];

    return fieldsToSearch.some(
      (field) => field && field.toLowerCase().includes(searchTextLowerCase)
    );
  });

  userList = filteredUsers;

  if (filters.name) {
    userList.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filters.email) {
    userList.sort((a, b) => a.email.localeCompare(b.email));
  }

  if (filters.isDescending) {
    userList.reverse();
  }

  const userGrid =
    userList.length === 0 ? (
      <div>No users found</div>
    ) : (
      userList.map((user: User) => <GridItem key={user.id} user={user} />)
    );

  return (
    <div className="container">
      <div className={styles.gridContainer}>{userGrid}</div>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default UserGrid;
