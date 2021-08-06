let mod = require("./pwd");
process.stdout.write("prompt > ");
process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();
    mod(cmd)
    process.stdout.write("\nprompt > ");
});
