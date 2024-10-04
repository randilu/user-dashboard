

import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";
import { User } from "../types";

describe("useFetch", () => {
  const mockUsers = [
    {
      albumId: 1,
      id: 1,
      title: "test title",
      url: "https://testUrl",
      thumbnailUrl: "https://testThumbnailUrl",
    },
  ];
  beforeEach(() => {
    const mockResponse = new Response(JSON.stringify(mockUsers));
    vi.spyOn(global, "fetch").mockResolvedValue(mockResponse);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return fetched data", async () => {
    const { result } = renderHook(() => useFetch<User>("https://fetchUrl"));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockUsers);
    });
    await waitFor(() => {
      expect(result.current.error).toEqual(null);
    });
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
  });

  it("should return error if fetching fails", async () => {
    vi
      .spyOn(global, "fetch")
      .mockRejectedValue(new Error("Error fetching data"));

    const { result } = renderHook(() => useFetch<User>("https://fetchUrl"));

    await waitFor(() => {
      expect(result.current.data).toEqual(null);
    });
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
    await waitFor(() => {
      expect(result.current.error).toEqual(new Error("Error fetching data"));
    });
  });

  test("should return loading state as true while fetching data", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() => {
      return new Promise((resolve) => {
        resolve(new Response(JSON.stringify(mockUsers)));
      });
    });

    const { result } = renderHook(() => useFetch<User>("https://fetchUrl"));

    await waitFor(() => expect(result.current.isLoading).toEqual(true));
  });
});
