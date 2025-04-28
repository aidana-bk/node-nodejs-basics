import fs from "fs/promises";
import path from "path";

const list = async () => {
  const filePath = path.join(import.meta.dirname, "files");
  fs.readdir(filePath)
    .then((files) => {
      console.log(files);
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
