
var USER_FILE = path.join(__dirname, 'users.json');

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
    var file=null;
    if(collection=='rl_user'){
        file=USER_FILE;
    }
    if(file==null){
        err="file name not found";
        handleError(err);
    }
   fs.readFile(file, function(err, data) {
    if (err) {
      handleError(err);
    }
     console.log("Found the following records");
    console.log(data);
    callback(data);
   
  });
 
  });
});
}


var FileDb = {findAll:findAllDocuments,findById:findDocumentsById,error:handleError};

module.exports = FileDb;