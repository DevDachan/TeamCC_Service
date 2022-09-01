var http = require('http');
var db = require('./db.js');
var template_user = require('./template_user.js');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');


var express = require('express');
var multer = require('multer');
var app = express();
app.use(express.static('public'));

//------------------- main화면 -------------------------------------------
exports.main = function(request, response, random_url){
    var _url = request.url;
    var queryData = url.parse(_url, true);
    db.query(`SELECT * FROM URL WHERE url = ?`, [random_url], function(error1, url){
      if(error1){
        throw error1;
      }
      if(url.length <1){
        response.writeHead(404);
        response.end(`
          <head>
          <meta charset="utf-8">
          </head>
          <p>Not found </p> <p>존재하지 않는 URL 입니다.</p>`);
      }

          db.query(`SELECT * FROM activity`, function(error2, activity){
            if(error2){
              throw error2;
            }
              db.query(`SELECT * FROM CC JOIN activity ON id=activity_id WHERE team_num= ?`,[url[0].team_num], function(error3, sum_ccac){
                if(error3){
                  throw error3;
                }
                db.query(`SELECT * FROM state`, function(error2, state){
                  if(error2){
                    throw error2;
                  }
                    var body = `
                    <div style="text-align:center;margin:auto; margin-top:50px;">
                      <span style="font-weight:bold; border-radius:5px; border-bottom:2px solid #B2E0F7; color:white; padding: 0.15em; font-size:20px;background: #B0E0E6; display:inline">
                        &nbsp Team ${url[0].team_num} &nbsp
                      </span>
                      <p style="width:200px; margin:0px; display:inline; margin-left:10px; font-weight:bold; font-size:20px">Total Score : ${total(sum_ccac)} </p>
                    </div>

                    <p></p>
                    ${template_user.userActivityTable(sum_ccac ,random_url,activity,url[0].team_num)}
                    <p></p>

                    <style>
                        table{
                            border-collapse: collapse;
                        }
                        .frame{
                          width: 500px;
                          height: 500px;
                        }
                        .frame:hover{
                          cursor: pointer;
                        }
                        h2{
                          padding-top: 20px;
                        }

                    </style>
                    `;
                    var html =
                    template_user.main_HTML(
                    ``,
                    `${body}
                    <form style="text-align:center;margin:auto; margin-top:50px;" action="/user_score" method="post">
                      <input type="hidden" name="rand_url" value="${random_url}">
                      <input type="submit" style="background:#B0E0E6; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:150px; height:50px" value="Score Board">
                    </form>
                    <p></p>
                    `,
                    url[0].team_num,
                    state[0].title
                    );

                    response.writeHead(200);
                    response.end(html);
                //});
            });
          });
        });
    });
}


//------------------- score board 화면 -------------------------------------------
exports.user_score = function(request, response,random_url){
  var body = '';
  request.on('data', function(data){
      body = body + data;
    });
  request.on('end', function(){
    var post = qs.parse(body);
  db.query(`SELECT * FROM state`, function(error,state){
    if(error){
      throw error;
    }
    db.query(`SELECT * FROM CC LEFT JOIN activity ON activity.id = CC.activity_id ORDER BY team_num,activity_id`,function(error2, cc){
      db.query(`SELECT * FROM activity`, function(error3,activity){
        var body = `
        <tr>
          <td width="300">team</td>
          <td width="300">score</td>
        </tr>
        `;
        var total_score = [];
        for(var k = 0; k< state[0].num; k++){
          total_score.push('0');
        }
        // calculate total score
        for(var i = 0; i < cc.length; i++){
          total_score[Number(cc[i].team_num-1)] = Number(total_score[Number(cc[i].team_num-1)])
            + Number(cc[i].score);
        }

        for(var k = 0; k< state[0].num; k++){
            body += `
            <tr>
              <td width="100">team ${k+1}</td>
              <td width="100">${total_score[k]}</td>
            </tr>
            `;
        }
        body = `

        <table border="1" style="margin:auto;"> ${body} </table>\
        <p></p>
        <form action="/user?id=${post.rand_url}" method="post" style="text-align:center;">
          <input type="submit" value="입력 화면" style="background:#B0E0E6; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><p></p>
        </form>

        `;

        var html = template_user.score_HTML(body,state[0].title);

        response.writeHead(200);
        response.end(html);
    });
  });
});
});
}

function total(url_rand){
    var sum = 0;
        for(var i = 0; i< url_rand.length; i++){
          sum += Number(url_rand[i].score);
        }
    return sum;
}


//------------------- user의 activity edit -------------------------------------------
exports.activity_delete = function(request, response,random_url){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){

      var post = qs.parse(body);
          db.query(
              `DELETE FROM CC WHERE activity_id=?`,
              [post.activity_id],
              function(error, result){
                if(error){
                  throw error;
                }
                  response.writeHead(302, {Location: `user?id=${random_url}`});
                  response.end();
          });
        });
}

exports.image_upload = function(request, response,rand_url){

      const base64image = Buffer.from(request.file.buffer).toString('base64');

      db.query(`INSERT INTO cc VALUE('${request.body.team_num}','${request.body.actid}','${base64image}','${request.file.size}','${request.file.mimetype}')`, function(error,cc){
            if(error){
                var alert = `<script>
                alert('등록 오류!! (한 활동에 한번만 입력하세요 or 잘못 된 data)');
                location.href = 'http://localhost:3000/user?id=${request.body.rand_url}';
                </script>`;
                var html = template_user.main_HTML(alert, '', '');
                response.writeHead(200);
                response.end(html);
              }
              else{

                response.writeHead(302, {Location: `user?id=${rand_url}`});
                response.end();
            }
    });
};
