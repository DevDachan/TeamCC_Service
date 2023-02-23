var http = require('http');
var url = require('url');
var qs = require('querystring');
var db = require('./lib/db.js');
var admin = require('./lib/admin.js');
var user = require('./lib/user.js');

var session = require('express-session');
var express = require('express');
var app = express();
app.use(express.static('public'));

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

app.use(session({
  secret:"handongdevsecret",
  resave:false,
  saveUninitialized:true,
}));

//-------------------------- common - alert ------------------------------------
app.get('/alert_popup',function(request, response){
   admin.alert_popup(request, response);
});
app.get('/confirm_popup',function(request, response){
   admin.confirm_popup(request, response);
})

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


app.post('/admin_login', function(request, response){
  admin.login(request, response);
})


app.get('/admin_register',function(request, response){
  admin.register(request, response);
})

app.post('/admin_register_state',function(request, response){
  admin.register_state(request, response);
})

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


app.post('/admin_profile', function(request, response){
    admin.admin_profile(request,response);
});
app.get('/admin_profile', function(request, response){
    admin.admin_profile(request,response);
});


app.post('/admin_profile_check', function(request, response){
    admin.admin_profile_check(request,response);
});

app.post('/admin_update_state',upload.single('background_image'), function(request, response){
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

app.get('/activity_image', function(request,response){
  admin.activity_image(request,response);
})

app.get('/initialization_state', function(request, response){
   admin.initialization_state(request,response);
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

app.post('/change_color', function(request, response){
   admin.change_color(request,response);
});


app.post('/change_color_pick', function(request, response){
   admin.change_color_pick(request,response);
});

app.post('/change_title', function(request, response){
   admin.change_title(request,response);
});

app.post('/change_color_scoretext', function(request, response){
   admin.change_color_scoretext(request,response);
});


app.get('/change_url_state',function(request,response){
   admin.change_url_state(request,response);
})

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



app.get('/image_card',function(request,response){
   user.image_card(request,response);
})

app.post('/image_card',function(request,response){
   user.image_card(request,response);
})

app.listen(8080, function(){
  console.log('conneted 80 port!!');
});
