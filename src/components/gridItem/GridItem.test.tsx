import { render, screen } from "@testing-library/react";
import GridItem from "./GridItem";
import { mockUser } from "../../mocks";


describe("GridItem", () => {
  it("renders user name", () => {
    render(<GridItem user={mockUser} />);
    expect(screen.getByText("testUser")).toBeInTheDocument();
  });

  it("renders user email", () => {
    render(<GridItem user={mockUser} />);
    expect(
      screen.getByText("Email: test.user@example.com")
    ).toBeInTheDocument();
  });

  it("renders user phone", () => {
    render(<GridItem user={mockUser} />);
    expect(screen.getByText("Phone: 999-888-1234")).toBeInTheDocument();
  });

  it("renders user website", () => {
    render(<GridItem user={mockUser} />);
    expect(screen.getByText("Website: testuser.com")).toBeInTheDocument();
  });

  it("renders user address", () => {
    render(<GridItem user={mockUser} />);
    expect(
      screen.getByText("Address: Test Street, Suite 1, City 1, 12345")
    ).toBeInTheDocument();
  });
});
