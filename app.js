var express= require('express');
var http =require('http');

var app =express();

//port setting
app.set('port',process.env.PORT || 3000);


var server=http.createServer(app).listen(app.get('port'),function(){

    console.log('run by express'+app.get('port'));

});




