var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', myPath: path.resolve()});
});

router.get('/index', function (req, res, next) {
    res.sendFile(path.join(path.resolve(), "/views/html/index.html"));

})

module.exports = router;
