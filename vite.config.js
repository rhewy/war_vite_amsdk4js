import { defineConfig } from "vite";

const config = {
  server: {
    open: true
  },
  worker: {format: 'es'},
  resolve: {preserveSymlinks: true},
  base : './'
};

export default defineConfig(config);