import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/*.ts", "src/*/*.ts"],
  sourcemap: true,
  dts: true,
  clean: true,
});
