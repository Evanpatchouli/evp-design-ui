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

const step1 = () => {
  try {
    console.log("Step 1 : cleaning up dist folder...");
    utils.deleteFolderRecursive(dist, ["node_modules"], { deleteRoot: false });
    console.log(chalk.default.green("Delete dist folder success"));
  } catch (error) {
    console.error(error);
    console.log(chalk.default.red("Delete dist folder failed"));
  }
}

const step2 = () => {
  try {
    console.log("Step 2 : copying unpackaged lib to dist...");
    utils.copyFolderSync(lib, dist, ["node_modules"]);
    console.log(chalk.default.green("Copy lib to dist success"));
  } catch (error) {
    console.log(chalk.default.red("Copy lib to dist failed"));
  }
}

const step3 = () => {
  console.log(`Step 3 : installing dependencies in ${dist}...`);

  // execute npm install command and set cwd option to dist folder path
  execSync("npm install", { cwd: dist });
}

const step4 = () => {
  try {
    console.log("Step 4 : building dist with rollup...");

    // execute npm install command and set cwd option to dist folder path
    execSync("npx rollup -c", { cwd: dist });
  } catch (error) {
    console.error(error);
  }
}

const step5 = () => {
  // delete all files like *.ts(exclude *.d.ts), *.tsx
  console.log("Step 5 : deleting *.ts, *.tsx at dist...");
  utils.deleteFilesMatchExt(dist, ["ts", "tsx"], ["d.ts"], ["node_modules"]);
}

step1();
step2();
// step3();  // 有点问题，手动安装
step4();
step5();

console.log(chalk.default.green("Package dist success"));
