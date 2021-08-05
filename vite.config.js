import { defineConfig } from "vite"
import swc from "rollup-plugin-swc"
import vue from "@vitejs/plugin-vue"
import cesium from "vite-plugin-cesium"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          //tsx: true,//if you use react
          dynamicImport: true,
          decorators: true,
        },
        target: "es2021",
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
  ],
  esbuild: false,
  server: {
    port: 8081,
  },
})

