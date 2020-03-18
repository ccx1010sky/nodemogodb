// Include Main HTTP module
var http = require("http");

// formidable  install
// npm install formidable -g
//Include Formidable libarary for Upload Processing 
var formidable = require("formidable");

// Include file system module
var fs = require("fs");

// Create server for listening incoming connections
http
  .createServer(function(req, res) {

    // File upload check with requested url
    // req.url Returns the request URL string
    //req.url 表示The full path, including localhost:8080/, also including query parameters.
    //由于localhost:8080已经显示在地址栏
    //所以此处req.url 代表了当时浏览器的接收来自表格上传的值：fileupload
    if (req.url == "/fileupload") {
      
      // Create form object with formidable
      var form = new formidable.IncomingForm();

      // Parse the form
      form.parse(req, function(err, fields, files) {
        // Get old file path
        var oldpath = files.filetoupload.path;

        // Set new file path
        var newpath =
          "/Users/macbook/Desktop/nodejsdemo/uploadfile/" +
          files.filetoupload.name;

        // Move file from old path to new path
        fs.rename(oldpath, newpath, function(err) {
          // If any error then, throw it
          if (err) throw err;

          // Successfull confirmation
          res.write("File uploaded and moved!");

          res.end();
        });
      });
    } else {
      // Set header to text/html
      res.writeHead(200, { "Content-Type": "text/html" });

      // Write response with file upload form
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit" name="submitNodeJSUploader">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
