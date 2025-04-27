import fs from "fs/promises";

const list = async () => {
  const filePath = `src/fs/files`;
  fs.readdir(filePath)
    .then((files) => {
      console.log(files);
    })
    .catch((err) => {
      console.error("FS operation failed");
    });
};

await list();
