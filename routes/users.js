var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//TEMA EX

// porque no pueden estar los 2 ?
// el servidor no sabe cual elegir ya que tienen la 
//misma ruta
//no hacen lo mismo. send envia el mensaje
//render : carga el crud que se transforma hasta html



 /* GET users listing. */
 router.get('/', function(req, res, next) {
    
  /* 1. Renderización de la vista crud.ejs */
  res.render('crud');
   
});



module.exports = router;
