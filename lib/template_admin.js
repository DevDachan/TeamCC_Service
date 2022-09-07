module.exports = {

  //------------------   admin  -------------------------
  // 처음 아직 DB가 비어 있을때 사용하는 create html
  HTML_create:function(title,body){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Team CC Start</title>
            <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
            <!-- Font Awesome icons (free version)-->
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            <!-- Google fonts-->
            <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
            <!-- Core theme CSS (includes Bootstrap)-->
            <link href="/css/styles.css" rel="stylesheet" />
        </head>
        <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div class="container px-5">
                    <a class="navbar-brand" ">Admin Page</a>
                </div>
            </nav>
            <!-- Header-->
            <header class="masthead text-center text-white" style="  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);">
                <div class="masthead-content">
                    <div class="container px-5">
                        <h1 class="masthead-heading mb-0">TEAM CC 생성</h1>
                        <p></p>
                        <form action="admin_create/create_state" method="post">
                          <div>
                            <h5 style="display:inline; margin-right:15px;">팀 이름</h5>
                            <input type="text" name="team_title"></input>
                          </div>
                          <p></p>
                          <div>
                            <h5 style="display:inline; margin-right:25px; margin-left:10px;">CC 수</h5>
                            <input type="number" name="team_num"></input>
                          </div>
                          <input type="submit" class="btn btn-primary btn-xl rounded-pill mt-5" value="입력"></input>
                        </form>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>

            <!-- Footer-->
            <footer class="py-5 bg-black">
                <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
            </footer>
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="/js/scripts.js"></script>
        </body>
    </html>
    `;},


  // home = 처음 시작화면
  home_HTML:function(){
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Team CC Start</title>
            <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
            <!-- Font Awesome icons (free version)-->
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            <!-- Google fonts-->
            <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
            <!-- Core theme CSS (includes Bootstrap)-->
            <link href="/css/styles.css" rel="stylesheet" />
        </head>
        <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div class="container px-5">
                    <a class="navbar-brand" href="#page-top"></a>
                </div>
            </nav>
            <!-- Header-->
            <header class="masthead text-center text-white"  style="  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);">
                <div class="masthead-content">
                    <div class="container px-5">
                        <h1 class="masthead-heading mb-0">TEAM CC </h1>
                        <h2 class="masthead-subheading mb-0"></h2>
                        <p></p>
                        <form style="  margin:auto;width:400px;" action="/admin_login" method="post">
                          <div id="grid">
                            <h3 id="lb_ID" >ID</h3>
                            <input id="ip_id" name="id" type="text" value="chn7894"></input>
                            <h3 id="lb_PWD" >PWD</h3>
                            <input id="ip_pwd" name="pwd" type="password" value="dac7894"></input>
                            <input id="bt_login" type="submit" value="LOGIN" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                          </div>
                        </form>
                        <a class="btn btn-primary btn-xl rounded-pill " style="margin-top:20px;" href="admin_register">REGISTER</a>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>
            <!-- Footer-->
            <footer class="py-5 bg-black">
                <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
            </footer>
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="/js/scripts.js"></script>
        </body>
    </html>
    `;
  },
  HTML_register:function(){
      return`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
              <meta name="description" content="" />
              <meta name="author" content="" />
              <title>Team CC Start</title>
              <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
              <!-- Font Awesome icons (free version)-->
              <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
              <!-- Google fonts-->
              <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
              <!-- Core theme CSS (includes Bootstrap)-->
              <link href="/css/styles.css" rel="stylesheet" />
          </head>
          <body id="page-top">
              <!-- Navigation-->
              <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                  <div class="container px-5">
                      <a class="navbar-brand" href="#page-top"></a>
                  </div>
              </nav>
              <!-- Header-->
              <header class="masthead text-center text-white"  style="  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);">
                  <div class="masthead-content">
                      <div class="container px-5">
                          <h1 class="masthead-heading mb-0">TEAM CC </h1>
                          <h3 class="masthead-subheading mb-0"> Admin Registration Page </h3>
                          <p></p>
                          <p></p>

                          <form style="  margin:auto;width:400px;" action="/admin_register_state" method="post">
                            <div id="grid">
                              <h3 id="lb_ID" >ID</h3>
                              <input id="ip_id" name="id" type="text"></input>
                              <h3 id="lb_PWD" >PWD</h3>
                              <input id="ip_pwd" name="pwd1" type="password"></input>
                              <h3 id="lb_PWD2" >PWD 확인</h3>
                              <input id="ip_pwd2" name="pwd2" type="password"></input>
                              <input id="bt_login" type="submit" value="CREATE" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                            </div>
                          </form>
                      </div>
                  </div>
                  <div class="bg-circle-1 bg-circle"></div>
                  <div class="bg-circle-2 bg-circle"></div>
                  <div class="bg-circle-3 bg-circle"></div>
                  <div class="bg-circle-4 bg-circle"></div>
              </header>
              <!-- Footer-->
              <footer class="py-5 bg-black">
                  <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
              </footer>
              <!-- Bootstrap core JS-->
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
              <!-- Core theme JS-->
              <script src="/js/scripts.js"></script>
          </body>
      </html>
      `;
    },
  // admin에서 activity table 생성
  activityTable:function(activity,activity_id){
    var tag = `
    <tr>
      <td width=50px>ID</td>
      <td width=400px >Activity</td>
      <td width=100px >Score</td>
      <td >Delete</td>
    </tr>
    `;
    for(var i = 0; i< activity.length; i++){
      tag +=
      `
      <tr>
        <td width=50px >${i+1}</td>
        <td >${activity[i].activity}</td>
        <td width="100px" >${activity[i].score}</td>
        <td>
        <form action="/activity_delete" method="post">
          <input type="hidden" name="id" value="${activity[i].id}">
          <input id="delete_bt" type="submit" value="Delete">
        </form>
        </td>
      </tr>
      `;
    }

    tag += `
      <form action="activity_insert" method="post">
        <input type="hidden" name="id" value="${activity_id}">
        <td></td>
        <td><input type="text" style="text-align:center; width:95%; padding:5px; border:0px; background:#E0EBFF	; border-radius:5px; font-weight:bold;" name="activity" placeholder="ex) 바다 가기" required  / ></td>
        <td><input type="number" min="1" style="text-align:center; width:90%; padding:5px; border:0px; background:	#E0EBFF	; border-radius:5px;font-weight:bold;" name="score" placeholder=" 5 " required / ></td>
        <td><input type="submit" style="background: #D8EFFB; border:0px; border-radius:10px; font-weight:bold; margin:5px;" value=" Insert "></td>
      </form>
    `;
    return tag;
  },
  // score 화면 HTML (전체 score)
  score_HTML:function(body,team_info){
    var background_image_tag = 'assets/img/default_background.jpg';
    if(team_info[0].background_image !== null){
      background_image_tag = `data:${team_info[0].mimetype};base64,${team_info[0].background_image}`;
    }

    var tag = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Team CC Start</title>
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <!-- Font Awesome icons (free version)-->
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            <!-- Google fonts-->
            <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
            <!-- Core theme CSS (includes Bootstrap)-->
            <link href="css/styles.css" rel="stylesheet" />
        </head>
        <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div class="container px-5">
                    <a class="navbar-brand">ADMIN PAGE</a>
                </div>
            </nav>
            <!-- Header-->
            <header class="masthead text-center text-white" style="height:400px; background-image:url('${background_image_tag}')";>
                <div class="masthead-content">
                    <div class="container px-5">
                        <h3 class="masthead-heading mb-0">${team_info[0].title} TEAM CC</h3>
                    </div>
                </div>
            </header>
            <p></p>
            ${body}
            <p></p>
            <form action="/admin_main" method="post" style="text-align:center;">
              <input type="submit" value="관리자 화면" style="background:#B0E0E6;   font-family: 'Jua', sans-serif; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><p></p>
            </form>
            <p>
            </p>
            <!-- Footer-->
            <footer class="py-5 bg-black">
                <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
            </footer>
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="js/scripts.js"></script>
        </body>
        <style>
        table{
          text-align: center;
          border-collapse: collapse;
        }
        td{
          border:3px solid black;
        }
        </style>
    </html>
    `;
    return tag;
  },
  image_HTML:function(activity,team_info,color_db){
    var background_image_tag = 'assets/img/default_background.jpg';
    if(team_info.background_image !== null){
      background_image_tag = `data:${team_info.mimetype};base64,${team_info.background_image}`;
    }

    var tag = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Team CC Start</title>
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <!-- Font Awesome icons (free version)-->
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            <!-- Google fonts-->
            <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
            <!-- Core theme CSS (includes Bootstrap)-->
            <link href="css/styles.css" rel="stylesheet" />
        </head>
        <body id="page-top">

            <!-- Header-->
            <header class="masthead text-center text-white" style="height:400px; background-image:url('${background_image_tag}')";>
                <div class="masthead-content">
                    <div class="container px-5">
                        <h3 class="masthead-heading mb-0">${team_info.title}</h3>
                    </div>
                </div>
            </header>
            <p></p>
            ${this.activityImage(activity,team_info,color_db)}

            <p></p>
            <form action="/admin_main" method="post" style="text-align:center;">
              <input type="submit" value="관리자 화면" style="background:#B0E0E6; margin-top:30px; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><p></p>
            </form>
            <p>
            </p>
            <!-- Footer-->
            <footer class="py-5 bg-black">
                <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
            </footer>
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="js/scripts.js"></script>
        </body>
        <style>
        table{
          text-align: center;
          border-collapse: collapse;
        }
        td{
          border:3px solid black;
        }
        </style>
    </html>
    `;
    return tag;
  },
  // url table 생성
  urlTable:function(url,team_num){
    var tag = `
    <tr>
      <td  width="100px" >Team number</td>
      <td>URL</td>
      <td>
          <form action="/url_insert" method="post">
            <input type="hidden" name="id" value="${team_num}">
            <input type="submit" style="background: #D8EFFB; border:0px; border-radius:10px; font-weight:bold; margin:5px;" value="팀 추가하기">
          </form>
      </td>
    </tr>`;
    for(var i = 0; i< url.length; i++){
      tag +=
      `
      <tr>
        <td width="50px">${url[i].team_num}</td>
        <td>
        <a href="http://localhost:3000/user?id=${url[i].url}">http://localhost:3000/user?id=${url[i].url}</td>
        <td>
        <form action="/url_delete" method="post">
          <input type="hidden" name="id" value="${url[i].team_num}">
          <input id="delete_bt" type="submit" value="Delete">
        </form>
        </td>
      </tr>
      `;
    }
    return tag;},
    activityImage:function(activity,team_info,color_db){
      var length = 24;

      var background_color = "";
      var title_color = "";
      var text_color = "";
      var score_color = "";

      for(var i =0;i<color_db.length; i++){
        if(color_db[i].score === "background") background_color = color_db[i].color;
        else if(color_db[i].score === "title_color") title_color = color_db[i].color;
        else if(color_db[i].score === "text_color") text_color = color_db[i].color;
        else if(color_db[i].score === "score_color") score_color = color_db[i].color;
      }

      var tag = `
      <tr>
        <td colspan=6 style="border:0px; ">
          <h3 class="display-4" style="margin:10px; font-family: 'Jua', sans-serif; color:${title_color};"> ${team_info.title}</h3>
        </td>
      </tr>`;
      var temp = '';
      var score_temp = 0;
      for(var i =0; i<length; i++){
        if(i < activity.length){
          if(score_temp !== activity[i].score){
            score_temp = activity[i].score;
            temp +=`
              <td id="td_table">
                <p style="text-align:left; margin-left:10px; margin-bottom:2px; font-size:1.5em;  font-family: 'Jua' ,sans-serif;color:${score_color};">${activity[i].score}학점</p>
                <div id="td_background" style="background:${activity[i].color};">
                  <p id="point_5" style="color:${text_color}; ">${activity[i].activity}</p>
                </div>
              </td>
            `;
          }
          else{
            temp +=`
              <td id="td_table">
                <p style="font-size:1.5em;"> &nbsp </p>
                <div id="td_background" style="background:${activity[i].color};">
                  <p id="point_5" style="color:${text_color}; ">${activity[i].activity}</p>
                </div>
              </td>
            `;
          }
        }
        else{
          temp +=`<td id="td_table"></td>`;
        }
        if((i+1) % 6 === 0){
          tag += `<tr id="tr_table">${temp}</tr>`;
          temp = '';
        }
      }

      table = tag;

      //----------------------------  color select -------------------------------------
      var color_table = ``;

      for(var i=0; i< color_db.length; i++){
          if(color_db[i].score !== "background" && color_db[i].score !== "text_color" && color_db[i].score !== "title_color" && color_db[i].score !== "score_color"){
            color_table +=`
              <tr>
                <td>${color_db[i].score}학점</td>
                <td><input type="color" name="color_${color_db[i].score}" value="${color_db[i].color}" style="border:0px;"></input></td>
              </tr>
            `;
          }
      }


      color_table +=`
      <tr>
        <td colspan=2>상태 변경</td>
      </tr>
      <tr>
        <td>배경</td>
        <td><input type="color" name="background" value="${background_color}" style="border:0px;"></input></td>
      </tr>
      <tr>
        <td>제목</td>
        <td><input type="color" name="title_color" value="${title_color}" style="border:0px;"></input></td>
      </tr>
      <tr>
        <td>학점</td>
        <td><input type="color" name="score_color" value="${score_color}" style="border:0px;"></input></td>
      </tr>
      <tr>
        <td>내용</td>
        <td><input type="color" name="text_color" value="${text_color}" style="border:0px;"></input></td>
      </tr>

      `;

      var input_text = `
      <tr>
        <td colspan=2>이름 변경</td>
      </tr>
      <tr>
        <td colspan=2>
          <input type="text" name="new_title" style="padding:5px;" value="${team_info.title}" />
        </td>
      </tr>
      `;
      //-------------------------     merge table       ----------
      table += `
      <form action="/change_color" method="post">
        <table style="margin:auto; margin-top:30px;">
          <tr>
            <td colspan=2 style="width:100px;">학점</td>
          </tr>
          ${color_table}
          ${input_text}
          <tr>
            <td colspan=2>  <input type="submit" id="bt_change" value="변경 하기"></input></td>
          </tr>
        </table>
      </form>`;
      table = `
      <table id="tb_activityImage" style="background:${background_color}; width: 80%;">
      ${table}
      </table>
      `
      return table;
    },
    // main 화면 HTML
    main_HTML:function(team_info, activity_id, activity, url, url_team_num,admin_info){
      var background_image_tag = 'assets/img/default_background.jpg';
      if(team_info[0].background_image !== null){
        background_image_tag = `data:${team_info[0].mimetype};base64,${team_info[0].background_image}`;
      }


      return `
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no, user-scalable=yes" />
              <meta name="description" content="" />
              <meta name="author" content="" />
              <title>Team CC Start</title>
              <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
              <!-- Font Awesome icons (free version)-->
              <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
              <!-- Google fonts-->
              <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
              <!-- Core theme CSS (includes Bootstrap)-->
              <link href="css/styles.css" rel="stylesheet" />
          </head>
          <body id="page-top">
              <!-- Navigation-->
              <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                  <div class="container px-5">
                      <a class="navbar-brand">Admin Page</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                          <ul class="navbar-nav ms-auto">
                              <li class="nav-item"><a class="nav-link" href="/admin_score">Score Board</a></li>
                              <li class="nav-item"><a class="nav-link" href="/initialization">Delete</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <!-- Header-->
              <header class="masthead text-center text-white" style="height:400px; background-image:url('${background_image_tag}')";>
                  <div class="masthead-content">
                      <div class="container px-5">
                          <h3 class="masthead-heading mb-0">${team_info[0].title}</h3>
                      </div>
                  </div>
              </header>
              <!-- Content section 1-->
              <section id="scroll">
                  <div class="container px-5">
                      <div class="row gx-5 align-items-center">
                          <div class="col-lg-6 order-lg-2">
                              <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
                          </div>
                          <div class="col-lg-6 order-lg-1">
                              <div class="p-5">
                                  <h2 class="display-4" style="display:inline;">Activity List</h2>
                                    <a class="btn btn-primary btn-l "
                                      style="margin:0px; font-weight:bold; border-radius:90px; height:70px; width:70px;  align-items: center;  display: flex;
                                        justify-content: center; "
                                      href="activity_image">Image
                                      </a>
                                  <p></p>
                                  <table>
                                    ${this.activityTable(activity,activity_id)}
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <!-- Content section 2-->
              <section>
                  <div class="container px-5">
                      <div class="row gx-5 align-items-center">
                          <div class="col-lg-6">
                              <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                          </div>
                          <div class="col-lg-6">
                              <div class="p-5">
                                  <h2 class="display-4">URL</h2>
                                  <table border="1" width="100%">
                                    ${this.urlTable(url,url_team_num)}
                                  </table>
                                  <style>
                                    table{
                                      text-align: center;
                                      border-collapse: collapse;
                                    }
                                    td{
                                      text-align:center;
                                      font-weight: bold;
                                      border:1px solid black;
                                    }

                                  </style>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <!-- Content section 3-->
              <section>
                  <div class="container px-5">
                      <div class="row gx-5 align-items-center">
                          <div class="col-lg-6 order-lg-2">
                              <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                          </div>
                          <div class="col-lg-6 order-lg-1">
                              <div class="p-5">
                                  <h2 class="display-4">Information</h2>
                                  <form action="admin_update_state" id="info_form" method="post" enctype="multipart/form-data">
                                    <div id="info_grid">
                                      <h3 id="lb_info_team" style="display:inline; margin-right:5px" >TEAM Name</h3>
                                      <input id="bt_info_team" type="text" name="team_title" value="${team_info[0].title}">
                                      <p></p>
                                      <h3 id="lb_info_id" style="display:inline; margin-right:5px" >ID</h3>
                                      <input id="bt_info_id" type="text" name="admin_id" value="${admin_info.id}">
                                      <p></p>
                                      <h3 id="lb_info_pwd" style="display:inline; margin-right:5px" >PWD</h3>
                                      <input id="bt_info_pwd" type="password" name="admin_pwd" value="${admin_info.password}">

                                      <h3 id="lb_info_img" >BANNER</h3>
                                      <input type="file" id="background_image" name="background_image" accept="image/*" required style="display:inline; border:0px;" />

                                      <input id="bt_info_submit" type="submit" value="Submit">
                                    </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <!-- Footer-->
              <footer class="py-5 bg-black">
                  <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
              </footer>
              <!-- Bootstrap core JS-->
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
              <!-- Core theme JS-->
              <script src="js/scripts.js"></script>
          </body>
      </html>

      `;
    }
}
//                                      <label id="bt_upload_background" for="backgrouhd_image"> 업로드</label>
