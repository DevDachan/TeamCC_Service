var http = require('http');
var db = require('./db.js');
var template_admin = require('./template_admin.js');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
var express = require('express');
var multer = require('multer');
var app = express();
app.use(express.static('public'));

exports.alert_popup = function(request, response){
  var content = request.query.content;
  var html = template_admin.popup_HTML(content);
  response.writeHead(200);
  response.end(html);
}

exports.confirm_popup = function(request, response){
  var content = request.query.content;

  var html = template_admin.popupConfirm_HTML(content);
  response.writeHead(200);
  response.end(html);
}

exports.register = function(request, response){
  var html = template_admin.HTML_register();
  response.writeHead(200);
  response.end(html);
}

exports.register_state = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);

    if(post.pwd1 !== post.pwd2){
      var err_html = `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <script>
              window.open('http://handongapp.cafe24.com/alert_popup?content=비밀번호가 일치하지 않습니다. 다시 확인해주세요!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
              location.href = 'http://handongapp.cafe24.com/admin_register';
            </script>
          </body>
        </html>`;
      response.writeHead(200);
      response.end(err_html);

    }else{
      db.query('SELECT * FROM admin WHERE id=?', [post.id], function(error, result){  if(error){throw error;}
        if(result[0] !== undefined){
          var err_html = `
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <script>
                  window.open('http://handongapp.cafe24.com/alert_popup?content=이미 존재하는 아이디입니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
                  location.href = 'http://handongapp.cafe24.com/admin_register';
                </script>
              </body>
            </html>`;
          response.writeHead(200);
          response.end(err_html);

        }else{
          db.query('INSERT INTO admin VALUES(?,?)',[post.id, post.pwd1],function(error2, result2){  if(error2){throw error2}
            request.session.uid = post.id;
            request.session.isLogined = true;
            request.session.save(function(){
              response.redirect('/admin_create');
            });//session.save
          });//db.query(INSERT)
        }//else
      });//db.query(SELECT)
    }//else
  });//request.on('end')
}

exports.login = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var alert = ``;
    var post = qs.parse(body);

    db.query('SELECT * FROM admin WHERE id =? AND password=?',[post.id, post.pwd], function(error, result){  if(error){throw error;}
      db.query('SELECT * FROM admin WHERE id =?', [post.id], function(error2, id_result){  if(error2){throw error2;}
        if(result[0]!== undefined){
          db.query('SELECT * FROM team_info WHERE admin_id=?', [post.id], function(error3, team_ex){  if(error3){throw error3}
            if(team_ex[0] !== undefined){
              request.session.uid = post.id;
              request.session.isLogined = true;
              request.session.save(function(){
                response.redirect('/admin_main');
              });
            }else{
              request.session.uid = post.id;
              request.session.isLogined = true;
              request.session.save(function(){
                response.redirect('/admin_create');
              });
            }//if(team_ex[0])
          });//db.query(SELECT team_info)

        }else if(id_result[0] !== undefined){
          alert = `
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <script>
                  window.open('http://handongapp.cafe24.com/alert_popup?content=비밀번호를 다시 확인해주세요!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
                  location.href = 'http://handongapp.cafe24.com/';
                </script>
              </body>
            </html>`;
          response.writeHead(200);
          response.end(alert);

        }else{
          alert = `
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <script>
                  window.open('http://handongapp.cafe24.com/alert_popup?content=등록되지 않은 사용자입니다.<br>회원가입 후 이용해주세요!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
                  location.href = 'http://handongapp.cafe24.com/';
                </script>
              </body>
            </html>`;
          response.writeHead(200);
          response.end(alert);
        }//else
      });//db.query(SELECT admin)
    });//db.query(SELECT admin password)
  });//request.on('end')
}
//-------------------------------------------------

exports.activity_image = function(request,response){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;
      response.writeHead(200);
      response.end(alert);

  }else{
    db.query(`SELECT * FROM activity LEFT JOIN color USING(admin_id,score) WHERE admin_id=? AND score <> "background" AND score NOT LIKE("%color%") AND score NOT LIKE("%text%") ORDER BY CAST(score AS SIGNED)`,[request.session.uid], function(error2,activity){ if(error2){throw error2;}
      db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error3, team_info){  if(error3){throw error3;}
        db.query(`SELECT * FROM (SELECT * FROM color WHERE admin_id=?) AS K WHERE score LIKE('%background%') OR score LIKE('%score_color%') OR score LIKE('%title_color%') ORDER BY CAST(score AS SIGNED)`,[request.session.uid],function(error4,color_db){  if(error4){throw error4;}
          db.query(`SELECT * FROM color WHERE admin_id=? AND score LIKE('%text%') ORDER BY CAST(score AS SIGNED)`,[request.session.uid],function(error5, text_color_db){ if(error5){throw error5;}
            db.query(`SELECT * FROM color WHERE admin_id=? AND score NOT LIKE('%text%') AND score NOT LIKE("background") AND score NOT LIKE("%color%") ORDER BY CAST(score AS SIGNED)`,[request.session.uid],function(error6, score_color_db){ if(error6){throw error6;}

              var html = template_admin.image_HTML(activity,team_info[0],color_db,request.session.uid,text_color_db,score_color_db);

              response.writeHead(200);
              response.end(html);
            })//db.query(SELECT score_color)
          })//db.query(SELECT text_color)
        })//db.query(SELECT color)
      });//db.query(SELECT team_info)
    });//db.query(SELECT activity)
  }//else
}

exports.change_color_pick = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`UPDATE color SET admin_id=? , color='${post.color}' WHERE admin_id =? AND score=?`,[request.session.uid,request.session.uid, post.score],function(error, color){  if(error){throw error;}
      response.writeHead(200);
      response.end("1");
    });
  });
}

exports.change_title = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`UPDATE team_info SET title=? WHERE admin_id=? `,[post.title,request.session.uid],function(error, color){  if(error){throw error;}
      response.writeHead(200);
      response.end("1");
    });
  });
}

exports.change_color_scoretext = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`UPDATE color SET admin_id=? , color='${post.color}' WHERE admin_id =? AND score=?`,[request.session.uid,request.session.uid, post.score],function(error, color){  if(error){throw error;}
      response.writeHead(200);
      response.end("1");
    });
  });
}



//-------------------- home = 시작화면 ---------------------------
exports.home = function(request, response,queryData){
  db.query(`SELECT * FROM activity`, function(error, activity){  if(error){throw error;}
    db.query(`SELECT * FROM count WHERE id='admin' ORDER BY year DESC,month DESC,day DESC`,function(error2,count){  if(error2){throw error2;}
      db.query(`UPDATE count SET count=? WHERE id='admin' AND year=? AND month=? AND day=?`,[Number(count[0].count)+1, count[0].year, count[0].month, count[0].day],function(error3,state){  if(error3){throw error3;}

        request.session.uid = null;
        request.session.isLogined = false;
        request.session.save(function(){});
        var html = template_admin.home_HTML();
        response.writeHead(200);
        response.end(html);
      });//db.query(SELECT activity)
    });//db.query(SELECT count)
  });//db.query(UPDATE count)
}

exports.admin_profile = function(request, response,queryData){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;
      response.writeHead(200);
      response.end(alert);

  }else{
    db.query(`SELECT * FROM admin WHERE id=?`, [request.session.uid], function(error1, admin_info){  if(error1){throw error1;}
        var html = template_admin.profile_HTML(admin_info[0]);
        response.writeHead(200);
        response.end(html);
    });//db.query(SELECT admin)
  }
}

exports.admin_profile_check = function(request, response,queryData){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`SELECT password FROM admin WHERE id=?`,[request.session.uid],function(error1, admin_pwd){
      if(post.curpwd === admin_pwd[0].password){
        if(post.newpwd === post.newpwd2){
          db.query(`UPDATE admin SET password=? WHERE id=?`,[post.newpwd,request.session.uid],function(error2, result){
            response.writeHead(200);
            response.end("Success");
          });
        }else{
          response.writeHead(200);
          response.end("newPassowrdError");
        }
      }else{
        response.writeHead(200);
        response.end("curPassowrdError");
      }
    })
  });
}


//---------------------- score board ----------------------------------------------------
exports.score = function(request,response){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;

    response.writeHead(200);
    response.end(alert);

  }else{
    db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function(error,team_info){  if(error){throw error;}
      db.query(`SELECT DISTINCT cc.admin_id,team_num,activity_id,image,size,mimetype,id,activity,score  FROM cc LEFT JOIN activity ON activity.id = cc.activity_id WHERE cc.admin_id=? AND activity.admin_id=? ORDER BY CAST(team_num AS SIGNED),CAST(activity_id AS SIGNED)`,[request.session.uid,request.session.uid] ,function(error2, cc){  if(error2){throw error2;}
        db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY CAST(id AS SIGNED)`,[request.session.uid] , function(error3,activity){  if(error3){throw error3;}
          var body = `
            <tr>
              <td width="200" class="top">TEAM</td>
              <td width="200" class="top">SCORE</td>
              <td width="150" class="top_rank">RANK</td>
            </tr>
            <br />`;

          // calculate total score
          var total_score = [];
          for(var k = 0; k< team_info[0].num; k++){
            total_score.push(0);
          }
          for(var i = 0; i < cc.length; i++){
            total_score[Number(cc[i].team_num-1)] = Number(total_score[Number(cc[i].team_num-1)]) + Number(cc[i].score);
          }

          var rank = [];
          var temp = true;
          for(var i = 0; i < total_score.length; i++){
            for(var k = 0; k<rank.length; k++){
              if(total_score[i] === rank[k]){
                temp = false;
              }
            }
            if(temp){
              rank.push(total_score[i]);
            }
            temp = true;
          }

          for(var i = 0; i< rank.length; i++){
            var temp = 0;
            for(var k = 0; k <rank.length; k++){
              if(i!== k  && rank[i] > rank[k]){
                temp = rank[i];
                rank[i] = rank[k];
                rank[k] = temp;
              }
            }
          }

          var rank_img = [];
          var rank_str = [];
          for(var i = 0 ; i < total_score.length ; i++){
            if(rank[0]!==0 &&  total_score[i] === rank[0]){
              rank_img[i] = "https://ifh.cc/g/onTKvR.png";
              rank_str[i] = "1 등";

            }else if(rank[1]!==0 && total_score[i] === rank[1]){
              rank_img[i] = "https://ifh.cc/g/p25ONc.png";
              rank_str[i] = "2 등";

            }else if(rank[2]!==0 && total_score[i] === rank[2]){
              rank_img[i] = "https://ifh.cc/g/qQVoY8.png";
              rank_str[i] = "3 등";
            }else{
              rank_img[i] = "https://ifh.cc/g/A9R7RY.png";
              rank_str[i] = "";
            }
          }

          for(var k = 0; k< team_info[0].num; k++){
            body += `
            <tr>
              <td width="200">Team ${k+1}</td>
              <td width="150" class="mid">${total_score[k]} 점</td>
              <td width="150" class="mid"><img src=${rank_img[k]} width="40"> ${rank_str[k]}</td>
            </tr>`;
          }
          body = `<table border="1" style="margin:auto;">${body}</table>`;

          var html = template_admin.score_HTML(body,team_info);

          response.writeHead(200);
          response.end(html);
        });//db.query(SELECT activity)
      });//db.query(SELECT cc)
    });//db.query(SELECT team_info)
  }//else
}

//---------------------- create team cc ----------------------------------------------------
exports.create = function(request, response){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;
    response.writeHead(200);
    response.end(alert);
  }else{
    var html = template_admin.HTML_create();
    response.writeHead(200);
    response.end(html);
  }
}

function id_check(arr){
  var id = 1;
  for(var i = 0; i < arr.length; i++){
    if( Number(arr[0].id) > 1){
      id = 1;
      break;
    }

    if(i+1 < arr.length){
      if(Number(arr[i+1].id) - Number(arr[i].id) > 1 ){
        id = Number(arr[i].id)+1;
        break;
      }
    }else if(i === arr.length-1){
      id += Number(arr[i].id);
    }
  };
  return id;
}

function team_num_check(arr){
  var team_num = 1;
  for(var i = 0; i < arr.length; i++){
    if( Number(arr[0].team_num) > 1){
      team_num = 1;
      break;
    }
    if(i+1 < arr.length){
      if(Number(arr[i+1].team_num) - Number(arr[i].team_num) > 1 ){
        team_num = Number(arr[i].team_num)+1;
        break;
      }

    }else if(i === arr.length-1){
      team_num += Number(arr[i].team_num);
    }
  };
  return team_num;
}

function random(random_url, len){
  var temp = 0;
  for(var i = 0; i<len; i++){
    temp = Math.random().toString(36).substring(2, 10);
    if(random_url.indexOf(temp) === -1){
      random_url.push(temp);
    }else{
      i--;
    }
  }
  return random_url;
}


//---------------------- initialization all data ----------------------------------------------------
/*
exports.initialization_state = function(request, response){
  var alert = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <script>
          window.open('http://handongapp.cafe24.com/confirm_popup?content=모든 팀 CC 활동들을 삭제하시겠습니까?<br>(복구 불가능)', '팝업 테스트', 'width=460, height=200, top=10, left=100');
          // var result = confirm("모든 팀 CC 활동들을 삭제하시겠습니까? (복구 불가능)");
          // if(result === true){
          //   alert('모든 팀 CC 활동이 삭제되었습니다');
          //   location.href = 'http://handongapp.cafe24.com/initialization';
	        // }else{
          //   location.href = 'http://handongapp.cafe24.com/admin_main';
	        // }
        </script>
      </body>
    </html>`;
    response.writeHead(200);
    response.end(alert);
}
*/


exports.initialization = function(request,response){
  request.on('data', function(data){});
  request.on('end', function(){
    db.query(`DELETE FROM url WHERE admin_id=?;`,[request.session.uid], function(error, result){  if(error){throw error;}  });
    db.query(`DELETE FROM team_info WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}  });
    db.query(`DELETE FROM activity WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}});
    db.query(`DELETE FROM cc WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}  });
    db.query(`DELETE FROM color WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}  });

    response.writeHead(302,{Location:`/admin_create`});
    response.end();
  });
}

//---------------------- main 화면  ----------------------------------------------------
exports.main = function(request,response){
  var alertFlag = '';
  if(request.session.uid === undefined){ // 세션 정보 없을 때 
    alertFlag = 'noSession';
  } else{ // 세션 정보 있을 때 
    alertFlag = 'yesSession';
  }

  db.query(`SELECT * FROM count WHERE id='admin' ORDER BY year DESC,month DESC,day DESC`,function(error1,count){  if(error1){throw error1;}
      db.query(`UPDATE count SET count=? WHERE id='admin' AND year=? AND month=? AND day=?`,[Number(count[0].count)+1,count[0].year, count[0].month, count[0].day],function(error2,state){  if(error2){throw error2;}
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid], function(error3,team_info){  if(error3){throw error3;}
          db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY CAST(score AS SIGNED)`,[request.session.uid], function(error4,activity){  if(error4){throw error4;}
            db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY CAST(id AS SIGNED)`,[request.session.uid], function(error5,activity_2){  if(error5){throw error5;}
              db.query(`SELECT * FROM url WHERE admin_id=? ORDER BY CAST(team_num AS SIGNED)`,[request.session.uid], function(error6,url){  if(error6){throw error6;}
                db.query(`SELECT * FROM admin WHERE id=?`, [request.session.uid], function(error7, admin_info){  if(error7){throw error7;}
                  var activity_id = id_check(activity_2);
                  var url_team_num =team_num_check(url);
                  var html = template_admin.main_HTML(team_info, activity_id, activity, url, url_team_num, admin_info[0], alertFlag);
                  response.writeHead(200);
                  response.end(html);
    });});});});});});});
}

//--------------------------------   create team cc state    ----------------------------------------
exports.create_state = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error1, team_info){  if(error1){throw error1;}
      if(team_info.length > 0){
        var alert = `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>ERROR</h1>
            <script>
              window.open('http://handongapp.cafe24.com/alert_popup?content=이미 등록된 팀 정보가 존재합니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
              location.href = 'http://handongapp.cafe24.com/admin_main';
            </script>
          </body>
        </html>`;
        response.writeHead(200);
        response.end(alert);
      }else{
        db.query(`INSERT INTO team_info VALUES(?,?,?,NULL,NULL,"Yes")`,[request.session.uid, post.team_title+' TEAM CC', post.team_num],function(error2, result){  if(error2){throw error2;}
          db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"background", "#dda0dd"],function(error3, result){  if(error3){throw error3;}
            db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"title_color", "#ffffff"],function(error4, result){  if(error4){throw error4;}
              db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"score_color", "#000000"],function(error6, result){  if(error6){throw error6;}
                var random_url = [];
                random_url = random(random_url,post.team_num);
                for(var i = 0 ; i < post.team_num; i++){
                  db.query(`INSERT INTO url (admin_id,team_num, url) VALUES(?,?,?)`,[request.session.uid,i+1, random_url[i]],function(error7, result){  if(error7){throw error7;}  });
                }

                response.writeHead(302,{Location:`/admin_main`});
                response.end();
        });});});});
      }//else
    });//db.query(SELECT team_info)
  });//request.on('end')
}



//--------------------------  update information     ------------------------------------------
exports.update_state = function(request, response){
  var post = request.body;

  if(request.file === undefined){
    db.query(`UPDATE team_info SET title=? WHERE admin_id = ?`, [post.team_title, request.session.uid], function(error1, result){  if(error1){throw error1;}
      response.redirect('/admin_main');
    });//db.query(UPDATE team_info)
  }else{
    const base64image = Buffer.from(request.file.buffer).toString('base64');
    db.query(`UPDATE team_info SET title=?, background_image=?, background_mimetype=? WHERE admin_id =?`, [post.team_title, base64image,request.file.mimetype ,request.session.uid ], function(error1, result){  if(error1){throw error1;}
        response.redirect('/admin_main');
      });//db.query(UPDATE admin)
  }//else
}

//---------------------------     activity list edit           ---------------------------------------

exports.activity_delete = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var score = 0;
    db.query(`SELECT * FROM activity WHERE admin_id=? AND  id=?`, [request.session.uid,post.id],function(error1, activity){  if(error1){throw error1;}
      score = activity[0].score;
      db.query(`DELETE FROM activity WHERE admin_id=? AND  id=?`, [request.session.uid,post.id],function(error2, reuslt){  if(error2){throw error2;}
        db.query(`SELECT * FROM activity WHERE admin_id=? AND score=?`,[request.session.uid,score],function(error3,same_score){  if(error3){throw error3;}
          if(same_score.length == 0){
            var score_text = score + '_text';
            db.query(`DELETE FROM color WHERE admin_id=? AND score=? OR admin_id=? AND score LIKE(?)`,[request.session.uid, score,request.session.uid,score_text],function(error4, result2){  if(error4){throw error4;}
              response.writeHead(302, {Location: `/admin_main`});
              response.end();
            });
          }else{
            response.writeHead(302, {Location: `/admin_main`});
            response.end();
          }
        });//db.query(SELECT activity score)
      });//db.query(DELETE activity)
    });//db.query(SELECT activity id)
  });//request.on('end')
}

exports.activity_insert = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`INSERT INTO activity (id,admin_id, activity,score ) VALUES(?,?,?,?)`, [post.id,request.session.uid ,post.activity,post.score], function(error1, result){  if(error1){throw error1;}
      db.query(`SELECT * FROM color WHERE score=? AND admin_id=?`,[post.score,request.session.uid],function(error2, result2){  if(error2){throw error2;}

        if(result2.length === 0){
          db.query(`INSERT INTO color (admin_id,score,color) VALUES(?,?,?)`,[request.session.uid, post.score, 'black'],function(error3,result3){  if(error3){throw error3;}
            db.query(`INSERT INTO color (admin_id,score,color) VALUES(?,?,?)`,[request.session.uid, post.score+'_text', 'white'],function(error4,result4){  if(error4){throw error4;}
              response.writeHead(302,{Location:`/admin_main`});
              response.end();
            });
          });
        }else{
          response.writeHead(302,{Location:`/admin_main`});
          response.end();
        }//else
      });//db.query(SELECT color)
    });//db.query(INSERT activity)
  });//request.on('end')
}

//--------------------------------   url list edit      ---------------------------------------

exports.url_delete = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`DELETE FROM url WHERE admin_id =? AND team_num=?`, [request.session.uid,post.id],function(error1, reuslt){  if(error1){throw error1;}
      db.query(`DELETE FROM cc WHERE admin_id =? AND team_num=? `,[request.session.uid,post.id],function(error2, cc){  if(error2){throw error2;}
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function (error3, team_info){  if(error3){throw error3;}
          db.query(`UPDATE team_info SET title=?, num=? WHERE admin_id=? AND title=?`, [team_info[0].title, Number(team_info[0].num)-1,request.session.uid ,team_info[0].title], function (error4, result){  if(error4){throw error4;}
            response.writeHead(302, {Location: `/admin_main`});
            response.end();
    });});});});});
}

exports.url_insert = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var random_url = [];
    var url_length = 0;
    db.query(`SELECT * FROM url` ,function(error1, url){  if(error1){throw error1;}
      url_length = Number(url.length);
      for(var i = 0; i< url.length; i++){
        random_url.push(url[i].url);
      }

      random_url = random(random_url,1);
      db.query(`INSERT INTO url (admin_id, team_num, url) VALUES(?,?,?)`, [request.session.uid, post.id, random_url[url_length]], function(error2, result){  if(error2){throw error2;}
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function (error3, team_info){  if(error3){throw error3;}
          db.query(`UPDATE team_info SET title=?, num=? WHERE admin_id =? AND title=?`,[team_info[0].title, Number(team_info[0].num)+1, request.session.uid,team_info[0].title], function (error4, result){  if(error4){throw error4;}
            response.writeHead(302,{Location:`/admin_main`});
            response.end();
      });});});
    });//db.query(SELECT url)
  });//request.on('end')
}



exports.change_url_state = function(request,response){
  var post = request.query;
  db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error1,info){  if(error1){throw error1;}

    if(info[0].state === "Yes"){
      db.query(`UPDATE team_info SET state='No' WHERE admin_id=?`,[request.session.uid],function(error2,state){  if(error2){throw error2;}
        response.writeHead(302, {Location:`/admin_main`});
        response.end();
      });
    }else {
      db.query(`UPDATE team_info SET state='Yes' WHERE admin_id=?`,[request.session.uid],function(error3,state2){  if(error3){throw error3;}
        response.writeHead(302, {Location:`/admin_main`});
        response.end();
      });
    }
  });
}
var http = require('http');
var db = require('./db.js');
var template_admin = require('./template_admin.js');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
var express = require('express');
var multer = require('multer');
var app = express();
app.use(express.static('public'));

exports.alert_popup = function(request, response){
  var content = request.query.content;
  var html = template_admin.popup_HTML(content);
  response.writeHead(200);
  response.end(html);
}

exports.confirm_popup = function(request, response){
  var content = request.query.content;

  var html = template_admin.popupConfirm_HTML(content);
  response.writeHead(200);
  response.end(html);
}

exports.register = function(request, response){
  var html = template_admin.HTML_register();
  response.writeHead(200);
  response.end(html);
}

exports.register_state = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);

    if(post.pwd1 !== post.pwd2){
      var err_html = `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>ERROR</h1>
            <script>
              window.open('http://handongapp.cafe24.com/alert_popup?content=비밀번호가 일치하지 않습니다. 다시 확인해주세요!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
              location.href = 'http://handongapp.cafe24.com/admin_register';
            </script>
          </body>
        </html>`;
      response.writeHead(200);
      response.end(err_html);

    }else{
      db.query('SELECT * FROM admin WHERE id=?', [post.id], function(error, result){  if(error){throw error;}
        if(result[0] !== undefined){
          var err_html = `
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <script>
                  window.open('http://handongapp.cafe24.com/alert_popup?content=이미 존재하는 아이디입니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
                  location.href = 'http://handongapp.cafe24.com/admin_register';
                </script>
              </body>
            </html>`;
          response.writeHead(200);
          response.end(err_html);

        }else{
          db.query('INSERT INTO admin VALUES(?,?)',[post.id, post.pwd1],function(error2, result2){  if(error2){throw error2}
            request.session.uid = post.id;
            request.session.isLogined = true;
            request.session.save(function(){
              response.redirect('/admin_create');
            });//session.save
          });//db.query(INSERT)
        }//else
      });//db.query(SELECT)
    }//else
  });//request.on('end')
}

exports.login = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var alert = ``;
    var post = qs.parse(body);

    db.query('SELECT * FROM admin WHERE id =? AND password=?',[post.id, post.pwd], function(error, result){  if(error){throw error;}
      db.query('SELECT * FROM admin WHERE id =?', [post.id], function(error2, id_result){  if(error2){throw error2;}
        if(result[0]!== undefined){
          db.query('SELECT * FROM team_info WHERE admin_id=?', [post.id], function(error3, team_ex){  if(error3){throw error3}
            if(team_ex[0] !== undefined){
              request.session.uid = post.id;
              request.session.isLogined = true;
              request.session.save(function(){
                response.redirect('/admin_main');
              });
            }else{
              request.session.uid = post.id;
              request.session.isLogined = true;
              request.session.save(function(){
                response.redirect('/admin_create');
              });
            }//if(team_ex[0])
          });//db.query(SELECT team_info)

        }else if(id_result[0] !== undefined){
          alert = `
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <script>
                  window.open('http://handongapp.cafe24.com/alert_popup?content=비밀번호를 다시 확인해주세요!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
                  location.href = 'http://handongapp.cafe24.com/';
                </script>
              </body>
            </html>`;
          response.writeHead(200);
          response.end(alert);

        }else{
          alert = `
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <script>
                  window.open('http://handongapp.cafe24.com/alert_popup?content=등록되지 않은 사용자입니다.<br>회원가입 후 이용해주세요!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
                  location.href = 'http://handongapp.cafe24.com/';
                </script>
              </body>
            </html>`;
          response.writeHead(200);
          response.end(alert);
        }//else
      });//db.query(SELECT admin)
    });//db.query(SELECT admin password)
  });//request.on('end')
}
//-------------------------------------------------

exports.activity_image = function(request,response){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;
      response.writeHead(200);
      response.end(alert);

  }else{
    db.query(`SELECT * FROM activity LEFT JOIN color USING(admin_id,score) WHERE admin_id=? AND score <> "background" AND score NOT LIKE("%color%") AND score NOT LIKE("%text%") ORDER BY CAST(score AS SIGNED)`,[request.session.uid], function(error2,activity){ if(error2){throw error2;}
      db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error3, team_info){  if(error3){throw error3;}
        db.query(`SELECT * FROM (SELECT * FROM color WHERE admin_id=?) AS K WHERE score LIKE('%background%') OR score LIKE('%score_color%') OR score LIKE('%title_color%') ORDER BY CAST(score AS SIGNED)`,[request.session.uid],function(error4,color_db){  if(error4){throw error4;}
          db.query(`SELECT * FROM color WHERE admin_id=? AND score LIKE('%text%') ORDER BY CAST(score AS SIGNED)`,[request.session.uid],function(error5, text_color_db){ if(error5){throw error5;}
            db.query(`SELECT * FROM color WHERE admin_id=? AND score NOT LIKE('%text%') AND score NOT LIKE("background") AND score NOT LIKE("%color%") ORDER BY CAST(score AS SIGNED)`,[request.session.uid],function(error6, score_color_db){ if(error6){throw error6;}

              var html = template_admin.image_HTML(activity,team_info[0],color_db,request.session.uid,text_color_db,score_color_db);

              response.writeHead(200);
              response.end(html);
            })//db.query(SELECT score_color)
          })//db.query(SELECT text_color)
        })//db.query(SELECT color)
      });//db.query(SELECT team_info)
    });//db.query(SELECT activity)
  }//else
}

exports.change_color_pick = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`UPDATE color SET admin_id=? , color='${post.color}' WHERE admin_id =? AND score=?`,[request.session.uid,request.session.uid, post.score],function(error, color){  if(error){throw error;}
      response.writeHead(200);
      response.end("1");
    });
  });
}

exports.change_title = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`UPDATE team_info SET title=? WHERE admin_id=? `,[post.title,request.session.uid],function(error, color){  if(error){throw error;}
      response.writeHead(200);
      response.end("1");
    });
  });
}

exports.change_color_scoretext = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`UPDATE color SET admin_id=? , color='${post.color}' WHERE admin_id =? AND score=?`,[request.session.uid,request.session.uid, post.score],function(error, color){  if(error){throw error;}
      response.writeHead(200);
      response.end("1");
    });
  });
}



//-------------------- home = 시작화면 ---------------------------
exports.home = function(request, response,queryData){
  db.query(`SELECT * FROM activity`, function(error, activity){  if(error){throw error;}
    db.query(`SELECT * FROM count WHERE id='admin' ORDER BY year DESC,month DESC,day DESC`,function(error2,count){  if(error2){throw error2;}
      db.query(`UPDATE count SET count=? WHERE id='admin' AND year=? AND month=? AND day=?`,[Number(count[0].count)+1, count[0].year, count[0].month, count[0].day],function(error3,state){  if(error3){throw error3;}

        request.session.uid = null;
        request.session.isLogined = false;
        request.session.save(function(){});
        var html = template_admin.home_HTML();
        response.writeHead(200);
        response.end(html);
      });//db.query(SELECT activity)
    });//db.query(SELECT count)
  });//db.query(UPDATE count)
}

exports.admin_profile = function(request, response,queryData){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;
      response.writeHead(200);
      response.end(alert);

  }else{
    db.query(`SELECT * FROM admin WHERE id=?`, [request.session.uid], function(error1, admin_info){  if(error1){throw error1;}
        var html = template_admin.profile_HTML(admin_info[0]);
        response.writeHead(200);
        response.end(html);
    });//db.query(SELECT admin)
  }
}

exports.admin_profile_check = function(request, response,queryData){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`SELECT password FROM admin WHERE id=?`,[request.session.uid],function(error1, admin_pwd){
      if(post.curpwd === admin_pwd[0].password){
        if(post.newpwd === post.newpwd2){
          db.query(`UPDATE admin SET password=? WHERE id=?`,[post.newpwd,request.session.uid],function(error2, result){
            response.writeHead(200);
            response.end("Success");
          });
        }else{
          response.writeHead(200);
          response.end("newPassowrdError");
        }
      }else{
        response.writeHead(200);
        response.end("curPassowrdError");
      }
    })
  });
}


//---------------------- score board ----------------------------------------------------
exports.score = function(request,response){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;

    response.writeHead(200);
    response.end(alert);

  }else{
    db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function(error,team_info){  if(error){throw error;}
      db.query(`SELECT DISTINCT cc.admin_id,team_num,activity_id,image,size,mimetype,id,activity,score  FROM cc LEFT JOIN activity ON activity.id = cc.activity_id WHERE cc.admin_id=? AND activity.admin_id=? ORDER BY CAST(team_num AS SIGNED),CAST(activity_id AS SIGNED)`,[request.session.uid,request.session.uid] ,function(error2, cc){  if(error2){throw error2;}
        db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY CAST(id AS SIGNED)`,[request.session.uid] , function(error3,activity){  if(error3){throw error3;}
          var body = `
            <tr>
              <td width="200" class="top">TEAM</td>
              <td width="200" class="top">SCORE</td>
              <td width="150" class="top_rank">RANK</td>
            </tr>
            <br />`;

          // calculate total score
          var total_score = [];
          for(var k = 0; k< team_info[0].num; k++){
            total_score.push(0);
          }
          for(var i = 0; i < cc.length; i++){
            total_score[Number(cc[i].team_num-1)] = Number(total_score[Number(cc[i].team_num-1)]) + Number(cc[i].score);
          }

          var rank = [];
          var temp = true;
          for(var i = 0; i < total_score.length; i++){
            for(var k = 0; k<rank.length; k++){
              if(total_score[i] === rank[k]){
                temp = false;
              }
            }
            if(temp){
              rank.push(total_score[i]);
            }
            temp = true;
          }

          for(var i = 0; i< rank.length; i++){
            var temp = 0;
            for(var k = 0; k <rank.length; k++){
              if(i!== k  && rank[i] > rank[k]){
                temp = rank[i];
                rank[i] = rank[k];
                rank[k] = temp;
              }
            }
          }

          var rank_img = [];
          var rank_str = [];
          for(var i = 0 ; i < total_score.length ; i++){
            if(rank[0]!==0 &&  total_score[i] === rank[0]){
              rank_img[i] = "https://ifh.cc/g/onTKvR.png";
              rank_str[i] = "1 등";

            }else if(rank[1]!==0 && total_score[i] === rank[1]){
              rank_img[i] = "https://ifh.cc/g/p25ONc.png";
              rank_str[i] = "2 등";

            }else if(rank[2]!==0 && total_score[i] === rank[2]){
              rank_img[i] = "https://ifh.cc/g/qQVoY8.png";
              rank_str[i] = "3 등";
            }else{
              rank_img[i] = "https://ifh.cc/g/A9R7RY.png";
              rank_str[i] = "";
            }
          }

          for(var k = 0; k< team_info[0].num; k++){
            body += `
            <tr>
              <td width="200">Team ${k+1}</td>
              <td width="150" class="mid">${total_score[k]} 점</td>
              <td width="150" class="mid"><img src=${rank_img[k]} width="40"> ${rank_str[k]}</td>
            </tr>`;
          }
          body = `<table border="1" style="margin:auto;">${body}</table>`;

          var html = template_admin.score_HTML(body,team_info);

          response.writeHead(200);
          response.end(html);
        });//db.query(SELECT activity)
      });//db.query(SELECT cc)
    });//db.query(SELECT team_info)
  }//else
}

//---------------------- create team cc ----------------------------------------------------
exports.create = function(request, response){
  if(request.session.uid === undefined){
    var alert = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <script>
            window.open('http://handongapp.cafe24.com/alert_popup?content=로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
            location.href = 'http://handongapp.cafe24.com/';
          </script>
        </body>
      </html>`;
    response.writeHead(200);
    response.end(alert);
  }else{
    var html = template_admin.HTML_create();
    response.writeHead(200);
    response.end(html);
  }
}

function id_check(arr){
  var id = 1;
  for(var i = 0; i < arr.length; i++){
    if( Number(arr[0].id) > 1){
      id = 1;
      break;
    }

    if(i+1 < arr.length){
      if(Number(arr[i+1].id) - Number(arr[i].id) > 1 ){
        id = Number(arr[i].id)+1;
        break;
      }
    }else if(i === arr.length-1){
      id += Number(arr[i].id);
    }
  };
  return id;
}

function team_num_check(arr){
  var team_num = 1;
  for(var i = 0; i < arr.length; i++){
    if( Number(arr[0].team_num) > 1){
      team_num = 1;
      break;
    }
    if(i+1 < arr.length){
      if(Number(arr[i+1].team_num) - Number(arr[i].team_num) > 1 ){
        team_num = Number(arr[i].team_num)+1;
        break;
      }

    }else if(i === arr.length-1){
      team_num += Number(arr[i].team_num);
    }
  };
  return team_num;
}

function random(random_url, len){
  var temp = 0;
  for(var i = 0; i<len; i++){
    temp = Math.random().toString(36).substring(2, 10);
    if(random_url.indexOf(temp) === -1){
      random_url.push(temp);
    }else{
      i--;
    }
  }
  return random_url;
}


//---------------------- initialization all data ----------------------------------------------------
/*
exports.initialization_state = function(request, response){
  var alert = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <script>
          window.open('http://handongapp.cafe24.com/confirm_popup?content=모든 팀 CC 활동들을 삭제하시겠습니까?<br>(복구 불가능)', '팝업 테스트', 'width=460, height=200, top=10, left=100');
          // var result = confirm("모든 팀 CC 활동들을 삭제하시겠습니까? (복구 불가능)");
          // if(result === true){
          //   alert('모든 팀 CC 활동이 삭제되었습니다');
          //   location.href = 'http://handongapp.cafe24.com/initialization';
	        // }else{
          //   location.href = 'http://handongapp.cafe24.com/admin_main';
	        // }
        </script>
      </body>
    </html>`;
    response.writeHead(200);
    response.end(alert);
}
*/


exports.initialization = function(request,response){
  request.on('data', function(data){});
  request.on('end', function(){
    db.query(`DELETE FROM url WHERE admin_id=?;`,[request.session.uid], function(error, result){  if(error){throw error;}  });
    db.query(`DELETE FROM team_info WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}  });
    db.query(`DELETE FROM activity WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}});
    db.query(`DELETE FROM cc WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}  });
    db.query(`DELETE FROM color WHERE admin_id=?;`,[request.session.uid],  function(error, result){  if(error){throw error;}  });

    response.writeHead(302,{Location:`/admin_create`});
    response.end();
  });
}

//--------------------------------   create team cc state    ----------------------------------------
exports.create_state = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error1, team_info){  if(error1){throw error1;}
      if(team_info.length > 0){
        var alert = `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>ERROR</h1>
            <script>
              window.open('http://handongapp.cafe24.com/alert_popup?content=이미 등록된 팀 정보가 존재합니다!', '팝업 테스트', 'width=460, height=130, top=10, left=100');
              location.href = 'http://handongapp.cafe24.com/admin_main';
            </script>
          </body>
        </html>`;
        response.writeHead(200);
        response.end(alert);
      }else{
        db.query(`INSERT INTO team_info VALUES(?,?,?,NULL,NULL,"Yes")`,[request.session.uid, post.team_title+' TEAM CC', post.team_num],function(error2, result){  if(error2){throw error2;}
          db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"background", "#dda0dd"],function(error3, result){  if(error3){throw error3;}
            db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"title_color", "#ffffff"],function(error4, result){  if(error4){throw error4;}
              db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"score_color", "#000000"],function(error6, result){  if(error6){throw error6;}
                var random_url = [];
                random_url = random(random_url,post.team_num);
                for(var i = 0 ; i < post.team_num; i++){
                  db.query(`INSERT INTO url (admin_id,team_num, url) VALUES(?,?,?)`,[request.session.uid,i+1, random_url[i]],function(error7, result){  if(error7){throw error7;}  });
                }

                response.writeHead(302,{Location:`/admin_main`});
                response.end();
        });});});});
      }//else
    });//db.query(SELECT team_info)
  });//request.on('end')
}



//--------------------------  update information     ------------------------------------------
exports.update_state = function(request, response){
  var post = request.body;

  if(request.file === undefined){
    db.query(`UPDATE team_info SET title=? WHERE admin_id = ?`, [post.team_title, request.session.uid], function(error1, result){  if(error1){throw error1;}
      response.redirect('/admin_main');
    });//db.query(UPDATE team_info)
  }else{
    const base64image = Buffer.from(request.file.buffer).toString('base64');
    db.query(`UPDATE team_info SET title=?, background_image=?, background_mimetype=? WHERE admin_id =?`, [post.team_title, base64image,request.file.mimetype ,request.session.uid ], function(error1, result){  if(error1){throw error1;}
        response.redirect('/admin_main');
      });//db.query(UPDATE admin)
  }//else
}

//---------------------------     activity list edit           ---------------------------------------

exports.activity_delete = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var score = 0;
    db.query(`SELECT * FROM activity WHERE admin_id=? AND  id=?`, [request.session.uid,post.id],function(error1, activity){  if(error1){throw error1;}
      score = activity[0].score;
      db.query(`DELETE FROM activity WHERE admin_id=? AND  id=?`, [request.session.uid,post.id],function(error2, reuslt){  if(error2){throw error2;}
        db.query(`SELECT * FROM activity WHERE admin_id=? AND score=?`,[request.session.uid,score],function(error3,same_score){  if(error3){throw error3;}
          if(same_score.length == 0){
            var score_text = score + '_text';
            db.query(`DELETE FROM color WHERE admin_id=? AND score=? OR admin_id=? AND score LIKE(?)`,[request.session.uid, score,request.session.uid,score_text],function(error4, result2){  if(error4){throw error4;}
              response.writeHead(302, {Location: `/admin_main`});
              response.end();
            });
          }else{
            response.writeHead(302, {Location: `/admin_main`});
            response.end();
          }
        });//db.query(SELECT activity score)
      });//db.query(DELETE activity)
    });//db.query(SELECT activity id)
  });//request.on('end')
}

exports.activity_insert = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`INSERT INTO activity (id,admin_id, activity,score ) VALUES(?,?,?,?)`, [post.id,request.session.uid ,post.activity,post.score], function(error1, result){  if(error1){throw error1;}
      db.query(`SELECT * FROM color WHERE score=? AND admin_id=?`,[post.score,request.session.uid],function(error2, result2){  if(error2){throw error2;}

        if(result2.length === 0){
          db.query(`INSERT INTO color (admin_id,score,color) VALUES(?,?,?)`,[request.session.uid, post.score, 'black'],function(error3,result3){  if(error3){throw error3;}
            db.query(`INSERT INTO color (admin_id,score,color) VALUES(?,?,?)`,[request.session.uid, post.score+'_text', 'white'],function(error4,result4){  if(error4){throw error4;}
              response.writeHead(302,{Location:`/admin_main`});
              response.end();
            });
          });
        }else{
          response.writeHead(302,{Location:`/admin_main`});
          response.end();
        }//else
      });//db.query(SELECT color)
    });//db.query(INSERT activity)
  });//request.on('end')
}

//--------------------------------   url list edit      ---------------------------------------

exports.url_delete = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`DELETE FROM url WHERE admin_id =? AND team_num=?`, [request.session.uid,post.id],function(error1, reuslt){  if(error1){throw error1;}
      db.query(`DELETE FROM cc WHERE admin_id =? AND team_num=? `,[request.session.uid,post.id],function(error2, cc){  if(error2){throw error2;}
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function (error3, team_info){  if(error3){throw error3;}
          db.query(`UPDATE team_info SET title=?, num=? WHERE admin_id=? AND title=?`, [team_info[0].title, Number(team_info[0].num)-1,request.session.uid ,team_info[0].title], function (error4, result){  if(error4){throw error4;}
            response.writeHead(302, {Location: `/admin_main`});
            response.end();
    });});});});});
}

exports.url_insert = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var random_url = [];
    var url_length = 0;
    db.query(`SELECT * FROM url` ,function(error1, url){  if(error1){throw error1;}
      url_length = Number(url.length);
      for(var i = 0; i< url.length; i++){
        random_url.push(url[i].url);
      }

      random_url = random(random_url,1);
      db.query(`INSERT INTO url (admin_id, team_num, url) VALUES(?,?,?)`, [request.session.uid, post.id, random_url[url_length]], function(error2, result){  if(error2){throw error2;}
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function (error3, team_info){  if(error3){throw error3;}
          db.query(`UPDATE team_info SET title=?, num=? WHERE admin_id =? AND title=?`,[team_info[0].title, Number(team_info[0].num)+1, request.session.uid,team_info[0].title], function (error4, result){  if(error4){throw error4;}
            response.writeHead(302,{Location:`/admin_main`});
            response.end();
      });});});
    });//db.query(SELECT url)
  });//request.on('end')
}



exports.change_url_state = function(request,response){
  var post = request.query;
  db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error1,info){  if(error1){throw error1;}

    if(info[0].state === "Yes"){
      db.query(`UPDATE team_info SET state='No' WHERE admin_id=?`,[request.session.uid],function(error2,state){  if(error2){throw error2;}
        response.writeHead(302, {Location:`/admin_main`});
        response.end();
      });
    }else {
      db.query(`UPDATE team_info SET state='Yes' WHERE admin_id=?`,[request.session.uid],function(error3,state2){  if(error3){throw error3;}
        response.writeHead(302, {Location:`/admin_main`});
        response.end();
      });
    }
  });
}
