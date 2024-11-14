import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./source/main.js",
    },
  },
});
