import fs from "fs/promises";

const create = async () => {
  const filePath = `fs/files/fresh.txt`;
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(filePath, "I am fresh and young");
      console.log("fresh.txt was created successfully :)");
    } else {
      console.error("FS operation failed");
    }
  }
};

await create();
