import { describe, it, expect } from "vitest";
import { filterUsers, sortUsers } from "./searchHelper";
import { User, Filters } from "../types";

const users: User[] = [
  {
    id: 1,
    name: "Test User1",
    email: "test1@test.com",
    phone: "123-456-7890",
    website: "test1.com",
    address: {
      street: "123 Test St",
      suite: "Suite 1",
      city: "City 1",
      zipcode: "12345",
    },
  },
  {
    id: 2,
    name: "Test User2",
    email: "test2@test.com",
    phone: "987-654-3210",
    website: "test2.com",
    address: {
      street: "456 Test Ave",
      suite: "Suite 2",
      city: "City 2",
      zipcode: "67890",
    },
  },
];

describe("filterUsers", () => {
  it("should filter users by name", () => {
    const result = filterUsers("Test User1", users);
    expect(result).toEqual([users[0]]);
  });

  it("should filter users by email", () => {
    const result = filterUsers("test2@test.com", users);
    expect(result).toEqual([users[1]]);
  });

  it("should filter users by other fields", () => {
    const result = filterUsers("City 1", users);
    expect(result).toEqual([users[0]]);
  });

  it("should return an empty array if no users match", () => {
    const result = filterUsers("Nonexistent", users);
    expect(result).toEqual([]);
  });
});

describe("sortUsers", () => {
  it("should sort users by name", () => {
    const filters: Filters = { name: true, email: false, isDescending: false };
    const result = sortUsers([...users], filters);
    expect(result).toEqual([users[0], users[1]]);
  });

  it("should sort users by email", () => {
    const filters: Filters = { name: false, email: true, isDescending: false };
    const result = sortUsers([...users], filters);
    expect(result).toEqual([users[0], users[1]]);
  });

  it("should sort users in descending order", () => {
    const filters: Filters = { name: true, email: false, isDescending: true };
    const result = sortUsers([...users], filters);
    expect(result).toEqual([users[1], users[0]]);
  });

  it("should sort users by email in descending order", () => {
    const filters: Filters = { name: false, email: true, isDescending: true };
    const result = sortUsers([...users], filters);
    expect(result).toEqual([users[1], users[0]]);
  });
});
