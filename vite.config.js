import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG"],
  base: "/PortFolio_OC_Cl-ment_demongeot/",
});
