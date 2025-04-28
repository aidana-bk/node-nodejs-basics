import fs from "fs/promises";

const list = async () => {
  const filePath = `src/fs/files`;
  fs.readdir(filePath)
    .then((files) => {
      console.log(files);
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
