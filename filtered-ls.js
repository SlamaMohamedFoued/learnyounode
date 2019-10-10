var fs = require("fs");
var path = require("path");
var dot = process.argv[2];
var fileName = process.argv[3];

fs.readdir(dot, function(err, list) {
  if (err) {
    console.log(err);
  } else {
    list.forEach(function(item) {
      if (fileName === "*") {
        console.log(item.toString());
      } else if (path.extname(item) === "." + fileName) {
        console.log(item);
      }
    });
  }
});
