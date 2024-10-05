import useFetch from "./useFetch";
import { Filters, User } from "../types";
import { API_BASE_URL } from "../constants";
import { filterUsers, sortUsers } from "../helpers";

const useSearchUsers = (searchText: string, filters: Filters) => {
  const {
    isLoading,
    error,
    data: users,
  } = useFetch<User[]>(`${API_BASE_URL}/users`);

  if (users === null || error) {
    return { isLoading, filteredUsers: [], error };
  }

  if (!searchText) {
    return {
      isLoading,
      filteredUsers: sortUsers([...users], filters),
      error,
    };
  }

  const filteredList = filterUsers(searchText, [...users]);
  const sorted = sortUsers(filteredList, filters);

  return { isLoading, filteredUsers: sorted, error };
};

export default useSearchUsers;
