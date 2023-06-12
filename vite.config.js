import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features"),
      "@components": path.resolve(__dirname, "./src/componets"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@stores": path.resolve(__dirname, "./src/stores"),
    },
  },
});
