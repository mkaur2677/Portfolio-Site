exports.about = function (req, res, next) {
    res.render('about', { 
        title: 'About Me !!',
        name:  'about'
     });
  }
