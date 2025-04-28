import fs from "fs/promises";
import path from "path";

const remove = async () => {
  const filePath = path.join(import.meta.dirname, "files/fileToRemove.txt");
  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
