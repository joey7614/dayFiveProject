function pwd(data) {
  if ( data === "pwd") {
    process.stdout.write(process.cwd());
  }
  //process.stdout.write('You typed: ' + (cmd === 'pwd'))

}

module.exports = pwd;