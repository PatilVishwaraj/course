var MongoClient = required("mongodb").MongoClient
var url = "mondodb://127.0.0.1/studentdb"
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log(err)
    } else {
        console.log("Database started succesfully")
    }
    db.close()
})