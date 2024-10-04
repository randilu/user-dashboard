import { Filters, User } from "../types";

export function filterUsers(searchText: string, users: User[]) {
  const searchTextLowerCase = searchText.trim().toLowerCase();

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

  return filteredUsers;
}

export const sortUsers = (users: User[], filters: Filters) => {
  if (filters.name) {
    users.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filters.email) {
    users.sort((a, b) => a.email.localeCompare(b.email));
  }

  if (filters.isDescending) {
    users.reverse();
  }

  return users;
};
