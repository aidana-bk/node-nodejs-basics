import fs from "fs/promises";
import path from "path";

const rename = async () => {
  const filePath = path.join(import.meta.dirname, "files");
  try {
    await fs.access(`${filePath}/properFilename.md`);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      fs.rename(
        `${filePath}/wrongFilename.txt`,
        `${filePath}/properFilename.md`
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
