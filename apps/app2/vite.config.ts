import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  appType: "spa",
  build: {
    outDir: "dist",
    minify: false,
    emptyOutDir: true,
  },
});
