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