import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swc from "@rollup/plugin-swc";
import alias from "@rollup/plugin-alias";
import postcss from 'rollup-plugin-postcss';
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
      exports: 'named',
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
    postcss({
      modules: true,
      extract: true,
      extract: path.resolve('dist/index.css'),
      extensions: ['.css', '.scss'],
    }),
    swc({
      exclude: ["node_modules/**"],
    }),
  ],
};
