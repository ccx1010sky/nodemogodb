var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient
//创建一个数据库mydb2,由于数据库i下还没有创建任何集合，所以该数据库（在命令shwo dbs中)不会被显现
var url = "mongodb://localhost:27017/mydb2"

MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("database is created")
    db.close()

})

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// })
