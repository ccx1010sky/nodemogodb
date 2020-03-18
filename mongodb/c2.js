var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //在数据库名mydb下创建c2集合，可在数据库中查看
  var dbo = db.db("mydb");
  dbo.createCollection("c2", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
