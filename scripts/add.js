"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Get the component name from the command line arguments
const args = process.argv.slice(2);
const componentName = args[0];

// Check if the component name was provided
if (!componentName) {
  console.error(chalk.default.red("Please provide a component name as an argument"));
  process.exit(1);
}

// Check if the component match evp-*
if (!componentName.match(/^evp-/)) {
  console.error(chalk.default.red("Please provide a component name that starts with `evp`"));
  process.exit(1);
}

// Define the component directory
const componentDirectory = path.join(__dirname, "..", "src", "lib", componentName);

// Create the component directory if it doesn't exist
if (!fs.existsSync(componentDirectory)) {
  fs.mkdirSync(componentDirectory);
}

// Transform component name to camel case and make first letter uppercase
const componentNameCamelCase = componentName
  .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  .replace(/^[a-z]/g, (g) => g[0].toUpperCase());

// Define the component file contents
const componentFileContents = `
import React from 'react';

export type ${componentNameCamelCase}Props = {};

const ${componentNameCamelCase}: React.FC<${componentNameCamelCase}Props> = (props) => {
  return (
    <div>
      <h1>${componentNameCamelCase}</h1>
    </div>
  );
}

export default ${componentNameCamelCase};
`;

// Define the component file path
const componentFilePath = path.join(componentDirectory, `${"index"}.tsx`);

// Create the component file
fs.writeFileSync(componentFilePath, componentFileContents);

console.log(chalk.default.green(`Created ${componentFilePath}`));

// Export the component in the lib module entry file
const libModuleEntryPath = path.join(__dirname, "..", "src", "lib", "index.ts");
const textToAppend = `

export {
  default as ${componentNameCamelCase},
  default as ${componentNameCamelCase.replace(/^Evp/, "")},
  type ${componentNameCamelCase}Props,
} from './${componentName}';
`;

try {
  fs.appendFile(libModuleEntryPath, textToAppend, (err) => {
    if (err) throw err;
    console.log(chalk.default.green(`Module exportation is appended to ${libModuleEntryPath}`));
  });
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}
