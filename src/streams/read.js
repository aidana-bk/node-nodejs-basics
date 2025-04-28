import fs from "fs";
import path from "path";

const read = async () => {
  const filePath = path.join(import.meta.dirname, "files/fileToRead.txt");
  try {
    await fs.promises.access(filePath);
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(process.stdout);
    readableStream.on("error", (err) => {
      console.error(err.message);
    });
    readableStream.on("end", () => {
      console.log("Finish");
    });
  } catch (err) {
    console.error(err.message);
  }
};

await read();
