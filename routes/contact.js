var express = require('express');
var router = express.Router();
let aboutController = require('../controllers/about');

/* GET users listing. */
router.get('/about', aboutController.about );

module.exports = router;