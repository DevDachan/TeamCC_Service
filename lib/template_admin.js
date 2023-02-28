/*
  template_admin.js File
  (Modified on 2023.02.28)
*/

// modal & header & footer
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
    <meta name="viewport" content="width=device-width, initial-scale=0.8, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Team cc Start</title>
    <link rel="icon" type="image/x-icon" href="/teamcc/assets/favicon.ico" />
    <!-- Font Awesome icons (free version) -->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />

    <!-- Core theme CSS (includes Bootstrap)-->
    <base href="/">
    <link href="/teamcc/css/styles.css" rel="stylesheet" type="text/css"/>
    <link href="/teamcc/css/admin.css" rel="stylesheet" type="text/css"/>
    <!-- modal function in js file -->
    <!-- <script src="/teamcc/js/modal.js"></script> -->
  `;
}


function footer_function(){
  return `
    <!-- Footer-->
      <footer class="footerCSS bg-black fixedFooter">
        <div class="container px-5"><p class="m-0 text-center text-white small footerTextCSS">Copyright &copy; HGU TeamCC Service 2023</p></div>
      </footer>
      <!-- Bootstrap core JS-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  `;
}

module.exports = {
//------------------------------------------------ default HTML template -------------------------------------------------

  // admin main HTML (로그인이 완료되고 팀 정보가 있을 때 사용되는 메인 페이지)
  HTML_main:function(team_info, activity_id, activity, url, url_team_num, admin_info, alertFlag){
    var head_contents = head_function();
    var foot_contents = footer_function();


    if(alertFlag === "noSession"){
      var modalTitle = '로그인을 다시 해주세요!';
      var modalContent = '로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!';
      var backURL = 'http://handongapp.cafe24.com/teamcc';
      var modal_func = modal_template(modalTitle, modalContent, backURL);

      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            ${head_contents}
          </head>
          <body>
            ${modal_func}
          </body>
        </html>`;
    } else{

      var background_image_tag = 'teamcc/assets/img/default_background.jpg';
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
            ${head_contents}
            <script>
              function modal(){
                document.getElementById('modal_bt').click();
              }

              function deleteFunction(inputText){
                if(inputText == "삭제요청"){
                  location.href = 'http://handongapp.cafe24.com/teamcc/initialization';
                } else{
                  document.getElementById('modal_alert').innerHTML = "# '삭제요청'을 입력하지 않으셨습니다. 다시 한 번 확인해주세요!";
                }
              }

              function copy_clipboard(text, id){
                var img = document.getElementById(id);
                img.style.cssText = "filter: opacity(0) drop-shadow(0 0 0 white);";

                var copyText = text;
                const copy_content = document.createElement("textarea");
                document.body.appendChild(copy_content);
                copy_content.value = copyText;
                copy_content.select();
                document.execCommand('copy');
                document.body.removeChild(copy_content);

                img.style.cssText = "transition-property: filter;  transition-duration: 2s;  filter: opacity(1) drop-shadow(0 0 0 white);";
              }
            </script>
          </head>

          <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
              <div class="container px-5" id="navbar-grid" style="margin: 0; display:grid; grid-template-columns: 30vw 60vw;">
                <div id="navbar-header" style="grid-column:1; text-align:left;"><a class="navbar-brand" href="/teamcc/admin_main">Admin Page</a></div>
                <div id="navbar-item" style="grid-column:2; text-align:right;">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto navbar-rg-item">
                      <li class="nav-item" style="width: 126px;"><a class="nav-link" href="teamcc/admin_score">Score Board</a></li>
                      <li class="nav-item"><a class="nav-link" href="https://daffodil-mum-545.notion.site/HGU-TEAM-CC-Site-Guideline-a33a35526b7043b6bc0446febb4c6510">GUIDELINE</a></li>
                      <li class="nav-item"><a class="nav-link" href="/teamcc">Logout</a></li>
                      <li class="nav-item">
                        <a class="nav-link" onclick="
                          modal();
                        ">Delete
                        </a>
                      </li>
                    </ul>
                    <div class="navbar-rg-item"><img onclick="location.href='http://handongapp.cafe24.com/teamcc/admin_profile'" src="teamcc/assets/img/profileIcon.png" width="40px;"></div>
                  </div>
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


            <div class="middlePart">
              <!-- Content section 1-->
              <section id="scroll">
                <div class="container px-5">
                  <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                      <div class="p-5"><img class="img-fluid rounded-circle" src="teamcc/assets/img/01.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                      <div class="p-5">
                        <div style="display:grid; grid-template-columns:2fr 1fr;">
                          <h2 class="display-4" style="display:inline; grid-row:1; grid-column:1; font-weight: 500;">Activity&nbsp;</h2>
                          <a class="btn btn-primary btn-l" style="background-color: #6281D7; box-shadow: 3px 3px 5px grey; border:none; grid-column:2;grid-row:1; margin:0px; font-weight:bold; border-radius:70px; height:60px; width:200px;  align-items: center;  display: flex; justify-content: center;" href="teamcc/activity_image">Credit Card Image</a>
                        </div>
                        <br />
                        <table>
                          ${this.function_activityTable(activity,activity_id)}
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
                      <div class="p-5"><img class="img-fluid rounded-circle" src="teamcc/assets/img/02.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div style="display:grid; margin-bottom:20px;   grid-template-rows: 50px 50px; grid-template-columns:2fr 1fr 0.5fr; place-items:centers;">
                          <h2 class="display-4" style="grid-row:span 2; grid-column:1; font-weight: 500; padding-top:20px; margin-right:10px; text-align:left;">URL</h2>
                          <p style="grid-row:1; grid-column:2; white-space:nowrap; text-align:right; margin-top:0.5rem; font-weight:bold;"> Member State</p>
                          <div class="wrapper" style="grid-row:1; grid-column:3; margin-left:20px; text-align:left; height: 40px; margin-right: 20px;">
                            ${check_state}
                            <label for="switch" class="switch_label" >
                              <span class="onf_btn"></span>
                            </label>
                            <a href="http://handongapp.cafe24.com/teamcc/change_url_state" id="change_url_link"></a>
                          </div>
                          <script>
                            function change_state(e){
                              document.getElementById("change_url_link").click();
                            }
                          </script>
                          <form action="teamcc/url_insert" style="grid-row:2; grid-column-start:2; grid-column-end:4; text-align:center;" method="post">
                            <input type="hidden" name="id" value="${url_team_num}">
                            <input type="submit" style="background-color: #6281D7; border-radius: 20px; vertical-align: middle; box-shadow: 3px 3px 5px grey; border:none;  height:40px; width:200px; color: white; font-size: 15px;font-weight: bold;" value="Add CC Team(URL)">
                          </form>
                        </div>
                        <table width="100%" class="mobileTable">
                          ${this.function_urlTable(url,url_team_num)}
                        </table>
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
                      <div class="p-5"><img class="img-fluid rounded-circle" src="teamcc/assets/img/03.jpg" alt="..." /></div>
                    </div>

                    <div class="col-lg-6 order-lg-1">
                      <div class="p-5 mobileInfoArea">
                        <h2 class="display-4">Information</h2>
                        <form action="teamcc/admin_update_state" id="info_form" method="post" enctype="multipart/form-data">
                          <div id="info_grid">
                            <h3 id="lb_info_team" style="display:inline; margin-right:5px" >TEAM Name</h3>
                            <input id="bt_info_team" type="text" name="team_title" value="${team_info[0].title}">

                            <h3 id="lb_info_img" >BANNER</h3>
                            <label for="background_image" id="lb_background_image" >SELECT</label>
                            <input type="file" id="background_image" name="background_image" accept="image/*" onchange="select_img(this)" style="display:none; border:0px;" />
                            <h4 id="lb_info_select" style="display:inline; margin-right:5px" >SELECTED IMAGE</h4>
                            <div id="lb_select_image" ></div>
                            <input id="bt_info_submit" class="editBtn" type="submit" value="Edit">
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
                            }else{
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

              <div id="mid_container">
                <button type="button" id="modal_bt" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal" style="display:none;"> </button>
              </div>

              <!-- Modal -->
              <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="ModalLabel">정말 삭제하시겠습니까?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p style="padding-bottom: 10px;">모든 팀 CC 활동들을 삭제하시겠습니까? <br>삭제하시면 복구가 불가능합니다!</p>

                    <p style="font-weight: bold;">'삭제요청'을 입력한 후, delete 버튼을 누르면 삭제할 수 있습니다 :)</p>
                    <input type="text" id="inputCSS">
                    <p style="font-weight: bold; color: tomato; padding: 10px; margin-bottom: -10px;" id="modal_alert"></p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" style="color: white;" onclick="deleteFunction(document.getElementById('inputCSS').value);">Delete All Data</button>
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: lightgrey; border: none;">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            ${foot_contents}

          </body>
        </html>
      `;
    }
  },

  // create teamcc page HTML (아직 팀 정보가 생성되지 않았을 경우 Create하는 페이지)
  HTML_create:function(title,body){
    var head_contents = head_function();
    var footer_contents = footer_function();


    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${head_contents}
        </head>
        <body id="page-top" class="backgroundCSS">
          <!-- Navigation -->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
              <a class="navbar-brand" href="/teamcc/admin_main">Admin Page</a>
            </div>
          </nav>
          <!-- Header -->
          <header class="masthead text-center text-white">
            <div class="masthead-content">
              <div class="container px-5">
                <h1 class="masthead-heading mb-0">TEAM cc 생성</h1> <br/><br/><br/>
                <form action="teamcc/admin_create/create_state" method="post">
                  <div>
                    <h5 style="display:inline; margin-right:15px;">팀 이름</h5>
                    <input class="infoBlank" type="text" required name="team_title"></input>
                  </div><br/>
                  <div>
                    <h5 style="display:inline; margin-right:25px; margin-left:10px;">cc 수</h5>
                    <input class="infoBlank" type="number" required min=1 name="team_num"></input>
                  </div><br/>
                  <input type="submit" class="btn btn-primary btn-xl rounded-pill mt-5" value="CREATE"></input>
                </form>
              </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
          </header>
            ${footer_contents}
        </body>
      </html>
    `;
  },

  // admin login page HTML(관리자 로그인 페이지)
  HTML_login:function(){
    var head_contents = head_function();
    var footer_contents = footer_function();

    return`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${head_contents}
        </head>
        <body id="page-top" class="backgroundCSS">
          <!-- Navigation-->
  	      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
              <a class="navbar-brand" href="/teamcc/admin_main" >ADMIN PAGE</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="https://daffodil-mum-545.notion.site/HGU-TEAM-CC-Site-Guideline-a33a35526b7043b6bc0446febb4c6510">GUIDELINE</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <!-- Header -->
          <header class="masthead text-center text-white"  style="">
            <div class="middlePart">
              <div class="masthead-content" style="margin-top: -60px">
                <div class="container px-5 containerCSS">
                  <h1 class="masthead-heading mb-0">TEAM cc </h1>
                  <br><br>
                  <h2 class="masthead-subheading mb-0"></h2><br />
                  <form style="  margin:auto;width:400px;" action="/teamcc/login_action" method="post">
                    <div id="grid">
                      <h3 id="lb_ID" >ID</h3>
                      <input id="ip_id" class="infoBlank" name="id" required type="text"></input>
                      <h3 id="lb_PWD" style="  margin-top: 5px;">PWD</h3>
                      <input id="ip_pwd" class="infoBlank" required name="pwd" type="password"></input>
                      <br>
                      <input id="bt_login" type="submit" value="LOGIN" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                      <a class="btn btn-primary btn-xl rounded-pill " style="margin-top:20px; grid-row:5; grid-column:span 2" href="teamcc/admin_register">REGISTER</a>
                    </div>
                  </form>
                </div>
              </div>
              <div class="bg-circle-1 bg-circle"></div>
              <div class="bg-circle-2 bg-circle"></div>
              <div class="bg-circle-3 bg-circle"></div>
              <div class="bg-circle-4 bg-circle"></div>
            </div>
          </header>
          

          ${footer_contents}
        </body>
      </html>
    `;
  },

  // admin register page HTML (관리자 계정 생성 페이지)
  HTML_register:function(){
    var head_contents = head_function();
    var footer_contents = footer_function();

    return`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${head_contents}
        </head>
        <body id="page-top" class="backgroundCSS">
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
                <h1 class="masthead-heading mb-0">TEAM cc </h1>
                <h3 class="masthead-subheading mb-0"> Admin Registration Page </h3>
                <br/>
                <br/>
                <form style="  margin:auto;width:400px;" action="teamcc/admin_register_state" method="post">
                  <div id="grid">
                    <h3 id="lb_ID" >ID</h3>
                    <input id="ip_id" class="infoBlank" required name="id" type="text"></input>
                    <h3 id="lb_PWD" >PWD</h3>
                    <input id="ip_pwd"  class="infoBlank" required  name="pwd1" type="password"></input>
                    <h3 id="lb_PWD2" >PWD 확인</h3>
                    <input id="ip_pwd2" class="infoBlank" required name="pwd2" type="password"></input>
                    <input id="bt_login" type="submit" value="CREATE" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                  </div>
                </form>
  		          <a href="http://handongapp.cafe24.com/teamcc/" class="btn btn-primary btn-xl rounded-pill mt-5" style="width:180px;">BACK</a>
              </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
          </header>
            ${footer_contents}
          </body>
      </html>
    `;
  },


  // admin profile edit page HTML (관리자 계정 정보 변경 페이지)
  HTML_editprofile:function(admin_info){
    var head_contents = head_function();
    var footer_contents = footer_function();
    return`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${head_contents}
          <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
          <script>
            function profile_edit(){
              document.getElementById("error_text").innerText = "";
              var result = false;
              $.ajax({
                type:'post',
                async:false,
                url:'http://handongapp.cafe24.com/teamcc/admin_profile_check',
                dataType:'text',
                data:{
                  newpwd:document.getElementById("ip_newpwd").value,
                  newpwd2:document.getElementById("ip_newpwd2").value,
                  curpwd:document.getElementById("ip_curpwd").value
                },
                success: function(res) {
                  if(res == "Success"){
                     result = true;
                  }else if(res == "newPassowrdError"){
                     document.getElementById("error_text").innerText = "New Password Error!";
                  }else if(res == "curPassowrdError"){
                     document.getElementById("error_text").innerText = "Current Password Error!";
                  }
                },
                error:function (data, textStatus) {
                  console.log('error');
                }
              })
              return result;
            }
          </script>
        </head>
        <body id="page-top" class="backgroundCSS">

          <!-- Navigation -->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <a class="navbar-brand" href="#page-top"></a>
            </div>
          </nav>

          <!-- Header -->
          <header class="masthead text-center text-white"  >
            <div class="masthead-content" >
              <div class="container px-5" style=" background: #e8e8e85c;border-radius: 10px; padding-bottom: 100px; padding-top: 120px;">
                <div class="closeInfo" onclick="location.href='http://handongapp.cafe24.com/teamcc/admin_main'">X</div>
                <h2 class="masthead-heading mb-0">Admin Information</h2>

                <br/>
                <br/>

                <h2 class="masthead-subheading mb-0"></h2><br />
                <form style="margin:auto;width:400px;" action="/teamcc/admin_main" method="post" onsubmit="return profile_edit();">
                  <div id="grid">
                    <h3 id="lb_ID">ID</h3>
                    <input id="ip_id" class="infoBlank" name="id" required type="text" disabled value="${admin_info.id}"></input>
                      <h3 id="lb_curPWD" style="margin-top: 5px;">Current Password</h3>
                    <input id="ip_curpwd" class="infoBlank" required name="curpwd" type="password"></input>
                      <h3 id="lb_newPWD" style="  margin-top: 5px;">New Password</h3>
                    <input id="ip_newpwd" class="infoBlank" required name="newpwd" type="password"></input>
                      <h3 id="lb_newPWD2" style="  margin-top: 5px;">Confirm</h3>
                    <input id="ip_newpwd2" class="infoBlank" required name="newpwd2" type="password"></input>
                    <label id="error_text" style="margin-left: 124px; margin-top: 5px; grid-column:span 2; font-weight:bold; color:red;"></label>
                    <div style="margin: auto; margin-left: 100px;">
                      <input id="bt_login" type="submit" value="EDIT" class="btn btn-primary btn-xl rounded-pill mt-5"></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
          </header>
            ${footer_contents}
        </body>
      </html>
    `;
  },



  // score 화면 HTML (전체 score 확인 페이지)
  HTML_score:function(body,team_info){
    var head_contents = head_function();
    var footer_contents = footer_function();
    var background_image_tag = 'teamcc/assets/img/default_background.jpg';

    if(team_info[0].background_image !== null){
      background_image_tag = `data:${team_info[0].mimetype};base64,${team_info[0].background_image}`;
    }

    var tag = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${head_contents}
        </head>
        <body id="page-top">

          <!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
              <a class="navbar-brand" href="/teamcc/admin_main">ADMIN PAGE</a>
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

          <div class="middlePart">
            <br />
            ${body}
            <br />

            <form action="/teamcc/admin_main" method="post" style="text-align:center;">
              <input type="submit" value="관리자 화면" style="margin-bottom: 20px; background:#B0E0E6; font-family: 'Jua', sans-serif; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
            </form>
            <br />
          </div>

          ${footer_contents}
        </body>
      </html>
    `;

    return tag;
  },

  // card image generate page HTML (관리자 전체 활동 카드 생성 페이지)
  HTML_cardimage:function(activity,team_info,color_db,admin_id,text_color_db,score_color_db){
    var head_contents = head_function();
    var footer_contents = footer_function();
    var background_image_tag = 'teamcc/assets/img/default_background.jpg';

    if(team_info.background_image !== null){
      background_image_tag = `data:${team_info.mimetype};base64,${team_info.background_image}`;
    }

    var tag = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${head_contents}
          <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
          <script>
            function color_pick(adminID,score,color){
              $.ajax({
                type:'post',
                async:false,
                url:'http://handongapp.cafe24.com/teamcc/change_color_pick',
                dataType:'text',
                data:{
                  adminID:adminID,
                  score:score,
                  color:color.value
                },
                success: function(res) {
                  window.location.reload();
                },
                error:function (data, textStatus) {
                console.log('error');
                }
              })
            }
            function change_title(adminID,title){
              $.ajax({
                type:'post',
                async:false,
                url:'http://handongapp.cafe24.com/teamcc/change_title',
                dataType:'text',
                data:{
                  adminID:adminID,
                  title:title.value
                },
                success: function(res) {
                  window.location.reload();
                },
                error:function (data, textStatus) {
                console.log('error');
                }
              })
            }
            function change_scoretext(adminID,score,color){
              $.ajax({
                type:'post',
                async:false,
                url:'http://handongapp.cafe24.com/teamcc/change_color_scoretext',
                dataType:'text',
                data:{
                  adminID:adminID,
                  score:score+'_text',
                  color:color.value
                },
                success: function(res) {
                  window.location.reload();
                },
                error:function (data, textStatus) {
                console.log('error');
                }
              })
            }
          </script>
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

          <div class="middlePart">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="http://code.jquery.com/jquery-latest.min.js"></script>
            <script>
              function saveAs(url, fileName) {
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }

              function capture(){
                var activityCapture = document.getElementById("tb_activityImage");

                html2canvas(activityCapture, {
                    allowTaint: true,
                    useCORS: true,
                    width: activityCapture.offsetWidth,
                    height: activityCapture.offsetHeight,
                    scale: 4
                  }).then(function (canvas) {
                    const imageURL = canvas.toDataURL('image/jpeg');
                    console.log(imageURL);

                    saveAs(imageURL, 'TeamCC_Service.jpg');
                  }).catch(function (err) {
                    console.log(err);
                  });
              }
            </script>

            <div id="captureBtnArea">
              <button id="captureBtn" onclick="capture();"><img src="/teamcc/assets/img/downloadIcon.png" width="40px;">Credit Card Download</button>
            </div>

            <br />
            <div id="activityCapture">
              ${this.function_cardimage_activity(activity,team_info,color_db,admin_id,text_color_db,score_color_db)}
            </div>
            <br />

            <form action="/teamcc/admin_main" method="post" style="text-align:center;">
              <input type="submit" value="관리자 화면" style="margin-bottom: 20px; background:#B0E0E6; margin-top:30px; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
            </form>
            </br>

            <script>
              var point = document.getElementsByClassName("point_text");
              for(var i = 0; i< point.length; i++){
                if(point[i].value.length > 6){
                  console.log(point[i].value.length);
                }
              }
            </script>
          </div>
          
          ${footer_contents}
        </body>
      </html>
    `;

    return tag;
  },

// ----------------------- function (table, grid)  -----------------------------------------------------

  // admin activity table generate function (관리자 페이지 활동 테이블 생성 함수)
  function_activityTable:function(activity,activity_id){
    var tag = `
      <tr>
        <th width=90px>
          <div class="thCSS" style="background-color: #9EAEFF;"></div>
          <div class="thTextCSS" style="background-color: #9EAEFF;">ID</div>
        </th>
        <th width=400px>
          <div class="thCSS" style="background-color: #CAA1E3;"></div>
          <div class="thTextCSS" style="background-color: #CAA1E3; color: white;">Activity</div>
        </th>
        <th width=100px>
          <div class="thCSS" style="background-color: #354B9B;"></div>
          <div class="thTextCSS" style="background-color: #354B9B; color: white;">Score</div>
        </th>
        <th>
          <div class="thCSS" style="background-color: #B2DFFF;"></div>
          <div class="thTextCSS" style="background-color: #B2DFFF;">Delete</div>
        </th>
      </tr>`;
    for(var i = 0; i< activity.length; i++){
      tag +=`
        <tr>
          <td class="tdCSS" width=50px >${i+1}</td>
          <td class="tdCSS">${activity[i].activity}</td>
          <td width="100px" class="tdCSS">${activity[i].score}</td>
          <td class="tdCSS">
            <form action="/teamcc/activity_delete" method="post">
              <input type="hidden" name="id" value="${activity[i].id}">
              <input type="image" src="teamcc/assets/img/trashcan.png" width="20px;" style="padding-top: 5px;">
            </form>
          </td>
        </tr>`;
    }

    tag += `
      <form action="teamcc/activity_insert" method="post">
        <input type="hidden" name="id" value="${activity_id}">
        <td class="tdCSS"></td>
        <td class="tdCSS"><input type="text" style="text-align:center; width:95%; padding:5px; border:0px; background:#E0EBFF	; border-radius:5px; font-weight:bold;" name="activity" placeholder="ex) 바다 가기" required  / ></td>
        <td class="tdCSS"><input type="number" min="1" style="text-align:center; width:90%; padding:5px; border:0px; background:	#E0EBFF	; border-radius:5px;font-weight:bold;" name="score" placeholder=" 5 " required / ></td>
        <td class="tdCSS"><input type="submit" style="background-color: #F4F6F6; color: tomato; border:0px; font-weight: 900; margin:5px;" value=" Insert "></td>
      </form>`;
    return tag;
  },

  // url table generate table function (관리자 페이지 url 테이블 생성 함수)
  function_urlTable:function(url,team_num){
    var tag = `
      <tr>
        <th>
          <div class="thCSS" style="background-color: #9EAEFF;"></div>
          <div class="thTextCSS" style="background-color: #9EAEFF;">Team</div>
        </th>
        <th width=150px>
          <div class="thCSS" style="background-color: #CAA1E3;"></div>
          <div class="thTextCSS" style="background-color: #CAA1E3; color: white;">Link</div>
        </th>
        <th>
          <div class="thCSS" style="background-color: #354B9B;"></div>
          <div class="thTextCSS" style="background-color: #354B9B; color: white;">Delete</div>
        </th>
        <th>
          <div class="thCSS" style="background-color: #CAA1E3;"></div>
          <div class="thTextCSS" style="background-color: #CAA1E3; color: white;">CopyLink</div>
        </th>
        <th>
          <div class="thCSS" style="background-color: #B2DFFF;"></div>
          <div class="thTextCSS" style="background-color: #B2DFFF;">Share</div>
        </th>
      </tr>`;

    for(var i = 0; i< url.length; i++){
      tag +=`
        <tr>
          <td class="tdCSS" width=40px>${url[i].team_num}</td>
          <td class="tdCSS"><a href="http://handongapp.cafe24.com/teamcc/user?id=${url[i].url}">${url[i].url}</td>
          <td class="tdCSS">
            <form action="/teamcc/url_delete" method="post">
              <input type="hidden" name="id" value="${url[i].team_num}">
              <input type="image" src="teamcc/assets/img/trashcan.png" width="20px;" style="padding-top: 5px;">
            </form>
          </td>
          <td class="tdCSS">
            <button class="bt-copy" onClick="copy_clipboard('http://handongapp.cafe24.com/teamcc/user?id=${url[i].url}','img-copy${url[i].team_num}')">
              <img class="img-copy" id="img-copy${url[i].team_num}" src='teamcc/assets/copy.png' alt='copy'>
            </button>
          </td>
          <td class="tdCSS">
            <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
            <script type="text/javascript">
              function kakaoShare(url_num) {
		            Kakao.cleanup();
		            Kakao.init("d552bed314bd946b20f1b322ed48a9c4");      // 사용할 앱의 JavaScript 키

		            Kakao.Link.createDefaultButton({
                  objectType:"feed",
		              container: document.querySelector("#kakao_href"),
                  content : {
                    title:"Team CC 링크",
                    description:"http://handongapp.cafe24.com/teamcc/user?id=" + url_num,  // 콘텐츠 설명
                    imageUrl:"https://ifh.cc/g/CAOojM.png", // 썸네일 같은거
                    link : {
                      mobileWebUrl:"http://handongapp.cafe24.com/teamcc/user?id=" + url_num,    // 모바일 카카오톡에서 사용하는 웹 링크 URL
                      webUrl:"http://handongapp.cafe24.com/teamcc/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                    }
                  },
                  buttons : [{
                    title:"팀CC 링크로 들어가기",    // 공유했을 때 뜨는 버튼 제목
                    link : {
                      mobileWebUrl:"http://handongapp.cafe24.com/teamcc/user?id=" + url_num,   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                      webUrl:"http://handongapp.cafe24.com/teamcc/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                    }
                  }]
                });
                document.getElementById("kakao_href").click(); // 새로고침
              }
            </script>
            <a href="http://handongapp.cafe24.com/teamcc/admin_main" id="kakao_href"></a>
            <img src="https://ifh.cc/g/BbQVhq.png" onClick="kakaoShare('${url[i].url}');" width="50" alt="Share" class="btnImg">
            </form>
          </td>
        </tr>`;
    }

    return tag;
  },

  // card image activity table generate function(카드 이미지 활동 테이블 생성 함수)
  function_cardimage_activity:function(activity,team_info,color_db,admin_id,text_color_db,score_color_db){
    var length = activity.length;
    var background_color = "";
    var title_color = "";
    var text_color = "";
    var score_color = "";

    for(var i =0;i<color_db.length; i++){
      if(color_db[i].score === "background") background_color = color_db[i].color;
      else if(color_db[i].score === "title_color") title_color = color_db[i].color;
      else if(color_db[i].score === "score_color") score_color = color_db[i].color;
    }

    var tag = `
      <tr>
        <td colspan=6 style="border:0px; ">
          <h3 class="display-4" style=" font-size:6vw; margin:20px; font-family: 'Jua', sans-serif; color:${title_color};"> ${team_info.title}</h3>
        </td>
      </tr>
    `;

    var temp = '';
    var score_temp = 0;
    var text_color_count = 0;
    for(var i =0; i<length; i++){
      if(i < activity.length){
        if(score_temp !== activity[i].score){
          score_temp = activity[i].score;
          text_color = text_color_db[text_color_count++].color;
          temp +=`
            <td id="td_table">
              <p style="text-align:left; margin-left:20px; margin-bottom:2px; font-size:3vw;  font-family: 'Jua' ,sans-serif;color:${score_color};">${activity[i].score}학점</p>
              <div id="td_background" style="margin-left:12px; background:${activity[i].color};">
                <p id="point_5" style="color:${text_color}; ">${activity[i].activity}</p>
              </div>
            </td>
          `;
        }else{
          temp +=`
            <td id="td_table">
              <p style="font-size:3vw; margin-left:20px;"> &nbsp </p>
              <div id="td_background" style="margin-left:12px; background:${activity[i].color};">
                <p id="point_5" style="color:${text_color}; ">${activity[i].activity}</p>
              </div>
            </td>
          `;
        }
      }else{
        temp +=`<td id="td_table"></td>`;
      }

      if((i+1) % 4 === 0){
        tag += `<tr id="tr_table">${temp}</tr>`;
        temp = '';
      }else if(i === length-1){
		    tag +=`<tr id="tr_table">${temp}</tr>`;
    	  temp = '';
      }
    }//for

    table = tag;

//----------------------------  color select -------------------------------------
    var color_table = ``;

    for(var i=0; i< score_color_db.length; i++){
      color_table +=`
        <tr>
          <td>${score_color_db[i].score}학점</td>
          <td><input type="color" onChange="color_pick('${admin_id}','${score_color_db[i].score}',this)" name="color_${score_color_db[i].score}" value="${score_color_db[i].color}" style="padding: 0px; border:0px;"></input></td>
          <td>내용 색</td>
          <td><input type="color" onChange="color_pick('${admin_id}','${text_color_db[i].score}',this)" name="color_${text_color_db[i].score}" value="${text_color_db[i].color}" style="padding: 0px; border:0px;"></input></td>
        </tr>
      `;
    }

    color_table +=`
      <tr>
        <td colspan=4 style="font-size: 20px; color: #474778; font-family: 'Jua';">상태 변경</td>
      </tr>
      <tr>
        <td colspan=2>배경</td>
        <td colspan=2><input type="color" onChange="color_pick('${admin_id}','background',this)" name="background" value="${background_color}" style="padding: 0px; border:0px;"></input></td>
      </tr>
      <tr>
        <td colspan=2>제목</td>
        <td colspan=2><input type="color" onChange="color_pick('${admin_id}','title_color',this)" name="title_color" value="${title_color}" style="padding: 0px; border:0px;"></input></td>
      </tr>
      <tr>
        <td colspan=2>학점</td>
        <td colspan=2><input type="color" onChange="color_pick('${admin_id}','score_color',this)" name="score_color" value="${score_color}" style="padding: 0px; border:0px;"></input></td>
      </tr>
    `;

    var input_text = `
      <tr>
        <td colspan=4 style="font-size: 20px; color: #474778; font-family: 'Jua';">팀 이름 변경</td>
      </tr>
      <tr>
        <td colspan=4>
          <input type="text" onChange="change_title('${admin_id}', this)" name="new_title" style="font-size: 18px; padding:13px; border: 2px solid lightgrey; border-radius: 10px;" value="${team_info.title}" />
        </td>
      </tr>
    `;


    //-------------------------     merge table       ----------
    table += `
      <table style="margin:auto; margin-top:30px;">
        <tr>
          <td colspan=4 style="font-size: 20px; color: #474778; font-family: 'Jua';">학점</td>
        </tr>
        ${color_table}
        ${input_text}
      </table>
    `;

    table = `
      <table id="tb_activityImage" style="background:${background_color}; width: 80vw;">
        <tbody>
          ${table}
        </tbody>
      </table>
    `;

    return table;
  }
}
