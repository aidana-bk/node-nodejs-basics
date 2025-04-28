import { spawn } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(import.meta.dirname, "files/script.js");
  const child = spawn("node", [scriptPath, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stdin.on("error", (err) => {
    console.error(err.message);
  });
  child.stdout.on("error", (err) => {
    console.error(err.message);
  });
  child.on("error", (err) => {
    console.error(err.message);
  });
  child.on("close", (code) => {
    console.log(`Exit with ${code}`);
  });
};

spawnChildProcess(["Hi", "my", "name", "is", "Aidana"]);
