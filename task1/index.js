process.stdin.on("data", (message) => {
  const transformedMessage = message.toString().split("").reverse().join("");

  process.stdout.write(transformedMessage);
});
