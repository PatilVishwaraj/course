var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1/proddb";
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database started succesfully!");
  }
  db.close();
});
