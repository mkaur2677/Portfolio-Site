exports.projects = function (req, res, next) {
    res.render('projects', { 
        title: 'Projects',
        name:  'Project 1'
     });
  }

  exports.project1 = function (req, res, next) {
    res.render('projects', { 
        title: 'Project 1',
        name:  'DataBase backup script'
     });
  }