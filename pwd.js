function pwd(data) {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
  }
  //process.stdout.write('You typed: ' + (cmd === 'pwd'))
  process.stdout.write("\nprompt > ");
}

module.exports = pwd;
