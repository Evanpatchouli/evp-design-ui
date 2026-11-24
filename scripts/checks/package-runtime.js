"use strict";

const assert = require("assert").strict;
const fs = require("fs");
const os = require("os");
const path = require("path");
const { createRequire } = require("module");
const { pathToFileURL } = require("url");
const { gzipSync } = require("zlib");
const webpack = require("webpack");
const React = require("react");
const { renderToString } = require("react-dom/server");

const project = path.resolve(__dirname, "../..");

async function checkPackage() {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "evp-package-consumer-"));
  try {
    const modules = path.join(fixture, "node_modules");
    fs.mkdirSync(modules);
    fs.symlinkSync(path.join(project, "dist"), path.join(modules, "evp-design-ui"), "junction");
    for (const name of ["react", "react-dom"]) {
      const installed = path.dirname(require.resolve(name + "/package.json"));
      fs.symlinkSync(installed, path.join(modules, name), "junction");
    }
    const consumer = createRequire(path.join(fixture, "app.cjs"));
    const entry = path.join(fixture, "app.mjs");
    fs.writeFileSync(entry, "export { Button } from 'evp-design-ui';");
    const esm = await import(pathToFileURL(entry).href);
    for (const { Button } of [consumer("evp-design-ui"), esm]) {
      assert.match(renderToString(React.createElement(Button, null, "Example")), /<button\b[\s\S]*Example/);
    }
    assert.ok(fs.statSync(consumer.resolve("evp-design-ui/global.css")).size > 0);

    const common = "import React from 'react'; import {createRoot} from 'react-dom/client';";
    const entries = {};
    for (const [name, component] of [["native", "'button'"], ["library", "Button"]]) {
      const file = path.join(fixture, name + ".mjs");
      const imports = name === "library" ? "import {Button} from 'evp-design-ui';" : "";
      fs.writeFileSync(file, common + imports + "createRoot(document.body).render(React.createElement(" + component + ",null,'OK'));");
      entries[name] = file;
    }
    const out = path.join(fixture, "out");
    const compiler = webpack({
      mode: "production",
      context: fixture,
      entry: entries,
      output: { path: out, filename: "[name].js" },
      devtool: false,
      performance: false,
    });
    try {
      const stats = await new Promise((resolve, reject) => {
        compiler.run((error, result) => error ? reject(error) : resolve(result));
      });
      if (stats.hasErrors()) throw new Error(stats.toString({ all: false, errors: true }));
      const { chunkGraph, namedChunks } = stats.compilation;
      const forbidden = /[\\/]node_modules[\\/](react-syntax-highlighter|refractor|react-calendar|moment)[\\/]/;
      function checkModule(module) {
        assert.ok(!forbidden.test(module.resource || ""), "Unexpected Button dependency: " + module.resource);
        if (module.modules) for (const child of module.modules) checkModule(child);
      }
      for (const module of chunkGraph.getChunkModulesIterable(namedChunks.get("library"))) checkModule(module);
      for (const name of Object.keys(entries)) {
        const js = fs.readFileSync(path.join(out, name + ".js"));
        console.log(name, js.length, "JS bytes,", gzipSync(js, { level: 9 }).length, "bytes gzip -9");
      }
    } finally {
      await new Promise((resolve, reject) => compiler.close(error => error ? reject(error) : resolve()));
    }
  } finally {
    for (const name of ["evp-design-ui", "react", "react-dom"]) {
      const installed = path.join(fixture, "node_modules", name);
      if (fs.existsSync(installed)) fs.unlinkSync(installed);
    }
    fs.rmSync(fixture, { recursive: true, force: true });
  }
}

checkPackage().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
