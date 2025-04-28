import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const num = os.cpus().length;
  const results = new Array(num);
  for (let i = 0; i < num; i++) {
    const worker = new Worker("./src/wt/worker.js", { workerData: i + 10 });
    worker.on("message", (msg) => {
      results[i] = msg;
      if (results.every((result) => result !== undefined)) {
        console.log(results);
      }
    });
    worker.on("error", (err) => {
      console.error(err.message);
    });
    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`Exit with ${code}`);
      }
    });
  }
};

await performCalculations();
