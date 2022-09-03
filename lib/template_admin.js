module.exports = {

  //------------------   admin  -------------------------
  // 처음 아직 DB가 비어 있을때 사용하는 create html
  HTML_create:function(title,body){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
            <header class="masthead text-center text-white">
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
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container px-5">
                        <h1 class="masthead-heading mb-0">TEAM CC </h1>
                        <h2 class="masthead-subheading mb-0"></h2>
                        <p></p>
                        <form style="  margin:auto;width:400px;" action="/admin_login" method="post">
                          <div id="grid">
                            <h3 id="lb_ID" >ID</h3>
                            <input id="ip_id" name="id" type="text"></input>
                            <h3 id="lb_PWD" >PWD</h3>
                            <input id="ip_pwd" name="pwd" type="password"></input>
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
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
              <header class="masthead text-center text-white">
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
        <td width=50px >${activity[i].id}</td>
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
        <td><input type="number" style="text-align:center; width:90%; padding:5px; border:0px; background:	#E0EBFF	; border-radius:5px;font-weight:bold;" name="score" placeholder=" 5 " required / ></td>
        <td><input type="submit" style="background: #D8EFFB; border:0px; border-radius:10px; font-weight:bold; margin:5px;" value=" Insert "></td>
      </form>
    `;
    return tag;
  },
  // score 화면 HTML (전체 score)
  score_HTML:function(body,team_name,){
    var tag = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
                    <a class="navbar-brand">User Page</a>
                </div>
            </nav>
            <!-- Header-->
            <header class="masthead text-center text-white" style="height:400px;">
                <div class="masthead-content">
                    <div class="container px-5">
                        <h3 class="masthead-heading mb-0">${team_name} TEAM CC</h3>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>
            <p></p>
            ${body}
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
      <td width="100" >Team number</td>
      <td width="150">URL</td>
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
        <td width="50">${url[i].team_num}</td>
        <td width="300">
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
    activityImage:function(activity){
      var tag = `
        <tr>
          <td id="td_table"><p id="point_5" >hi<p></td>
          <td id="point_5">hi</td>
          <td id="point_5">hi</td>
          <td id="point_5">hi</td>
          <td id="point_5">hi</td>
        </tr>
      `;


      table = tag;
      return table;
    },
    // main 화면 HTML
    main_HTML:function(state, activity_id, activity, url, url_team_num,admin_info){
      return `
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
              <header class="masthead text-center text-white" style="height:400px;">
                  <div class="masthead-content">
                      <div class="container px-5">
                          <h3 class="masthead-heading mb-0">${state[0].title} TEAM CC</h3>
                      </div>
                  </div>
                  <div class="bg-circle-1 bg-circle"></div>
                  <div class="bg-circle-2 bg-circle"></div>
                  <div class="bg-circle-3 bg-circle"></div>
                  <div class="bg-circle-4 bg-circle"></div>
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
                                  <h2 class="display-4">Activity List</h2>
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
                                  <table border="1" width="">
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
                                  <form action="admin_update_state" method="post">
                                    <div id="info_grid">
                                      <h3 id="lb_info_team" style="display:inline; margin-right:5px" >TEAM Name</h3>
                                      <input id="bt_info_team" type="text" name="team_title" value="${state[0].title}">
                                      <p></p>
                                      <h3 id="lb_info_id" style="display:inline; margin-right:5px" >ID</h3>
                                      <input id="bt_info_id" type="text" name="admin_id" value="${admin_info.id}">
                                      <p></p>
                                      <h3 id="lb_info_pwd" style="display:inline; margin-right:5px" >PWD</h3>
                                      <input id="bt_info_pwd" type="password" name="admin_pwd" value="${admin_info.password}">
                                      <p></p>
                                      <input id="bt_info_submit" type="submit" value="Submit">
                                    </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <table>
                ${this.activityImage(activity)}
              </table>
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
