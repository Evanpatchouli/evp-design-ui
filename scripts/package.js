"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const path = require("path");
const { cp } = require("fs");
const { copyFolderSync, deleteFolderRecursive } = require("./_utils");
const chalk = require("chalk");
const { execSync } = require('child_process');

// cp("./src/lib", "./dist", ()=>{
//   console.log('success');
// });
const lib = path.join(__dirname, "..", "src", "lib");
const dist = path.join(__dirname, "..", "dist");

try {
  console.log("Step 1 : cleaning up dist folder...")
  deleteFolderRecursive(dist);
  console.log(chalk.default.green("Delete dist folder success"));
} catch (error) {
  console.log(chalk.default.red("Delete dist folder failed"));
}

try {
  console.log("Step 2 : copying unpackaged lib to dist...")
  copyFolderSync(lib, dist);
  console.log(chalk.default.green("Copy lib to dist success"));
} catch (error) {
  console.log(chalk.default.red("Copy lib to dist failed"));
}

console.log(`Step 3 : installing dependencies in ${dist}...`)

// 执行 npx 命令，并将 cwd 选项设置为 dist 目录的路径
const install = execSync("npm install", { cwd: dist });

console.log("Step 4 : building dist with rollup...");

// 执行 npx 命令，并将 cwd 选项设置为 dist 目录的路径
const build = execSync("npx rollup -c", { cwd: dist });
