var MongoClient = require('mongodb').MongoClient;
var dbUrl= 'mongodb://localhost:27017/rld-core';  

var handleError=function(err){
     console.error(err);
      process.exit(1);
}

var findAllDocuments=function(db,collection, callback) {
findDocuments(db,collection,{}, callback);
}

var findDocumentsById=function(db,collection,id, callback) {
findDocuments(db,collection,{"_id":id}, callback);
}

var findDocuments = function(db,collection,filter, callback) {
      MongoClient.connect(dbUrl, function(err, dbConn) {
     if(err){
        handleError();
    }        
 
  console.log("Connected correctly to db");
  // Get the documents collection
  var collection = db.collection(collection);
  // Find some documents
  collection.find(filter).toArray(function(err, docs) {
    if(err){
        handleError();
    }  
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
});
}


var MongoDb = {client:MongoClient,url:dbUrl,findAll:findAllDocuments,findById:findDocumentsById,error:handleError};

module.exports = MongoDb;