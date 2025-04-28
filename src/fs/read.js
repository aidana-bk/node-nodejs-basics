import fs from "fs/promises";

const read = async () => {
  const filePath = `src/fs/files/fileToRead.txt`;
  fs.readFile(filePath, "utf8")
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await read();
