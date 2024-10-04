import useFetch from "./useFetch";
import { Filters, User } from "../types";
import { API_BASE_URL } from "../constants";
import { filterUsers, sortUsers } from "../helpers";

const useSearchUsers = (searchText: string, filters: Filters) => {
  const {
    isLoading,
    error,
    data,
  } = useFetch<User[]>(`${API_BASE_URL}/users`);

  if (data === null || error) {
    return { isLoading, filteredUsers:[], error };
  }

  if (!searchText.trim()) {
    return { isLoading, filteredUsers: data, error };
  }

  const filteredList = filterUsers(searchText, data);
  const sorted = sortUsers(filteredList, filters);

  return { isLoading, filteredUsers: sorted, error };
};

export default useSearchUsers;
