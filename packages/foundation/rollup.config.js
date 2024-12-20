import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swc from "@rollup/plugin-swc";
import alias from "@rollup/plugin-alias";
import packageJson from "./package.json";

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
});

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      entries: [
        
        {
          find: "@",
          replacement: path.resolve(__dirname, "src/"),
        },
      ],
      customResolver,
    }),
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    commonjs(),
    swc({
      exclude: ["node_modules/**"],
    }),
  ],
};
