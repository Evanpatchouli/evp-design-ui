/* eslint-disable import/no-anonymous-default-export */
// 引入插件
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import ployfills from "rollup-plugin-node-polyfills";

// 入口文件
const entry = "./index.ts";

// babel配置
const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  exclude: "**/node_modules/**",
};

// rollup配置
export default {
  // 入口
  input: entry,
  // 打包信息
  output: [{ filname: "index.esm.js", dir: ".", format: "esm" }],
  // 插件配置
  plugins: [
    // 可使用 `import {module} from './file'` 替换 `import {module} from './file/index.js`
    resolve(),
    // 支持commonjs，包括第三方引入使用到commonjs语法
    commonjs(),
    // typescript支持
    typescript(),
    // 支持读取json文件
    json(),
    // babel
    babel(babelOptions),
    // ployfills
    ployfills(),
  ],
  external: [
    "nanoid",
    "react-markdown",
    "react",
    "react-router",
    "react-router-dom",
  ],
};
