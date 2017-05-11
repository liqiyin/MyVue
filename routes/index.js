var express = require('express');
var path = require('path');

var router = express.Router();
var temp_path = path.resolve(__dirname, '../public/html');

router.get('/', function (req, res) {
    res.sendFile(temp_path + '/vue_zhihu_login.html');
});

router.get('/vue', function (req, res) {
    res.sendFile(temp_path + '/vueTest.html');
});

module.exports = router;
