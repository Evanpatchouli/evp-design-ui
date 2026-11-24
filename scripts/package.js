"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { rollup } = require("rollup");

const project = path.resolve(__dirname, "..");
const library = path.join(project, "src", "lib");

function copyAssets(source, output) {
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name);
    const to = path.join(output, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      copyAssets(from, to);
    } else if (entry.isFile() && /\.(css|scss|svg|png|gif|jpe?g|woff2?|d\.ts)$/i.test(entry.name)) {
      fs.mkdirSync(output, { recursive: true });
      fs.copyFileSync(from, to);
    }
  }
}

async function buildPackage(source = library, destination = path.join(project, "dist")) {
  const work = fs.mkdtempSync(path.join(path.dirname(destination), ".evp-package-"));
  const output = path.join(work, "package");
  const compiled = path.join(work, "compiled");
  const previous = path.join(work, "previous");
  let preserveBackup = false;
  try {
    fs.mkdirSync(output);
    execFileSync(process.execPath, [
      require.resolve("typescript/bin/tsc"), "-p", path.join(source, "tsconfig.json"),
      "--noEmit", "false", "--allowJs", "false", "--noEmitOnError",
      "--outDir", compiled, "--declarationDir", output, "--importHelpers"
    ], { stdio: "inherit" });

    const bundle = await rollup({
      input: path.join(compiled, "index.js"),
      external: id => !id.startsWith(".") && !path.isAbsolute(id),
      plugins: [{
        name: "compiled-relative-modules",
        resolveId(id, importer) {
          if (importer && id.startsWith(".")) return require.resolve(path.resolve(path.dirname(importer), id));
          return null;
        }
      }]
    });
    try {
      const modules = { preserveModules: true, preserveModulesRoot: compiled, entryFileNames: "[name].js" };
      await bundle.write({ ...modules, dir: output, format: "cjs", exports: "named", interop: "auto" });
      const esm = path.join(output, "esm");
      await bundle.write({ ...modules, dir: esm, format: "es" });
      fs.writeFileSync(path.join(esm, "package.json"), '{"type":"module","sideEffects":false}\n');
    } finally {
      await bundle.close();
    }

    copyAssets(source, output);
    const { scripts, devDependencies, ...manifest } = JSON.parse(fs.readFileSync(path.join(source, "package.json"), "utf8"));
    fs.writeFileSync(path.join(output, "package.json"), JSON.stringify(manifest, null, 2) + "\n");
    fs.copyFileSync(path.join(source, "Readme.md"), path.join(output, "Readme.md"));
    fs.copyFileSync(path.join(project, "LICENSE"), path.join(output, "LICENSE"));
    for (const entry of [manifest.main, manifest.module, manifest.types, "global.css", "collect.css"]) {
      if (!fs.statSync(path.join(output, entry)).size) throw new Error("Empty package entry: " + entry);
    }

    if (fs.existsSync(destination)) fs.renameSync(destination, previous);
    try {
      fs.renameSync(output, destination);
    } catch (error) {
      if (fs.existsSync(previous)) {
        preserveBackup = true;
        fs.renameSync(previous, destination);
        preserveBackup = false;
      }
      throw error;
    }
  } finally {
    if (!preserveBackup) fs.rmSync(work, { recursive: true, force: true });
  }
}

module.exports = buildPackage;
if (require.main === module) {
  buildPackage().then(() => console.log("Package ready in dist")).catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
