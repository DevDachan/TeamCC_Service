var http = require('http');
var url = require('url');
var qs = require('querystring');
var db = require('./lib/db.js');
var admin = require('./lib/admin.js');
var user = require('./lib/user.js');


var express = require('express');
var app = express();
app.use(express.static('public'));


var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});
//-------------------------- admin.js  ------------------------------------
app.post('/', function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  admin.home(request,response,queryData);
});
app.get('/', function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  admin.home(request,response,queryData);
});

app.post('/admin_score', function(request, response){
  admin.score(request,response);
});
app.get('/admin_score', function(request, response){
  admin.score(request,response);
});


app.post('/admin_create', function(request, response){
   admin.create(request, response);
});
app.get('/admin_create', function(request, response){
   admin.create(request, response);
});


app.post('/admin_create/create_state', function(request, response){
   admin.create_state(request,response);
});

app.post('/admin_main', function(request, response){
    admin.main(request,response);
});
app.get('/admin_main', function(request, response){
    admin.main(request,response);
});


app.post('/admin_update_state', function(request, response){
    admin.update_state(request,response);
});


app.post('/activity_delete', function(request, response){
   admin.activity_delete(request,response);
});
app.get('/activity_delete', function(request, response){
   admin.activity_delete(request,response);
});


app.post('/activity_insert', function(request, response){
   admin.activity_insert(request,response);
});
app.get('/initialization', function(request, response){
   admin.initialization(request,response);
});
app.post('/url_insert', function(request, response){
   admin.url_insert(request,response);
});
app.post('/url_delete', function(request, response){
   admin.url_delete(request,response);
});




//--------------------------- user.js --------------------------------

app.post('/user', function(request, response){
  user.main(request, response,  request.query.id);
});
app.get('/user', function(request, response){
  user.main(request, response, request.query.id);
});



app.post('/user_delete', function(request, response){
   user.activity_delete(request,response,request.query.id);
});



app.get('/user_score', function(request, response){
   user.user_score(request,response);
});
app.post('/user_score', function(request, response){
   user.user_score(request,response);
});

app.post('/image_upload',upload.single('userfile'),function(request, response){
   user.image_upload(request,response,request.query.rand);
});
app.get('/image_upload',upload.single('userfile'),function(request, response){
   user.image_upload(request,response,request.query.rand);
});



app.listen(3000, function(){
  console.log('conneted 3000 port!!');
});
