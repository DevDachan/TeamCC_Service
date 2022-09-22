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
            <title>Team cc Start</title>
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
                        <h1 class="masthead-heading mb-0">TEAM cc 생성</h1>
                        <br />
                        <form action="admin_create/create_state" method="post">
                          <div>
                            <h5 style="display:inline; margin-right:15px;">팀 이름</h5>
                            <input type="text" required name="team_title"></input>
                          </div>
                          <br />
                          <div>
                            <h5 style="display:inline; margin-right:25px; margin-left:10px;">cc 수</h5>
                            <input type="number" required min=1 name="team_num"></input>
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
            <title>Team cc Start</title>
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
                        <h1 class="masthead-heading mb-0">TEAM cc </h1>
                        <h2 class="masthead-subheading mb-0"></h2>
                        <br />
                        <form style="  margin:auto;width:400px;" action="/admin_login" method="post">
                          <div id="grid">
                            <h3 id="lb_ID" >ID</h3>
                            <input id="ip_id" name="id" required type="text"></input>
                            <h3 id="lb_PWD" style="  margin-top: 5px;">PWD</h3>
                            <input id="ip_pwd" required name="pwd" type="password"></input>
                            <input id="bt_login" type="submit" value="LOGIN" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                            <a class="btn btn-primary btn-xl rounded-pill " style="margin-top:20px; grid-row:5; grid-column:span 2" href="admin_register">REGISTER</a>
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
  HTML_register:function(){
      return`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
              <meta name="description" content="" />
              <meta name="author" content="" />
              <title>Team cc Start</title>
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
                          <h1 class="masthead-heading mb-0">TEAM cc </h1>
                          <h3 class="masthead-subheading mb-0"> Admin Registration Page </h3>
                          <br />
                          <br />

                          <form style="  margin:auto;width:400px;" action="/admin_register_state" method="post">
                            <div id="grid">
                              <h3 id="lb_ID" >ID</h3>
                              <input id="ip_id" required name="id" type="text"></input>
                              <h3 id="lb_PWD" >PWD</h3>
                              <input id="ip_pwd" required  name="pwd1" type="password"></input>
                              <h3 id="lb_PWD2" >PWD 확인</h3>
                              <input id="ip_pwd2" required name="pwd2" type="password"></input>
                              <input id="bt_login" type="submit" value="CREATE" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                            </div>
                          </form>
			  <a href="http://teamcc.cafe24.com" class="btn btn-primary btn-xl rounded-pill mt-5" style="width:180px;">BACK</a>
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
            <title>Team cc Start</title>
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
                        <h3 class="masthead-heading mb-0">${team_info[0].title} TEAM cc</h3>
                    </div>
                </div>
            </header>
            <br />
            ${body}
            <br />
            <form action="/admin_main" method="post" style="text-align:center;">
              <input type="submit" value="관리자 화면" style="background:#B0E0E6;   font-family: 'Jua', sans-serif; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
            </form>
            <br />
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
          border: hidden;
          padding: 5px;
        }
        .top{
            font-size: 40px;
            font-weight: bold;
        }
        .top_rank{
            font-size: 40px;
            font-weight: bold;
            color: red;
        }
        .mid{
            font-size: 20px;
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
            <title>Team cc Start</title>
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
            <br />
            ${this.activityImage(activity,team_info,color_db)}

            <br />
            <form action="/admin_main" method="post" style="text-align:center;">
              <input type="submit" value="관리자 화면" style="background:#B0E0E6; margin-top:30px; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
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
      <td>ID</td>
      <td>
          <form action="/url_insert" method="post">
            <input type="hidden" name="id" value="${team_num}">
            <input type="submit" style="background: #D8EFFB; border:0px; border-radius:10px; font-weight:bold; margin:5px;" value="팀 추가하기">
          </form>
      </td>
      <td>Share</td>
    </tr>`;
    for(var i = 0; i< url.length; i++){
      tag +=
      `
      <tr>
        <td width="50px">${url[i].team_num}</td>
        <td>
        <a href="http://teamcc.cafe24.com/user?id=${url[i].url}">${url[i].url}</td>
        <td>
        <form action="/url_delete" method="post">
          <input type="hidden" name="id" value="${url[i].team_num}">
          <input id="delete_bt" type="submit" value="Delete">
        </form>
        </td>
        <td>
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
         <script type="text/javascript">
             function kakaoShare(url_num) {
		 Kakao.cleanup();
		 Kakao.init("d552bed314bd946b20f1b322ed48a9c4");      // 사용할 앱의 JavaScript 키
		 
		 Kakao.Link.createDefaultButton({
                     objectType:"feed",
		     container: document.querySelector("#kakao_href")
                     , content : {
                         title:"Team CC 링크"
                         , description:"http://teamcc.cafe24.com/user?id=" + url_num  // 콘텐츠 설명
                         , imageUrl:"https://ifh.cc/g/CAOojM.png" // 썸네일 같은거
                         , link : {
                             mobileWebUrl:"http://teamcc.cafe24.com/user?id=" + url_num    // 모바일 카카오톡에서 사용하는 웹 링크 URL
                             , webUrl:"http://teamcc.cafe24.com/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                         }
                     }, buttons : [
                         { title:"팀CC 링크로 들어가기"    // 공유했을 때 뜨는 버튼 제목
                             , link : {
                                 mobileWebUrl:"http://teamcc.cafe24.com/user?id=" + url_num   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                             , webUrl:"http://teamcc.cafe24.com/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                             }
                         }
                     ]
                 });
                 document.getElementById("kakao_href").click(); // 새로고침
             }
         </script>
         <a href="http://teamcc.cafe24.com/admin_main" id="kakao_href"></a>
         <img src="https://ifh.cc/g/BbQVhq.png" onClick="kakaoShare('${url[i].url}');" width="50" alt="Share" class="btnImg">
     </form>
      </td>

      </tr>
      `;
    }
    return tag;},
    activityImage:function(activity,team_info,color_db){
      var length = activity.length;

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
          <h3 class="display-4" style=" font-size:7vw; margin:10px; font-family: 'Jua', sans-serif; color:${title_color};"> ${team_info.title}</h3>
        </td>
      </tr>`;
      var temp = '';
      var score_temp = 0;
     console.log(length);
     for(var i =0; i<length; i++){

        if(i < activity.length){
          if(score_temp !== activity[i].score){
            score_temp = activity[i].score;
            console.log("ch1");
	    temp +=`
              <td id="td_table">
                <p style="text-align:left; margin-left:10px; margin-bottom:2px; font-size:3vw;  font-family: 'Jua' ,sans-serif;color:${score_color};">${activity[i].score}학점</p>
                <div id="td_background" style="background:${activity[i].color};">
                  <p id="point_5" style="color:${text_color}; ">${activity[i].activity}</p>
                </div>
              </td>
            `;
          }
          else{
	   console.log("ch2");
            temp +=`
              <td id="td_table">
                <p style="font-size:3vw;"> &nbsp </p>
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
        if((i+1) % 4 === 0){
          tag += `<tr id="tr_table">${temp}</tr>`;
          temp = '';
        }

        else if(i === length-1){
		tag +=`<tr id="tr_table">${temp}</tr>`;
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
      <table id="tb_activityImage" style="background:${background_color}; width: 80vw;">
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
      var check_state = '<input type="checkbox" id="switch" onChange="change_state(this)" />';
      if(team_info[0].state === "Yes"){
	check_state = `<input type="checkbox" checked="checked" id="switch" onChange="change_state(this)" />`;
      }	    
      return `
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no, user-scalable=yes" />
              <meta name="description" content="" />
              <meta name="author" content="" />
              <title>Team cc Start</title>
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
              <!-- Navigation-->
              <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                  <div class="container px-5">
                      <a class="navbar-brand">Admin Page</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                          <ul class="navbar-nav ms-auto">
                              <li class="nav-item"><a class="nav-link" href="/admin_score">Score Board</a></li>
			      <li class="nav-item"><a class="nav-link" href="https://daffodil-mum-545.notion.site/HGU-TEAM-CC-Site-Guideline-a33a35526b7043b6bc0446febb4c6510">GUIDELINE</a></li>
                              
                              <li class="nav-item"><a class="nav-link" href="/">Logout</a></li>
			      <li class="nav-item"><a class="nav-link" href="/initialization_state">Delete</a></li>
			 
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
			          <div style="display:grid; grid-template-columns:2fr 1fr;">
                                   <h2 class="display-4" style="display:inline; grid-row:1; grid-column:1">Activity List</h2>
                                    <a class="btn btn-primary btn-l "
                                      style="grid-column:2;grid-row:1; margin:0px; font-weight:bold; border-radius:90px; height:70px; width:70px;  align-items: center;  display: flex;
                                        justify-content: center; "
                                      href="activity_image">Image
                                     </a>
				  </div>
                                  <br />
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

                                  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; place-items:centers;"> 
                                  <h2 class="display-4" style="grid-row:1; grid-column:1;">URL</h2>
				  <p style="grid-row:1;grid-column:2; text-align:center; vertical-align:middle; margin:0px; font-weight:bold;">Member State</p>
				  <div class="wrapper" style="grid-row:1; grid-column:3;">
				   ${check_state} 
				      <label for="switch" class="switch_label">
				         <span class="onf_btn"></span>
				     </label>
				     <a href="http://teamcc.cafe24.com/change_url_state" id="change_url_link"></a>
			          </div>
				  <script>
				    function change_state(e){
					document.getElementById("change_url_link").click();
				    }
				  </script>
				  </div>
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
                                      <br />
                                      <h3 id="lb_info_id" style="display:inline; margin-right:5px" >ID</h3>
                                      <input id="bt_info_id" type="text" name="admin_id" value="${admin_info.id}">
                                      <br />
                                      <h3 id="lb_info_pwd" style="display:inline; margin-right:5px" >PWD</h3>
                                      <input id="bt_info_pwd" type="password" name="admin_pwd" value="${admin_info.password}">

                                      <h3 id="lb_info_img" >BANNER</h3>
                                      <label for="background_image" id="lb_background_image" >SELECT</label>

                                      <input type="file" id="background_image" name="background_image" accept="image/*" onchange="select_img(this)" style="display:none; border:0px;" />


                                      <h4 id="lb_info_select" style="display:inline; margin-right:5px" >SELECTED IMAGE</h4>
                                      <div id="lb_select_image" ></div>

                                      <input id="bt_info_submit" type="submit" value="Submit">
                                    </div>
                                  </form>
                                  <script>
                                    function select_img(e){
					
                                      var file = e.files[0];
                                      //blob 형식의 이미지 url로 변환시키기
                                      var newImage = document.createElement("img");
                                      newImage.setAttribute("class", 'img');

                                     //이미지 source 가져오기
                                     newImage.src = URL.createObjectURL(file);
                                     newImage.style.width = "150px";
                                     newImage.style.height = "150px";
                                     newImage.style.visibility  = "visible";
                                     newImage.style.objectFit = "contain";
                                     //이전 이미지를 삭제 후 image-show div에 추가
                                     var container = document.getElementById('lb_select_image');
                                     if(container.childElementCount === 0){
                                             container.appendChild(newImage);
                                     }
                                     else{
                                       container.removeChild(container.firstChild);
                                       container.appendChild(newImage);
                                      }
                                    }

                                  </script>
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
