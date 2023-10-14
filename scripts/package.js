"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const path = require("path");
// const { cp } = require("fs");
const utils = require("./_utils");
const chalk = require("chalk");
const { execSync } = require("child_process");

// cp("./src/lib", "./dist", ()=>{
//   console.log('success');
// });
const lib = path.join(__dirname, "..", "src", "lib");
const dist = path.join(__dirname, "..", "dist");

try {
  console.log("Step 1 : cleaning up dist folder...");
  utils.deleteFolderRecursive(dist, ["node_modules"]);
  console.log(chalk.default.green("Delete dist folder success"));
} catch (error) {
  console.log(chalk.default.red("Delete dist folder failed"));
}

try {
  console.log("Step 2 : copying unpackaged lib to dist...");
  utils.copyFolderSync(lib, dist, ["node_modules"]);
  console.log(chalk.default.green("Copy lib to dist success"));
} catch (error) {
  console.log(chalk.default.red("Copy lib to dist failed"));
}

console.log(`Step 3 : installing dependencies in ${dist}...`);

// execute npm install command and set cwd option to dist folder path
execSync("npm install", { cwd: dist });

console.log("Step 4 : building dist with rollup...");

// execute npm install command and set cwd option to dist folder path
execSync("npx rollup -c", { cwd: dist });

console.log(chalk.default.green("Package dist success"));
