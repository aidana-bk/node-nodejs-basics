import fs from "fs";

const write = async () => {
  const filePath = "src/streams/files/fileToWrite.txt";
  try {
    const writableStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writableStream);
    writableStream.on("error", (err) => {
      console.error(err.message);
    });
    writableStream.on("finish", () => {
      console.log("Finish");
    });
    writableStream.on("close", () => {
      console.log("Closing stream");
    });
    process.stdin.on("error", (err) => {
      console.error(err.message);
    });
  } catch (err) {
    console.error(err.message);
  }
};

await write();
