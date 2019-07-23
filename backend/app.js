var express=require('express');
var app=express();
var path = require('path');

app.get('/app',function(req,res)
{
res.status(200).json({"key":"value"});
});

app.use('/' , express.static(path.join( __dirname , 'ui')));

app.use((req, res, next) =>{
	res.sendFile(__dirname , 'ui' , 'index.html');
});

var server=app.listen(3000,function() {
console.log("server started on local host 3000");
});