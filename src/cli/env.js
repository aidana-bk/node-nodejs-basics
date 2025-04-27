const parseEnv = () => {
  const envVars = [];
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      const formattedString = `${key}=${process.env[key]}`;
      envVars.push(formattedString);
    }
  }
  console.log(envVars.join("; "));
};

parseEnv();
