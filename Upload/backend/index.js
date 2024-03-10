const express = require("express");
require('dotenv').config()
const cors = require('cors');
const engines = require('consolidate');
const path = require('path')
const parentDir = path.resolve(__dirname, '..');


const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());

app.use(express.json())

app.use(express.static(path.join(parentDir, '/')));

app.set('views', parentDir + '/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/about', function(req, res) {
    res.render('about2.html');
});
app.get('/portfolio', function(req, res) {
    res.render('portfolio2.html');
});
app.get('/portfolio-video', function(req, res) {
    res.render('portfolio-video.html');
});
app.get('/service', function(req, res) {
    res.render('services1.html');
});
app.get('/tesinomial', function(req, res) {
    res.render('testinomial.html');
});
app.get('/blog', function(req, res) {
    res.render('blog2.html');
});
app.get('/clients', function(req, res) {
    res.render('clients.html');
});
app.get('/contact', function(req, res) {
    res.render('contacts1.html');
});


console.log(parentDir, 'parentDir')
console.log(__dirname, 'dirname'),
app.listen(3000, () => {
  console.log("app is runningon port : " + PORT);
});
