var express = require('express');
var app = express(); 
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/album',function(req,res){
 res.sendFile(path.join(__dirname,'album.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/genres',function(req,res){
 res.sendFile(path.join(__dirname,'genres.html')); //__dirname : Ritorna la cartella del progetto
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});