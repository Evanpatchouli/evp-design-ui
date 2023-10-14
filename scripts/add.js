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

const componentNameWithoutEvp = componentName.replace(/^evp-/, "");

// Define the component directory
const componentDirectory = path.join(__dirname, "..", "src", "lib", componentName);

console.log(`\nStep 1: Creating ${componentName} directory...`);
// Create the component directory if it doesn't exist
if (!fs.existsSync(componentDirectory)) {
  fs.mkdirSync(componentDirectory);
} else {
  console.error(chalk.default.red(`Component ${componentName} already exists.`));
  process.exit(1);
}

// Transform component name to camel case and make first letter uppercase
const componentNameCamelCase = componentName
  .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  .replace(/^[a-z]/g, (g) => g[0].toUpperCase());

const componentNameCamelCaseWithoutEvp = componentNameCamelCase.replace(/^Evp/, "");

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

console.log(`\nStep 2: Creating ${componentName}/index.tsx...`);
// Create the component file
fs.writeFileSync(componentFilePath, componentFileContents);

console.log(chalk.default.green(`Created ${componentFilePath}`));

// Define the component css path
const cssFilePath = path.join(componentDirectory, `${"index"}.css`);

console.log(`\nStep 3: Creating ${componentName}/index.css...`);
// Create the component css file
fs.writeFileSync(cssFilePath, "");

console.log(chalk.default.green(`Created ${cssFilePath}`));

const collectCssEntryPath = path.join(__dirname, "..", "src", "lib", "collect.css");
const importCssText = `\n@import url(./${componentName}/index.css);`;
console.log(`\nStep 4: Collecting ${componentName}/index.css to cellect.css...`);
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
const libModuleEntryPath = path.join(__dirname, "..", "src", "lib", "index.tsx");
const textToAppend = `

export {
  default as ${componentNameCamelCase},
  default as ${componentNameCamelCaseWithoutEvp},
  type ${componentNameCamelCase}Props,
} from './${componentName}';
`;

console.log(`\nStep 5: Export ${componentName}'s entry...`);
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
const demoDir = path.join(__dirname, "..", "src", "preview", "demos", componentNameWithoutEvp);
console.log(`\nStep 6: Creating demo dictory into @/preview/demos...`);
if (!fs.existsSync(demoDir)) {
  fs.mkdirSync(demoDir);
}

const examplePath = path.join(demoDir, `example.tsx`);

const exampleContent = `
import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { ${componentNameCamelCaseWithoutEvp} } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <${componentNameCamelCaseWithoutEvp} />
    </>
  );
};

const codes = \`
import { ${componentNameCamelCaseWithoutEvp} } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <${componentNameCamelCaseWithoutEvp} />
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

console.log(`\nStep 7: Creating example.tsx to demos...`);
try {
  fs.writeFileSync(examplePath, exampleContent);
  console.log(chalk.default.green(`Created ${examplePath}`));
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}

// <Step.8> Create Api table for component

const apiPath = path.join(__dirname, "..", "src", "preview", "apis", componentNameWithoutEvp + ".api.tsx");

const apiContent = `
import Api from "@/components/api";
import { Code, Popover } from "@/lib";

export default function SlidesApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 80,
      }}
      data={[
        {
          property: "class",
          type: "string",
          default: "undefined",
          desc: "The className of component",
        },
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The children of component",
        },
//         {
//           property: "SOME COMPLEX PROPERTY",
//           type: (
//             <>
//               <Popover
//                 position="upperRightCorner"
//                 contentStyle={{
//                   paddingInline: "8px",
//                 }}
//                 content={
//                   <Code lang="ts" theme="oneLight">
//                     {\`
// {                      
//   default?: string;
//   hover?: string;
//   click?: string;
//   active?: string;
// };
// \`}
//                   </Code>
//                 }
//               >
//                 <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>TabSpotColor</span>
//               </Popover>
//             </>
//           ),
//           default: "undefined",
//           desc: "Desc of this property",
//         },
      ]}
    />
  );
}

`;

console.log(`\nStep 8: Creating ${componentNameWithoutEvp}.api.tsx to @/preview/apis...`);
try {
  fs.writeFileSync(apiPath, apiContent);
  console.log(chalk.default.green(`Created ${apiPath}`));
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}

// <Step.9> Create the View.tsx for component
const viewPath = path.join(__dirname, "..", "src", "preview", `${componentName}.tsx`);

const viewContent = `
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/${componentNameWithoutEvp}/example";
import ${componentNameCamelCaseWithoutEvp}Api from "./apis/${componentNameWithoutEvp}.api";

export default function ${componentNameCamelCaseWithoutEvp}View() {
  const next = { route: "", name: "" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="preview-container">
      <Md>
        {\`
# ${componentNameCamelCaseWithoutEvp}

${componentNameCamelCaseWithoutEvp} is a component that ...

## Basic Usage

**import:**
\`}
      </Md>
      <Tsx>
        {\`
import { ${componentNameCamelCaseWithoutEvp} } from 'evp-design-ui'
\`}
      </Tsx>
      <Md>
        {\`
**example:**
\`}
      </Md>
      <Example />
      <Md>
        {\`
## Examples

Here are some examples about ${componentNameCamelCaseWithoutEvp}.

\`}
      </Md>
      <Example />
      <Md>
        {\`
## Api

★ based on div  
★ props extends EvpBaseProps

**${componentNameCamelCaseWithoutEvp} Apis:**

\`}
      </Md>
      <${componentNameCamelCaseWithoutEvp}Api />
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={\`/\${next.route ? \`components/\${next.route}\` : ""}\`}
        text={\`★ Next Doc Evp\${next.name} >\`}
      />
    </div>
  );
}

`;

console.log(`\nStep 9: Creating view ${componentName}.tsx to @/preview...`);
try {
  fs.writeFileSync(viewPath, viewContent);
  console.log(chalk.default.green(`Created ${viewPath}`));
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}

// <Step.10> Export view to index.
const preIndexPath = path.join(__dirname, "..", "src", "preview", "index.tsx");
const exportView = `export { default as ${componentNameCamelCaseWithoutEvp}View } from "./${componentName}";`;
console.log(`\nStep 10: Exporting view to @/preview/index.tsx...`);
try {
  fs.appendFile(preIndexPath, exportView, (err) => {
    if (err) throw err;
    console.log(chalk.default.green(`View Export is appended to ${preIndexPath}`));
  });
} catch (err) {
  console.error(chalk.default.red(err.message));
  process.exit(1);
}

// <Step.11> Register view to routes.

// 读取 router.tsx 文件
const routerPath = path.join(__dirname, "..", "src", "router", "index.tsx");

// 新的路由配置
const newRoute = `{ path: "/${componentName}", key: "${componentNameWithoutEvp}", element: <Pre.${componentNameCamelCaseWithoutEvp}View /> }`;
console.log(`\nStep 11: Register view to @/router/index.tsx...`);
fs.readFile(routerPath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // 将文件内容解析为数组
  const routes = data.split("\n").slice(0, -1);

  // 在倒数第二行之前插入新的路由配置
  routes.splice(-1, 0, `  ${newRoute},`);

  // 将更新后的数组写回到路由文件中
  const updatedContent = `${routes.join("\n")}`;
  fs.writeFile(routerPath, updatedContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("New route added successfully!");
  });
});
