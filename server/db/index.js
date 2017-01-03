var db=require('./file');


var DbAPI = {findAll:db.findAll,findById:db.findById,error:db.error};

module.exports = DbAPI;