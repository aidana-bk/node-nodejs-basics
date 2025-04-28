import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk =
        chunk.toString().split("").reverse().join("") + "\n";
      callback(null, reversedChunk);
    },
  });
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
  process.stdin.on("error", (err) => {
    console.error(err.message);
  });
  reverseTransform.on("error", (err) => {
    console.error(err.message);
  });
  process.stdout.on("error", (err) => {
    console.error(err.message);
  });
};

await transform();
