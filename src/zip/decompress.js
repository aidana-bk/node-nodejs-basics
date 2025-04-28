import fs from "fs";
import zlib from "zlib";
import path from "path";

const decompress = async () => {
  const inputFilePath = path.join(import.meta.dirname, "files/archive.gz");
  const outputFilePath = path.join(
    import.meta.dirname,
    "files/fileToCompress.txt"
  );
  try {
    const readableStream = fs.createReadStream(inputFilePath);
    const writableStream = fs.createWriteStream(outputFilePath);
    const gunzipStream = zlib.createGunzip();
    readableStream.pipe(gunzipStream).pipe(writableStream);
    readableStream.on("error", (err) => {
      console.error(err.message);
    });
    gunzipStream.on("error", (err) => {
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

await decompress();
