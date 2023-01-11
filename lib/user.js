/*
  user.js File : CC팀별 링크로 들어가서 이용할 수 있는 페이지
  (Modified on 2023.01.05)
*/

var db = require('./db.js');
var template_user = require('./template_user.js');
var qs = require('querystring');
var express = require('express');
var app = express();
app.use(express.static('public'));

//------------------- main화면 -------------------------------------------
exports.main = function(request, response, random_url){
  db.query(`SELECT * FROM url WHERE url = ?`, [random_url], function(error1, url){ if(error1){ throw error1; }
    if(url.length < 1){
      response.writeHead(404);
      response.end(
        `
          <head> <meta charset="utf-8"> </head>
          <p>Not found </p>
          <p>존재하지 않는 url 입니다.</p>
        `
      );
    }

	  db.query(`SELECT * FROM count WHERE id='user'`,function(error2,count){ if(error2){ throw error2; }
      db.query(`UPDATE count SET count=? WHERE id='user'`,[Number(count[0].count)+1],function(error3,state){ if(error3){ throw error3; }
        db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY CAST(score AS SIGNED)`,[url[0].admin_id], function(error4, activity){ if(error4){ throw error4;}
          db.query(`SELECT * FROM cc JOIN activity ON id=activity_id WHERE team_num= ? AND cc.admin_id=? AND activity.admin_id=?`,[url[0].team_num,url[0].admin_id,url[0].admin_id], function(error5, sum_ccac){ if(error5){ throw error5; }
            db.query(`SELECT * FROM team_info WHERE admin_id=?`, [url[0].admin_id],function(error6, team_info){ if(error6){ throw error6; }
              var state_tag = '';
              if(team_info[0].state === "No"){
                state_tag = ` <br/><h3 style="text-align:center;"> Team CC 활동이 마감되었습니다 </h3> `;
              }

              var body = `
                <link rel="stylesheet" type="text/css" href="css/user.css" />
                <div class="divCSS">
                  <span class="spanCSS"> &nbsp Team ${url[0].team_num} &nbsp </span>
                  <p class="totalScore"> Total Score : ${total(sum_ccac)} </p>
                </div>
		            ${state_tag} <br/>
                ${template_user.userActivityTable(sum_ccac ,random_url,activity,url[0].team_num,team_info)} <br/>
              `;

              var html = template_user.main_HTML(``,
                `
                  <link rel="stylesheet" type="text/css" href="css/user.css" />
                  ${body}
                  <form class="formCSS" action="/user_score" method="post">
                    <input type="hidden" name="rand_url" value="${random_url}">
                    <input class="scoreBoardBtn" type="submit" value="Score Board">
                  </form>
                  <form class="formCSS" style="margin-top:10px;" action="/image_card" method="get">
                    <input type="hidden" name="team_num" value="${team_info[0].num}">
                    <input type="hidden" name="id" value="${random_url}">
                    <input class="scoreBoardBtn" type="submit" value="Activity Card">
                  </form> <br/>
                `, url[0].team_num, team_info
              );
              response.writeHead(200);
              response.end(html);
            });
          });
        });
	    });
	  });
  });
}

exports.image_card = function(request,response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`SELECT admin_id FROM team_info WHERE num=?`,[request.query.team_num], function(error, admin_info){ if(error){throw error;}
    var admin_id = admin_info[0].admin_id;
    var url_num = request.query.id;
      db.query(`SELECT * FROM activity LEFT JOIN color USING(admin_id,score) WHERE admin_id=? AND score <> "background" AND score NOT LIKE("%color%") AND score NOT LIKE("%text%") ORDER BY CAST(score AS SIGNED)`,[admin_id], function(error2,activity){ if(error2){throw error2;}
        db.query(`SELECT * FROM team_info WHERE admin_id=?`,[admin_id],function(error3, team_info){  if(error3){throw error3;}
          db.query(`SELECT * FROM (SELECT * FROM color WHERE admin_id=?) AS K WHERE score LIKE('%background%') OR score LIKE('%score_color%') OR score LIKE('%title_color%') ORDER BY CAST(score AS SIGNED)`,[admin_id],function(error4,color_db){  if(error4){throw error4;}
            db.query(`SELECT * FROM color WHERE admin_id=? AND score LIKE('%text%') ORDER BY CAST(score AS SIGNED)`,[admin_id],function(error5, text_color_db){ if(error5){throw error5;}
              db.query(`SELECT * FROM color WHERE admin_id=? AND score NOT LIKE('%text%') AND score NOT LIKE("background") AND score NOT LIKE("%color%") ORDER BY CAST(score AS SIGNED)`,[admin_id],function(error6, score_color_db){ if(error6){throw error6;}
                var html = template_user.image_card_HTML(activity,team_info[0],color_db,admin_id,text_color_db,score_color_db,url_num);

                response.writeHead(200);
                response.end(html);
      });});});});});});
  });
}



//------------------- score board 화면 -------------------------------------------
exports.user_score = function(request, response){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    db.query(`SELECT * FROM url WHERE url=?`,[post.rand_url],function(error1,url){ if(error1){ throw error1; }
      db.query(`SELECT * FROM team_info WHERE admin_id=?`,[url[0].admin_id], function(error2,team_info){ if(error2){ throw error2; }
        db.query(`SELECT DISTINCT cc.admin_id,team_num,activity_id,size,image,mimetype,id,activity,score FROM cc LEFT JOIN activity ON activity.id = cc.activity_id WHERE cc.admin_id='${url[0].admin_id}' AND activity.admin_id='${url[0].admin_id}' ORDER BY CAST(team_num AS SIGNED),CAST(activity_id AS SIGNED)`,function(error3, cc){ if(error3){ throw error3; }
          db.query(`SELECT * FROM activity WHERE admin_id=? ORDER BY CAST(score AS SIGNED)`,[url[0].admin_id], function(error4,activity){ if(error4){ throw error4; }
            var total_score = [];
            var rank = [];
            var temp = true;

            for(var k = 0; k< team_info[0].num; k++){
              total_score.push(0);
            }
            for(var i = 0; i < cc.length; i++){ // calculate total score
              total_score[Number(cc[i].team_num-1)] = Number(total_score[Number(cc[i].team_num-1)]) + Number(cc[i].score);
            }

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
              }
              else if(rank[1]!==0 && total_score[i] === rank[1]){
                rank_img[i] = "https://ifh.cc/g/p25ONc.png";
                rank_str[i] = "2 등";
              }
              else if(rank[2]!==0 && total_score[i] === rank[2]){
                rank_img[i] = "https://ifh.cc/g/qQVoY8.png";
                rank_str[i] = "3 등";
              }
              else{
                rank_img[i] = "https://ifh.cc/g/A9R7RY.png";
                rank_str[i] = "";
              }
            }

            var body = `
              <tr>
                <td width="200" class="top">TEAM</td>
                <td width="200" class="top">SCORE</td>
                <td width="150" class="top_rank">RANK</td>
              </tr>
            `;
            for(var k = 0; k< team_info[0].num; k++){
              body += `
                <tr>
                  <td width="200">Team ${k+1}</td>
                  <td width="150" class="mid">${total_score[k]} 점</td>
                  <td width="150" class="mid"><img src=${rank_img[k]} width="40"> ${rank_str[k]}</td>
                </tr>
              `;
            }
            body = ` <table border="1" style="margin:auto;"> ${body} </table> `;
            var html = template_user.score_HTML(body,team_info,post.rand_url);
            response.writeHead(200);
            response.end(html);
          });
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
    db.query(`SELECT * FROM url WHERE url="${random_url}"`,function(error1,url){ if(error1){ throw error1; }
      db.query(`DELETE FROM cc WHERE activity_id=? AND admin_id=?`, [post.activity_id,url[0].admin_id], function(error2, result){ if(error2){ throw error2; }
        response.writeHead(302, {Location: `user?id=${random_url}`});
        response.end();
      });
    });
  });
}

exports.image_upload = function(request, response,rand_url){
  const base64image = Buffer.from(request.file.buffer).toString('base64');

  db.query(`SELECT * FROM url WHERE url=?`,[rand_url],function(error1,admin_id){ if(error1){ throw error1; }
    db.query(`INSERT INTO cc VALUE('${admin_id[0].admin_id}','${request.body.team_num}','${request.body.actid}','${base64image}','${request.file.size}','${request.file.mimetype}')`, function(error2,cc){
      if(error2){
        var alert = `
          <script>
            alert('등록 오류!! ${admin_id[0].admin_id + request.body.team_num + request.body.actid}');
            location.href = 'http://localhost:80/user?id=${rand_url}';
          </script>
        `;
        var html = template_user.main_HTML(alert, '', '');
        response.writeHead(200);
        response.end(html);
      }
      else{
        response.writeHead(302, {Location: `user?id=${rand_url}`});
        response.end();
      }
    });
  });
};
