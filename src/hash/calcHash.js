import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const filePath = "src/hash/files/fileToCalculateHashFor.txt";
  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(filePath);
  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
  fileStream.on("error", (err) => {
    console.error(`Error: ${err.message}`);
  });
};

await calculateHash();
