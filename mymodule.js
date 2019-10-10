var fs = require("fs");
var path = require("path");
module.exports = function(dir, fileString, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);
    list = list.filter(function(file) {
      if (file === undefined) return null;
      return path.extname(file) === "." + fileString;
    });
    callback(null, list);
  });
};
