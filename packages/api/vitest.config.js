import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    hookTimeout: 60000,
    env: {
      MONGOMS_VERSION: "7.0.14",
    },
  },
});
