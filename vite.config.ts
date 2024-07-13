/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    target: "es2022",
    outDir: "../dist",
    emptyOutDir: true,
  },
  test: {
    browser: {
      enabled: true,
      name: "chrome",
      provider: "webdriverio",
      headless: true,
    }
  },
});
