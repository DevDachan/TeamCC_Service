var http = require('http');
var url = require('url');
var qs = require('querystring');
var db = require('./lib/db.js');
var admin = require('./lib/admin.js');
var user = require('./lib/user.js');
var developer = require('./lib/developer.js');

var session = require('express-session');
var express = require('express');
var app = express();
app.use('/teamcc', express.static('public'));

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

app.use(session({
  secret:"handongdevsecret",
  resave:false,
  saveUninitialized:true,
}));

// --------- developer ---------
app.get('/teamcc/developer', function(request, response){
   developer.developer(request, response);
 })
app.post('/teamcc/developer', function(request, response){
   developer.developer(request, response);
})

app.post('/teamcc/developer/login_action', function(request, response){
   developer.developerLogin_action(request, response);
})

app.post('/teamcc/developer/admin_main', function(request, response){
   developer.developer_main(request,response);
});
app.get('/teamcc/developer/admin_main', function(request, response){
   developer.developer_main(request,response);
});

//-------------------------- admin.js  ------------------------------------
app.post('/teamcc/', function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  admin.login(request,response,queryData);
});
app.get('/teamcc/', function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  admin.login(request,response,queryData);
});

app.post('/teamcc/login_action', function(request, response){
  admin.login_action(request, response);
})

app.get('/teamcc/admin_register',function(request, response){
  admin.register(request, response);
})

app.post('/teamcc/admin_register_state',function(request, response){
  admin.register_state(request, response);
})

app.post('/teamcc/admin_score', function(request, response){
  admin.score(request,response);
});
app.get('/teamcc/admin_score', function(request, response){
  admin.score(request,response);
});


app.post('/teamcc/admin_create', function(request, response){
   admin.create(request, response);
});
app.get('/teamcc/admin_create', function(request, response){
   admin.create(request, response);
});


app.post('/teamcc/admin_create/create_state', function(request, response){
   admin.create_state(request,response);
});

app.post('/teamcc/admin_main', function(request, response){
    admin.main(request,response);
});
app.get('/teamcc/admin_main', function(request, response){
    admin.main(request,response);
});


app.post('/teamcc/admin_profile', function(request, response){
    admin.admin_profile(request,response);
});
app.get('/teamcc/admin_profile', function(request, response){
    admin.admin_profile(request,response);
});


app.post('/teamcc/admin_profile_check', function(request, response){
    admin.admin_profile_check(request,response);
});

app.post('/teamcc/admin_update_state',upload.single('background_image'), function(request, response){
    admin.update_state(request,response);
});


app.post('/teamcc/activity_delete', function(request, response){
   admin.activity_delete(request,response);
});
app.get('/teamcc/activity_delete', function(request, response){
   admin.activity_delete(request,response);
});


app.post('/teamcc/activity_insert', function(request, response){
   admin.activity_insert(request,response);
});

app.get('/teamcc/activity_image', function(request,response){
  admin.activity_image(request,response);
})

app.get('/teamcc/initialization_state', function(request, response){
   admin.initialization_state(request,response);
});
app.get('/teamcc/initialization', function(request, response){
   admin.initialization(request,response);
});
app.post('/teamcc/url_insert', function(request, response){
   admin.url_insert(request,response);
});
app.post('/teamcc/url_delete', function(request, response){
   admin.url_delete(request,response);
});

app.post('/teamcc/change_color', function(request, response){
   admin.change_color(request,response);
});


app.post('/teamcc/change_color_pick', function(request, response){
   admin.change_color_pick(request,response);
});

app.post('/teamcc/change_title', function(request, response){
   admin.change_title(request,response);
});

app.post('/teamcc/change_color_scoretext', function(request, response){
   admin.change_color_scoretext(request,response);
});


app.get('/teamcc/change_url_state',function(request,response){
   admin.change_url_state(request,response);
})

//--------------------------- user.js --------------------------------

app.post('/teamcc/user', function(request, response){
  user.main(request, response,  request.query.id);
});
app.get('/teamcc/user', function(request, response){
  user.main(request, response, request.query.id);
});

app.post('/teamcc/user_delete', function(request, response){
   user.activity_delete(request,response,request.query.id);
});


app.get('/teamcc/user_score', function(request, response){
   user.user_score(request,response);
});
app.post('/teamcc/user_score', function(request, response){
   user.user_score(request,response);
});

app.post('/teamcc/image_upload',upload.single('userfile'),function(request, response){
   user.image_upload(request,response,request.query.rand);
});
app.get('/teamcc/image_upload',upload.single('userfile'),function(request, response){
   user.image_upload(request,response,request.query.rand);
});



app.get('/teamcc/image_card',function(request,response){
   user.image_card(request,response);
})

app.post('/teamcc/image_card',function(request,response){
   user.image_card(request,response);
})

app.listen(8080, function(){
  console.log('conneted 80 port!!');
});
