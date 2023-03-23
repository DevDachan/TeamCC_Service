/*
  developer.js File : 관리자 페이지
  (Modified on 2023.03.23)
*/

var db = require('./db.js');
var template_developer = require('./template_developer.js');
var qs = require('querystring');
var express = require('express');
var app = express();
app.use(express.static('public'));

function modal_template(modalTitle, modalContent, backURL){
  return `
    <div id="mid_container">
      <button type="button" id="modal_bt" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal" style="display:none;"> </button>
    </div>

    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Modal -->
    <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">${modalTitle}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <p style="padding-bottom: 10px;">${modalContent}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: lightgrey; border: none;">Close</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      document.getElementById('modal_bt').click();
      document.getElementById('Modal').addEventListener('hidden.bs.modal', function(event){
        location.href = '${backURL}';
      });
    </script>
  `;
}

function head_function(){
  return `
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no, user-scalable=yes" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Team cc Start</title>
    <link rel="icon" type="image/x-icon" href="teamcc/assets/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" type="text/css"/>
    <link href="css/admin.css" rel="stylesheet" type="text/css"/>
    <!-- modal function in js file -->
    <!-- <script src="/teamcc/js/modal.js"></script> -->
  `;
}

//----------------- developer 화면 -----------------//
exports.developer = function(request,response){
    request.session.uid = null;
    request.session.isLogined = false;
    request.session.save(function(){});
    var html = template_developer.HTML_developerLogin();
    response.writeHead(200);
    response.end(html);
  }
  
  exports.developerLogin_action = function(request, response){
    console.log("developer login action");
  
    var body = '';
    request.on('data', function(data){
      body = body + data;
    });
    request.on('end', function(){
      var alert = ``;
      var post = qs.parse(body);
      var head_contents = head_function();
  
      db.query('SELECT * FROM developer WHERE id =? AND password=?',[post.id, post.pwd], function(error, result){  if(error){throw error;}
        db.query('SELECT * FROM developer WHERE id =?', [post.id], function(error2, id_result){  if(error2){throw error2;}
          if(result[0]!== undefined){
            request.session.uid = post.id;
            request.session.isLogined = true;
            request.session.save(function(){
              response.redirect('/teamcc/developer/admin_main');
            });
          } else if(id_result[0] !== undefined){
            var modalTitle = '비밀번호 오류!';
            var modalContent = '비밀번호를 다시 확인해주세요!';
            var backURL = 'http://handongapp.cafe24.com/teamcc/developer';
            var modal_func = modal_template(modalTitle, modalContent, backURL);
  
            alert = `
              <!doctype html>
              <html>
                <head>
                  ${head_contents}
                </head>
                <body>
                  ${modal_func}
                </body>
              </html>`;
            response.writeHead(200);
            response.end(alert);
          }else{
            var modalTitle = '로그인 오류!';
            var modalContent = '등록되지 않은 관리자 정보입니다.<br>다시 확인해주세요!';
            var backURL = 'http://handongapp.cafe24.com/teamcc/developer';
            var modal_func = modal_template(modalTitle, modalContent, backURL);
  
            alert = `
              <!doctype html>
              <html>
                <head>
                  ${head_contents}
                </head>
                <body>
                  ${modal_func}
                </body>
              </html>`;
  
            response.writeHead(200);
            response.end(alert);
          } //else
        }); //db.query(SELECT admin)
      }); //db.query(SELECT admin password)
    }); //request.on('end')
  }
  
  exports.developer_main = function(request,response){
    var alertFlag = '';
    if(request.session.uid === undefined || request.session.uid === null){ // 세션 정보 없을 때
      alertFlag = 'noSession';
    } else{ // 세션 정보 있을 때
      alertFlag = 'yesSession';
    }

    var today = new Date();
    var year = today.getFullYear(); // year
    var month = today.getMonth() + 1;  // month
    var day = today.getDate();  // day
  
    db.query(`SELECT SUM(count) AS totalCount FROM count`, function(error1, totalCount){ if(error1){throw error1;}
      db.query(`SELECT SUM(count) AS adminCount FROM count WHERE id='admin'`, function(error2, adminCount){ if(error2){throw error2;}
        db.query(`SELECT SUM(count) AS userCount FROM count WHERE id='user'`, function(error3, userCount){ if(error3){throw error3;}
          db.query(`SELECT COUNT(*) AS imgCount FROM cc`, function(error4, imgSum){ if(error4){throw error4;}
            db.query(`SELECT COUNT(*) AS teamCount FROM team_info`, function(error5, teamCount){ if(error5){throw error5;}  
                db.query(`SELECT SUM(count) AS todayTotal FROM count WHERE year=${year} AND month=${month} AND day=${day}`, function(error6, todayTotal){ if(error6){throw error6;}
                    db.query(`SELECT SUM(count) AS todayAdmin FROM count WHERE year=${year} AND month=${month} AND day=${day} AND id='admin'`, function(error7, todayAdmin){ if(error7){throw error7;}
                        db.query(`SELECT SUM(count) AS todayUser FROM count WHERE year=${year} AND month=${month} AND day=${day} AND id='user'`, function(error8, todayUser){ if(error8){throw error8;}
                            var totalViewers = totalCount[0].totalCount;
                            var adminViewers = adminCount[0].adminCount;
                            var userViewers = userCount[0].userCount;
                            var imgCount = imgSum[0].imgCount;
                            var teamNum = teamCount[0].teamCount;
                            var todayTotalViewers = todayTotal[0].todayTotal;
                            var todayAdminViewers = todayAdmin[0].todayAdmin;
                            var todayUserViewers = todayUser[0].todayUser;
                
                            var html = template_developer.HTML_developerMain(alertFlag, totalViewers, adminViewers, userViewers, imgCount, teamNum, todayTotalViewers, todayAdminViewers, todayUserViewers);
                            response.writeHead(200);
                            response.end(html);
                        });
                    });
                });
            });
          });
        });
      });
    });
  }