/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/user-dashboard/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test.setup.ts",
  },
});
