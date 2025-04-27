import fs from "fs/promises";

const remove = async () => {
  const filePath = `fs/files/fileToRemove.txt`;
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await remove();
