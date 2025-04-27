import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const scriptPath = "src/cp/files/script.js";
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
