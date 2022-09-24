import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: resolve("./src/components"),
      $lib: resolve("./src/lib"),
      $mocks: resolve("./src/mocks"),
      $models: resolve("./src/models"),
      $src: resolve("./src/"),
      $stores: resolve("./src/stores"),
    },
  },
};

export default config;
