import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Config separada do vite.config.ts: os testes unitários não precisam (e não devem
// carregar) os plugins do Lovable/TanStack Start.
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
