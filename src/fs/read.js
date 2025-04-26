import fs from "fs/promises";

const read = async () => {
  const filePath = `fs/files/fileToRead.txt`;
  fs.readFile(filePath, "utf8")
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.error("FS operation failed");
    });
};

await read();
