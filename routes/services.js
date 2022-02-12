var express = require('express');
var router = express.Router();
let servicesController = require('../controllers/services');

/* GET users listing. */
router.get('/services', servicesController.services );

module.exports = router;
