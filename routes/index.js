var express = require('express');
var router = express.Router();

// routing
router.get('/', function(req, res, next) {
    // res.send("Welcome to main page")
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render("about");
});

router.get('/weather', (req, res) => {
    res.render("weather");
});

router.get('*', (req, res) => {
    res.render("error404");
});


module.exports = router;