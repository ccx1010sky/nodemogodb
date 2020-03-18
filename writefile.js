//The fs.writeFile() method replaces the specified file and content:
var fs = require("fs");

fs.writeFile("mynewfile3.txt", "This is my text", function(err) {
  if (err) throw err;
  console.log("Replaced!");
});
