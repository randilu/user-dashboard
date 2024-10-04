import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserGrid from "./UserGrid";
import useSearchUsers from "../../hooks/useSearchUsers";
import { Filters } from "../../types";
import { mockUser } from "../../mocks";

vi.mock("../../hooks/useSearchUsers");

const mockUseSearchUsers = useSearchUsers as jest.MockedFunction<
  typeof useSearchUsers
>;

describe("UserGrid", () => {
  const filters: Filters = {
    name: true,
    email: false,
    isDescending: false,
  };
  it("renders Loader when loading", () => {
    mockUseSearchUsers.mockReturnValue({
      isLoading: true,
      error: null,
      filteredUsers: [],
    });

    render(<UserGrid searchText="sampleTxt" filters={filters} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders Error when there is an error", () => {
    mockUseSearchUsers.mockReturnValue({
      isLoading: false,
      error: new Error("Something went wrong"),
      filteredUsers: [],
    });

    render(<UserGrid searchText="sampleTxt" filters={filters} />);
    expect(screen.getByText("Something went wrong. Please refresh the page and try again.")).toBeInTheDocument();
  });

  it("renders EmptyBanner when there are no users", () => {
    mockUseSearchUsers.mockReturnValue({
      isLoading: false,
      error: null,
      filteredUsers: [],
    });

    render(<UserGrid searchText="sampleTxt" filters={filters} />);
    expect(screen.getByTestId("empty-banner")).toBeInTheDocument();
  });

  it("renders user grid when there are users", () => {
   
    mockUseSearchUsers.mockReturnValue({
      isLoading: false,
      error: null,
      filteredUsers: [mockUser],
    });

    render(<UserGrid searchText="sampleTxt" filters={filters} />);
    expect(screen.getByText("testUser")).toBeInTheDocument();
  });
});
