// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://zaru-sama.github.io",
  base: "/astro_two",
  vite: {
    plugins: [tailwindcss()],
  },
});
