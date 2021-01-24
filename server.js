const express = require('express');
const app = express();
const bodyparder = require('body-parse');
app.use(bodyparder.urlencoded({ extended: true}))
app.listen(3000, function(){
    console.log('servidor rodando na porta 3000');
});
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.post('/show', function(req, res){
    res.render('index.ejs');
});

