import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const originPath = path.join(import.meta.dirname, "files");
  const copyPath = path.join(import.meta.dirname, "files_copy");
  fs.cp(originPath, copyPath, { recursive: true })
    .then(() => {
      console.log("Copied from files to files_copy :)");
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await copy();
