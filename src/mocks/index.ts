import { User } from "../types";

export const mockUser: User = {
  id: 1,
  name: "testUser",
  email: "test.user@example.com",
  phone: "999-888-1234",
  website: "testuser.com",
  address: {
    street: "Test Street",
    suite: "Suite 1",
    city: "City 1",
    zipcode: "12345",
  },
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: "testUser",
    email: "test.user@example.com",
    phone: "999-888-1234",
    website: "testuser.com",
    address: {
      street: "Test Street",
      suite: "Suite 1",
      city: "City 1",
      zipcode: "12345",
    },
  },
  {
    id: 2,
    name: "testUser2",
    email: "test2.user@example.com",
    phone: "999-888-1235",
    website: "testuser2.com",
    address: {
      street: "Test Street 2",
      suite: "Suite 2",
      city: "City 2",
      zipcode: "12346",
    },
  },
];
