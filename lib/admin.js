
var http = require('http');
var db = require('./db.js');
var template_admin = require('./template_admin.js');
var url = require('url');
var qs = require('querystring');

var express = require('express');
var multer = require('multer');

var app = express();
app.use(express.static('public'));


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
        alert('등록 오류!! (비밀번호가 맞지 않습니다.))');
        location.href = 'http://114.199.252.210:3000/admin_register';
        </script>
        </body>
        </html>`;
      response.writeHead(200);
      response.end(err_html);
      }
    else{
      db.query('SELECT * FROM admin WHERE id=?', [post.id], function(error, result){
        if(error){
          throw error;
        }
        if(result[0] !== undefined){
          var err_html = `
            <!doctype html>
            <html>
            <head>
            <meta charset="utf-8">
            </head>
            <body>

            <script>
            alert('등록 오류!! (이미 존재하는 ID))');
            location.href = 'http://114.199.252.210:3000/admin_register';
            </script>
            </body>
            </html>`;
          response.writeHead(200);
          response.end(err_html);
        }
        else{
          db.query('INSERT INTO admin VALUES(?,?)',[post.id, post.pwd1],function(error2, result2){
            if(error2){
              throw error2
            }
            request.session.uid = post.id;
            request.session.isLogined = true;
            request.session.save(function(){
            response.redirect('/');
          });
        });
        }
      });
    }


  });

}

exports.login = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
    var alert = ``;
    var post = qs.parse(body);
    db.query('SELECT * FROM admin WHERE id =? AND password=?',[post.id, post.pwd], function(error, result){
      if (error) {
        throw error;
      }

      db.query('SELECT * FROM admin WHERE id =?', [post.id], function(error2, id_result){

        if (error2) {
          throw error2;
        }
        if ( result[0]!== undefined){
          db.query('SELECT * FROM team_info WHERE admin_id=?', [post.id], function(error3, team_ex){
            if(error3){
              throw error3
            }
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
            }

          });
        }
        else if(id_result[0] !== undefined){
          alert = `
          <!doctype html>
          <html>
          <head>
          <meta charset="utf-8">
          </head>
          <body>
          <script>
          alert('로그인 오류!! (올바른 비밀번호를 입력해주세요!))');
          location.href = 'http://114.199.252.210:3000/';
          </script>
          </body>
          </html>`;
          response.writeHead(200);
          response.end(alert);
        }
        else{
          alert = `
          <!doctype html>
          <html>
          <head>
          <meta charset="utf-8">
          </head>
          <body>
          <script>
          alert('로그인 오류!! (등록되지 않은 사용자 입니다!))');
          location.href = 'http://114.199.252.210:3000/';
          </script>
          </body>
          </html>`;
          response.writeHead(200);
          response.end(alert);
        }
      });
    });
  });
}
//-------------------------------------------------


exports.activity_image = function(request,response){
  if(request.session.uid === undefined){
    response.redirect('/');
  }
  db.query(`SELECT * FROM activity LEFT JOIN color USING(admin_id,score) WHERE admin_id=? AND score <> "background" AND score NOT LIKE("$color%") ORDER BY score ASC`,[request.session.uid], function(error2,activity){
      if(error2){
        throw error2;
      }
      db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error3, team_info){
        if(error3){
          throw error3;
        }
        db.query(`SELECT * FROM color WHERE admin_id=? ORDER BY score ASC`,[request.session.uid],function(error4,color_db){
          if(error4){
            throw error4;
          }

          var html = template_admin.image_HTML(activity,team_info[0],color_db);

          response.writeHead(200);
          response.end(html);

        })
      });
    });

}

exports.change_color = function(request,response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`SELECT * FROM color WHERE admin_id=? AND score NOT LIKE("background") AND score NOT LIKE("%color%")`,[request.session.uid],function(error, color){
        if(error){
          throw error;
        }
        db.query(`UPDATE team_info SET title=? WHERE admin_id=? `,[post.new_title,request.session.uid],function(err,res){
          if(err){
            throw err;
          }

        for(var i = 0; i< color.length; i++){
          db.query(`UPDATE color SET admin_id=? , color='${post['color_'+color[i].score]}' WHERE admin_id =? AND score=?`,[request.session.uid,request.session.uid,color[i].score],function(error2,result){
            if(error2){
              throw error2;
            }
          });
          if(i=== color.length-1){
            db.query(`UPDATE color SET color=? WHERE admin_id=? AND score="background"`,[post.background,request.session.uid],function(error3,result2){
              if(error3){
                throw error3;
              }
              db.query(`UPDATE color SET color=? WHERE admin_id=? AND score="title_color"`,[post.title_color,request.session.uid],function(error3,result2){
                if(error3){
                  throw error3;
                }
                db.query(`UPDATE color SET color=? WHERE admin_id=? AND score="text_color"`,[post.text_color,request.session.uid],function(error3,result2){
                  if(error3){
                    throw error3;
                  }
                  db.query(`UPDATE color SET color=? WHERE admin_id=? AND score="score_color"`,[post.score_color,request.session.uid],function(error3,result2){
                    if(error3){
                      throw error3;
                    }
                  });
                });
                });
              });
          }
        }

        response.writeHead(302,{Location:`/activity_image`});
        response.end();
      });
    });
  });
}



//-------------------- home = 시작화면 ---------------------------
exports.home = function(request, response,queryData){
  var empty = '_create';
  db.query(`SELECT * FROM activity`, function(error, activity){

    var html = template_admin.home_HTML();
    response.writeHead(200);
    response.end(html);
  });
}


//---------------------- score board ----------------------------------------------------
exports.score = function(request,response){
  //body == 전체 판
  if(request.session.uid === undefined){
    response.redirect('/');
  }
  db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function(error,team_info){
    if(error){
      throw error;
    }
    db.query(`SELECT * FROM CC LEFT JOIN activity ON activity.id = CC.activity_id AND CC.admin_id=? ORDER BY team_num,activity_id`,[request.session.uid] ,function(error2, cc){
      if(error2){
        throw error2;
      }
      db.query(`SELECT * FROM activity WHERE admin_id=?`,[request.session.uid] , function(error3,activity){
        if(error3){
          throw error3;
        }
        var body = `
        <tr>
          <td width="200">team</td>
          <td width="200">score</td>
        </tr>
        <p></p>
        `;
        var total_score = [];
        for(var k = 0; k< team_info[0].num; k++){
          total_score.push('0');
        }
        // calculate total score
        for(var i = 0; i < cc.length; i++){
          total_score[Number(cc[i].team_num-1)] = Number(total_score[Number(cc[i].team_num-1)])
          + Number(cc[i].score);
        }

        for(var k = 0; k< team_info[0].num; k++){
            body += `
            <tr>
              <td width="200">team ${k+1}</td>
              <td width="200">${total_score[k]}</td>
            </tr>
            `;
        }
        body = `
        <table border="1" style="margin:auto;"> ${body} </table>
        `;

        var html = template_admin.score_HTML(body,team_info[0].title);

        response.writeHead(200);
        response.end(html);
    });
  });
});
}


//---------------------- create team cc ----------------------------------------------------
exports.create = function(request, response){
  var html = template_admin.HTML_create();
  response.writeHead(200);
  response.end(html);
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
    }
    else if(i === arr.length-1){
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
    }
    else if(i === arr.length-1){
      team_num += Number(arr[i].team_num);
    }
  };
  return team_num;
}

function random(random_url, len){
  var temp = 0;
  var min = 100000;
  var max = 999999;
  for(var i = 0; i<len; i++){
    temp = Math.floor(Math.random() * (max-min)) + min;
    if(random_url.indexOf(temp) === -1){
      random_url.push(temp);
    }
    else{
      i--;
    }
  }

  return random_url;
}


//---------------------- initialization all data ----------------------------------------------------
exports.initialization = function(request,response){
  request.on('data', function(data){
  });
  request.on('end', function(){
      db.query(`DELETE FROM url WHERE admin_id=?;`,[request.session.uid],
        function(error, result){
          if(error){
            throw error;
          }
      });
      db.query(`DELETE FROM team_info WHERE admin_id=?;`,[request.session.uid],
        function(error, result){
          if(error){
            throw error;
          }
      });

      db.query(`DELETE FROM activity WHERE admin_id=?;`,[request.session.uid],
        function(error, result){
          if(error){
            throw error;
          }
      });
      db.query(`DELETE FROM cc WHERE admin_id=?;`,[request.session.uid],
        function(error, result){
          if(error){
            throw error;
          }
      });
      db.query(`DELETE FROM color WHERE admin_id=?;`,[request.session.uid],
        function(error, result){
          if(error){
            throw error;
          }
      });
      response.writeHead(302,{Location:`/admin_create`});
      response.end();
  });
}


//---------------------- main 화면  ----------------------------------------------------
exports.main = function(request,response){
  if(request.session.uid === undefined){
    response.redirect('/');
  }
  db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid], function(error,team_info){
    if(error){
      throw error;
    }
    db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY score ASC`,[request.session.uid], function(error2,activity){
        if(error2){
          throw error2;
        }
        db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY id ASC`,[request.session.uid], function(error3,activity_2){
            if(error3){
              throw error3;
            }
          db.query(`SELECT * FROM url WHERE admin_id=? ORDER BY team_num ASC`,[request.session.uid], function(error4,url){
            if(error4){
              throw error4;
            }
            db.query(`SELECT * FROM admin WHERE id=?`, [request.session.uid], function(error5, admin_info){
              if(error5){
                throw error5;
              }
              var activity_id = id_check(activity_2);
              var url_team_num =team_num_check(url);
              var title = '';
              var html = template_admin.main_HTML(team_info, activity_id, activity, url, url_team_num,admin_info[0]);
              response.writeHead(200);
              response.end(html);
          });
        });
      });
    });
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
      db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid],function(error, team_info){
        if(error){
          throw error;
        }
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
        alert('등록 오류!! (이미 등록된 값이 존재합니다))');
        location.href = 'http://114.199.252.210:3000/admin_main';
        </script>
        </body>
        </html>`
        ;
    //    var html = template_admin.alert_HTML(alert);
        response.writeHead(200);
        response.end(alert);
      }
      else{
          db.query(`INSERT INTO team_info VALUES(?,?,?)`,[request.session.uid,post.team_title+' TEAM CC', post.team_num],function(error2, result){
              if(error2){
                throw error2;
              }
            db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"background", "#dda0dd"],function(error3, result){
              if(error3){
                throw error3;
              }
              db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"title_color", "#ffffff"],function(error4, result){
                if(error4){
                  throw error4;
                }
                db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"text_color", "#ffffff"],function(error5, result){
                  if(error5){
                    throw error5;
                  }
                  db.query(`INSERT INTO color VALUES(?,?,?)`,[request.session.uid,"score_color", "#000000"],function(error6, result){
                    if(error6){
                      throw error6;
                    }
                    var random_url = [];
                    random_url = random(random_url,post.team_num);
                    for(var i = 0 ; i < post.team_num; i++){
                      db.query(`INSERT INTO URL (admin_id,team_num, url) VALUES(?,?,?)`,[request.session.uid,i+1, random_url[i]],function(error, result){
                        if(error){
                          throw error;
                        }
                      });
                    }

                    response.writeHead(302,{Location:`/admin_main`});
                    response.end();
              });
            });
          });
        });
      });
      }
    });

  });
}



//--------------------------  update information     ------------------------------------------
exports.update_state = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`UPDATE team_info SET title=? , admin_id=? WHERE admin_id =?`,
      [post.team_title,  post.admin_id, request.session.uid ], function(error, result){
        if(error){
          throw error;
        }
        db.query(`UPDATE admin SET id=? ,password=? WHERE id=?`,[post.admin_id,post.admin_pwd ,request.session.uid],function(error2, result2){
          if(error2){
            throw error2;
          }
          if(post.admin_id !== request.session.uid){
              db.query(`UPDATE activity SET admin_id=? WHERE admin_id=?`,[post.admin_id ,request.session.uid],function(error3, result3){
                if(error3){
                  throw error3;
                }
                db.query(`UPDATE cc SET admin_id=? WHERE admin_id=?`,[post.admin_id ,request.session.uid],function(error4, result4){
                  if(error4){
                    throw error4;
                  }
                  db.query(`UPDATE url SET admin_id=? WHERE admin_id=?`,[post.admin_id ,request.session.uid],function(error5, result5){
                    if(error5){
                      throw error5;
                    }
                    request.session.uid = post.admin_id;
                    request.session.isLogined = true;
                    request.session.save(function(){
                      response.redirect('/admin_main');
                    });
                  });
                });
              });
          }
          else{
            request.session.uid = post.admin_id;
            request.session.isLogined = true;
            request.session.save(function(){
              response.redirect('/admin_main');
            });
          }
        });
      });
  });
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
      db.query(`SELECT * FROM activity WHERE admin_id=? AND  id=?`, [request.session.uid,post.id],function(err, activity){
        if(err){
          throw err;
        }
        score = activity[0].score;
        db.query(`DELETE FROM activity WHERE admin_id=? AND  id=?`, [request.session.uid,post.id],function(error, reuslt){
          if(error){
            throw error;
          }
          db.query(`SELECT * FROM activity WHERE admin_id=? AND score=?`,[request.session.uid,score],function(error2,same_score){
            if(error2){
              throw error2;
            }
            if(same_score.length === 0){
              db.query(`DELETE FROM color WHERE admin_id=? AND score=?`,[request.session.uid, score],function(error3, result2){
                if(error3){
                  throw error3;
                }
                response.writeHead(302, {Location: `/admin_main`});
                response.end();
              });
            }else{
              response.writeHead(302, {Location: `/admin_main`});
              response.end();

            }
        });
      });
    });
  });
}

exports.activity_insert = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);

      db.query(`INSERT INTO activity (id,admin_id, activity,score ) VALUES(?,?,?,?)`,
        [post.id,request.session.uid ,post.activity,post.score], function(error, result){
          if(error){
            throw error;
          }
          db.query(`SELECT * FROM color WHERE score=?`,[post.score],function(error2, result2){
            if(error2){
              throw error2;
            }
            if(result2.length === 0){
              db.query(`INSERT INTO color (admin_id,score,color) VALUES(?,?,?)`,[request.session.uid, post.score, 'black'],function(error3,result3){
                if(error3){
                  throw error3;
                }
                response.writeHead(302,{Location:`/admin_main`});
                response.end();
              });
            }else{
              response.writeHead(302,{Location:`/admin_main`});
              response.end();
            }
          });
        });
  });
}

//--------------------------------   url list edit      ---------------------------------------

exports.url_delete = function(request,response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`DELETE FROM url WHERE admin_id =? AND team_num=?`, [request.session.uid,post.id],function(error, reuslt){
        if(error){
          throw error;
        }
        db.query(`DELETE FROM cc WHERE admin_id =? AND team_num=? `,[request.session.uid,post.id],function(error2, cc){
        if(error2){
          throw error2;
        }
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function (error3, team_info){
          if(error3){
            throw error3;
          }
          db.query(`UPDATE team_info SET title=?, num=? WHERE admin_id=? AND title=?`,
            [team_info[0].title, Number(team_info[0].num)-1,request.session.uid ,team_info[0].title], function (error4, result){
              if(error4){
                throw error4;
              }
        response.writeHead(302, {Location: `/admin_main`});
        response.end();
      });
    });
  });
  });
  });

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
      db.query(`SELECT * FROM URL` ,function(error1, url){
        if(error1){
          throw error1;
        }
        url_length = Number(url.length);
        for(var i = 0; i< url.length; i++){
          random_url.push(url[i].url);
        }
        random_url = random(random_url,1);
        db.query(`INSERT INTO url (admin_id, team_num, url) VALUES(?,?,?)`,
          [request.session.uid, post.id, random_url[url_length]],
          function(error, result){
            if(error){
              throw error;
            }
            db.query(`SELECT * FROM team_info WHERE admin_id=?`,[request.session.uid] ,function (error3, team_info){
              if(error3){
                throw error3;
              }
              db.query(`UPDATE team_info SET title=?, num=? WHERE admin_id =? AND title=?`,
                [team_info[0].title, Number(team_info[0].num)+1, request.session.uid,team_info[0].title], function (error4, result){
                  if(error4){
                    throw error4;
                  }
                response.writeHead(302,{Location:`/admin_main`});
                response.end();
            });
          });
        });
      });
    });
}
