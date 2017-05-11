var express = require('express');
var nunjucks = require('nunjucks');
var ejs = require('ejs');

var app = express();
app.set('views', './views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

var router = require('./routes/index');
app.use('/', router);

app.use(express.static('public'));
app.listen(3000);
console.log("listen 3000")
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
