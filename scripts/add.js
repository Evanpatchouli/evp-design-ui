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

// Define the component css path
const cssFilePath = path.join(componentDirectory, `${"index"}.css`);

// Create the component css file
fs.writeFileSync(cssFilePath, "");

console.log(chalk.default.green(`Created ${cssFilePath}`));

const collectCssEntryPath = path.join(__dirname, "..", "src", "lib", "collect.css");
const importCssText = `@import "./${componentName}/index.css";`;
try {
  fs.appendFile(collectCssEntryPath, importCssText, (err) => {
    if (err) throw err;
    console.log(chalk.default.green(`CSS importation is appended to ${collectCssEntryPath}`));
  });
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}

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

// Write the first example.tsx file
const demoDir = path.join(__dirname, "..", "src", "preview", "demos", componentName.replace(/^evp-/, ""));

if (!fs.existsSync(demoDir)) {
  fs.mkdirSync(demoDir);
}

const examplePath = path.join(demoDir, `example.tsx`);

const exampleContent = `
import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { ${componentNameCamelCase} } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <${componentNameCamelCase} />
    </>
  );
};

const codes = \`
import { ${componentNameCamelCase} } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <${componentNameCamelCase} />
    </>
  );
};
\`;

export default class Example extends React.Component {
  state: Readonly<{
    showCode: boolean;
  }> = {
    showCode: false,
  };

  render() {
    return (
      <>
        <Card
          w={"100%"}
          footer={
            <div style={{ width: "100%" }}>
              <Row justifyContent="right" w={"100%"} h={"fit-content"}>
                <Button
                  $click={() =>
                    this.setState({
                      ...this.state,
                      showCode: !this.state.showCode,
                    })
                  }
                  theme="text"
                  size="mini"
                  text="code"
                />
                <Button
                  theme="text"
                  size="mini"
                  text="copy"
                  $click={() => {
                    navigator.clipboard
                      .writeText(codes)
                      .then(() => {
                        Toast.success("Copy Success !");
                      })
                      .catch((err) => {
                        console.error(err);
                        Toast.error("Copy Failed !");
                      });
                  }}
                />
              </Row>
              <Tsx show={this.state.showCode}>{codes}</Tsx>
            </div>
          }
        >
          <Demo />
        </Card>
      </>
    );
  }
}

`;

try {
  fs.writeFileSync(examplePath, exampleContent);
  console.log(chalk.default.green(`Created ${examplePath}`));
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}
