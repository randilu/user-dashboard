import { useEffect, useState } from "react";
import { User } from "../../types";
import GridItem from "../gridItem";
import styles from "./styles.module.scss";

const UserGrid = ({ searchText }: { searchText: string }) => {
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
