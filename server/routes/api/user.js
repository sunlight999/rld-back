var router = require('express').Router();
var db=require('../../db');
var collection='rl_user';

// api/user
router.get('/', function(req, res) {
  
  var response=function(){
      
  };
  db.findAll(db,collection,response);
    
});

// api/user/:id
router.get('/:id', function(req, res) {

});

router.post('/', function(req, res) {
    
   
  });


router.put('/:id', function(req, res) {
   
  
 
});



module.exports = router;