"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const path = require("path");
const chalk = require("chalk");
const dist = path.resolve(__dirname, "..", "dist");
const { execSync } = require("child_process");

execSync("npm publish", { cwd: dist });
console.log(chalk.default.green("Publish dist success"));


