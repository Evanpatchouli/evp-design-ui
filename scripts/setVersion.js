"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Get the version
const args = process.argv.slice(2);
const version = args[0];

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const root = path.join(__dirname, "..");
const lib = path.join(root, "src", "lib");

let packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
// Set the package version
packageJson.version = `${version}`;
fs.writeFileSync(path.join(root, "package.json"), JSON.stringify(packageJson, null, 2), "utf8");
console.log(chalk.default.green(`Set repo's package.json version to ${version} success`));

// Set the lib package version
let libJson = JSON.parse(fs.readFileSync(path.join(lib, "package.json"), "utf8"));
libJson.version = `${version}`;
fs.writeFileSync(path.join(lib, "package.json"), JSON.stringify(libJson, null, 2), "utf8");
console.log(chalk.default.green(`Set lib's package.json version to ${version} success`));
