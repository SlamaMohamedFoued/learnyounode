const fs = require("fs");
const filepath = process.argv[2];
let output = undefined;
function retrieveData(callback) {
  fs.readFile(filepath, function doneReading(err, fileContents) {
    output = fileContents;
    output = output.toString().split(`\n`);
    callback();
  });
}

function CountTab() {
  console.log(output.length - 1);
}

retrieveData(CountTab);
