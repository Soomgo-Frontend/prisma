import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swc from "@rollup/plugin-swc";
import alias from "@rollup/plugin-alias";
import packageJson from "./package.json";

const customResolver = resolve({
  extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
});

export default [
  {
    input: "src/tokens/tools/generate-css-vars.js",
    output: {
      file: 'dist/tokens/tools/generate-css-vars.cjs.js',
      format: "cjs",
    },
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
      resolve({
        extensions: [".js", ".ts", ".tsx"],
      }),
      commonjs(),
      swc({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
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
  },
];
