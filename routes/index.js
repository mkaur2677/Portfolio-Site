var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET projects page. */
router.get('/projects',indexController.projects);

/* GET services page. */
router.get('/services',indexController.services);

/* GET about me page. */
router.get('/about',indexController.about);

/* GET contact me page. */
router.get('/contact',indexController.contact);

module.exports = router;
