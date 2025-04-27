import fs from "fs/promises";

const copy = async () => {
  const originPath = "src/fs/files";
  const copyPath = "src/fs/files_copy";
  fs.cp(originPath, copyPath, { recursive: true })
    .then(() => {
      console.log("Copied from files to files_copy :)");
    })
    .catch((err) => {
      console.error("FS operation failed");
    });
};

await copy();
