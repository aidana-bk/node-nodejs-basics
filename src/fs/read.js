import fs from "fs/promises";
import path from "path";

const read = async () => {
  const filePath = path.join(import.meta.dirname, "files/fileToRead.txt");
  fs.readFile(filePath, "utf8")
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await read();
