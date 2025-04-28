import fs from "fs";
import zlib from "zlib";
import path from "path";

const compress = async () => {
  const inputFilePath = path.join(
    import.meta.dirname,
    "files/fileToCompress.txt"
  );
  const outputFilePath = path.join(import.meta.dirname, "files/archive.gz");
  try {
    const readableStream = fs.createReadStream(inputFilePath);
    const writableStream = fs.createWriteStream(outputFilePath);
    const gzipStream = zlib.createGzip();
    readableStream.pipe(gzipStream).pipe(writableStream);
    readableStream.on("error", (err) => {
      console.error(err.message);
    });
    gzipStream.on("error", (err) => {
      console.error(err.message);
    });
    writableStream.on("error", (err) => {
      console.error(err.message);
    });
    writableStream.on("finish", () => {
      console.log("Finish");
    });
  } catch (err) {
    console.error(err.message);
  }
};

await compress();
