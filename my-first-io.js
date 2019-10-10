const fs = require("fs");
const fileChemin = process.argv[2];
var output = fs.readFileSync(fileChemin);
output = output.toString().split(`\n`);
console.log(output.length - 1);
