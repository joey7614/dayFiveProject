const fs = require("fs");

function list() {
  const fileNames = fs.readdirSync("./");
  fileNames.forEach(file => {
  process.stdout.write(file + '\n');
})
}

module.exports = list;
