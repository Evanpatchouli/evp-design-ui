"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const fs = require("fs");
const path = require("path");

/**
 * Copy a folder and files in it recursively
 * @param {stinrg} source
 * @param {stinrg} target
 */
function copyFolderSync(source, target) {
  // target not existing, create it
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  // read the files in the source folder
  fs.readdirSync(source).forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // copy it recursively if it is a folder
    if (fs.statSync(sourcePath).isDirectory()) {
      copyFolderSync(sourcePath, targetPath);
    } else {
      // if it is a file, copy it directly
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // delete subfolders recursively
        deleteFolderRecursive(curPath);
      } else {
        // delete folder files
        fs.unlinkSync(curPath);
      }
    });
    // delete empty folders
    fs.rmdirSync(folderPath);
  }
}

module.exports = {
  copyFolderSync,
  deleteFolderRecursive,
};
