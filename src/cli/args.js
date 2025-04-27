const parseArgs = () => {
  const args = [];
  // console.log(process.argv);
  for (let i = 2; i < process.argv.length; i += 2) {
    const key = process.argv[i].replace("--", "");
    const value = process.argv[i + 1];
    const formattedString = `${key} is ${value}`;
    args.push(formattedString);
  }
  console.log(args.join(", "));
};

parseArgs();
