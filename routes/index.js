var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('page/index',
    {
      title: 'Asoview Viet Nam',
      linkCss: '/css/pages/index.min.css',
      linkJS:'js/pages/index.js'
    });
});

router.get('/staff', function (req, res, next) {
  res.render('page/staff',
    {
      title: 'Staff of Company',
      linkCss: '/css/pages/staff.min.css',
      linkJS:'js/pages/staff.js'
    })
})

router.get('/contact', function (req, res, next) {
  res.render('page/contact',
    {
      title: 'Contact Us',
      linkCss: '/css/pages/contact.min.css',
      linkJS:'js/pages/contact.js'
    })
})

router.get('/career', function (req, res, next) {
  res.render('page/career',
    {
      title: 'Career',
      linkCss: '/css/pages/career.min.css',
      linkJS:'js/pages/career.js'
    })
})

router.get('/about-us', function (req, res, next) {
  res.render('page/about-us',
    {
      title: 'About Us',
      linkCss: '/css/pages/about-us.min.css',
      linkJS:'js/pages/about-us.js'
    })
})

router.get('/news', function (req, res, next) {
  res.render('page/news',
    {
      title: 'Asoview New',
      linkCss: '/css/pages/news.min.css',
      linkJS:'js/pages/news.js'
    })
})

router.get('/services', function (req, res, next) {
  res.render('page/services',
    {
      title: 'Services',
      linkCss: '/css/pages/services.min.css',
      linkJS:'js/pages/services.js'
    })
})


module.exports = router;
