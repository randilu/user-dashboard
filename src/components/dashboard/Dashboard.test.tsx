import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dashboard from "./Dashboard";

describe("Dashboard Component", () => {
  it("should render the Dashboard component", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
  });

  it("should update search text when search input changes", () => {
    render(<Dashboard />);
    const searchInput = screen.getByPlaceholderText("search here");
    fireEvent.change(searchInput, { target: { value: "John" } });
    expect(searchInput).toHaveValue("John");
  });
});