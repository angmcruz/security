var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

 /* 1. Cargue los modelos de acuerdo con la configuración de la conexión */
 const sequelize = require('../models/index.js').sequelize;
 var initModels = require("../models/init-models");
 var models = initModels( sequelize );  


//TEMA EX

// porque no pueden estar los 2 ?
// el servidor no sabe cual elegir ya que tienen la 
//misma ruta
//no hacen lo mismo. send envia el mensaje
//render : carga el crud que se transforma hasta html


 /* GET users listing. */
 /* 2. Convierta el callback en asíncrono */
 router.get('/', async function(req, res, next) {

  /* 3. Uso del método findAll */
  let usersCollection = await models.users.findAll({ })

  /* 4. Paso de parámetros a la vista */
  res.render('crud', { title: 'CRUD with users', usersArray: usersCollection });

});

module.exports = router;


module.exports = router;
