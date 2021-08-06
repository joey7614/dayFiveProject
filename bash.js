let pwd = require("./pwd");
let list = require("./list");
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case "pwd":
      pwd();
      break;
    case "ls":
      list();
      break;
    default:
      process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
