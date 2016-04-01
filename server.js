var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT||3000;



//GET is Http get
//app.get('/',function(req,res){
//
//   res.send('Hello Express!!');
//});

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('This is my About you page using express');
});

//Expose a folder
app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.listen(PORT,function(){

    console.log(new Date().toString() + ":Express Server Started On Port" + PORT +'!');
});
