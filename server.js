var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication:function(req,res,next){
     console.log('Private Route Hit');
        next();
    },
    logger:function(req,res,next){
        console.log("Request:"+new Date().toString() +req.method +" "+req.originalUrl);
        next();
    }
};

//GET is Http get
//app.get('/',function(req,res){
//
//   res.send('Hello Express!!');
//});

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('About US!!');
});

//Expose a folder
app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.listen(PORT,function(){

    console.log(new Date().toString() + ":Express Server Started On Port" + PORT +'!');
});
