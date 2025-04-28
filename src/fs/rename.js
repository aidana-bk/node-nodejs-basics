import fs from "fs/promises";

const rename = async () => {
  const filepath = "src/fs/files";
  try {
    await fs.access(`${filepath}/properFilename.md`);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      fs.rename(
        `${filepath}/wrongFilename.txt`,
        `${filepath}/properFilename.md`
      )
        .then(() => {
          console.log("File renamed successfully.");
        })
        .catch((err) => {
          throw new Error("FS operation failed");
        });
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
