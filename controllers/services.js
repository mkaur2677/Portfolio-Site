exports.services = function (req, res, next) {
    res.render('services', { 
        title: 'services',
        name:  'services'
     });
  }

  exports.services1 = function (req, res, next) {
    res.render('services1', { 
        title: 'Services',
        name:  'DataBase backup script'
     });
  }