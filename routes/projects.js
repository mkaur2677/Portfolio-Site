var express = require('express');
var router = express.Router();
let proyectsController = require('../controllers/projects');

/* GET users listing. */
router.get('/projects', projectsController.projects );

router.get('/project1', '/julio',proyectsController.project1);
//  res.send('respond with a resource');
//});

module.exports = router;
