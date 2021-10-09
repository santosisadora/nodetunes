var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Tunes' });
});

//GET: /about
router.get('/about', function(req, res, next) {
  res.render('about',
      {title:'About',
        content:'This is the content'

      })
  })

module.exports = router;
