var express = require('express');
var app = express();



// static하게 사용하게 될 dir 지정
app.use(express.static('public'));






// 사용자   -   라우터     -   컨트롤



//--------- 그냥 get 방식으로 특정 URL에 따른 response를 하는 방법 ------------
app.get('/', function(request, response){
  response.send("hello home page");
});


app.get('/login', function(request, response){
  response.send("Login please");
});




app.listen(3000, function(){

  console.log('conneted 3000!');

});
