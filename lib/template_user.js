
function head_function(){
  return `
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Team cc Start</title>
      <link rel="icon" type="image/x-icon" href="teamcc/assets/favicon.ico" />
      <!-- Font Awesome icons (free version)-->
      <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
      <!-- Google fonts-->
      <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />

      <!-- Core theme CSS -->
      <link href="css/styles.css" rel="stylesheet" />
      <link href="css/template_user.css" rel="stylesheet" />
      <link href="css/user.css" rel="stylesheet" />

      <script>
        function modal(img,index){
           var img_tag = 'img_'+ img + '_'+index;
           document.getElementById('modal_img').src = document.getElementById(img_tag).src;
           document.getElementById('modal_bt').click();
        }
      </script>
    </head>
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
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
  `;
}



module.exports = {

  //------------------------------------------------ default HTML template -------------------------------------------------

  //user page main HTML ( 사용자 화면 기본 페이지)
  HTML_main:function( banner, body, team_num,team_info){
    var head_contents = head_function();
    var footer_contents = footer_function();
    var background_image_tag = 'assets/img/default_background.jpg';

    if(team_info !== null && team_info[0].background_image !== null){
      background_image_tag = `data:${team_info[0].mimetype};base64,${team_info[0].background_image}`;
    }

    return `
      <!DOCTYPE html>
      <html lang="en">

        ${head_contents}

        <body id="page-top">

          <!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
              ${banner}
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

          <!-- Header-->
          <header class="masthead text-center text-white headerCSS" style="background-image: url('${background_image_tag}');">
            <div class="masthead-content">
              <div class="container px-5">
                <h3 class="masthead-heading mb-0">${team_info[0].title}</h3>
              </div>
            </div>
          </header>

          <div id="mid_container">
            ${body}
            <button type="button" id="modal_bt" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal" style="display:none;"> </button>
          </div>

          <!-- Modal -->
          <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="ModalLabel">미리 보기</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <img id="modal_img" style="width:100%;" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          </br>
          ${footer_contents}
        </body>
      </html>
    `;
  },
  HTML_alert:function( body){
    var head_contents = head_function();
    var footer_contents = footer_function();
    var background_image_tag = 'assets/img/default_background.jpg';

    return `
      <!DOCTYPE html>
      <html lang="en">

        ${head_contents}

        <body id="page-top">

          <!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
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

          <!-- Header-->
          <header class="masthead text-center text-white headerCSS" style="background-image: url('${background_image_tag}');">
            <div class="masthead-content">
            </div>
          </header>

          <div id="mid_container">
            ${body}
            <button type="button" id="modal_bt" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal" style="display:none;"> </button>
          </div>

          </br>
          ${footer_contents}
        </body>
      </html>
    `;
  },

  // user card image page HTML (사용자 카드 이미지 생성 페이지)
  HTML_cardimage:function(activity,team_info,color_db,admin_id,text_color_db,score_color_db,url_num){
    var head_contents = head_function();
    var footer_contents = footer_function();
    var background_image_tag = 'assets/img/default_background.jpg';

    if(team_info.background_image !== null){
      background_image_tag = `data:${team_info.mimetype};base64,${team_info.background_image}`;
    }

    var tag = `
      <!DOCTYPE html>
      <html lang="en">
        ${head_contents}

        <body id="page-top">
          <!-- Header-->
          <header class="masthead text-center text-white" style="height:400px; background-image:url('${background_image_tag}')";>
            <div class="masthead-content">
              <div class="container px-5">
                <h3 class="masthead-heading mb-0">${team_info.title}</h3>
              </div>
            </div>
          </header>

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

          <form action="/teamcc/user?id=${url_num}" method="post" style="text-align:center;">
            <input type="submit" value="메인 화면" style="margin-bottom: 20px; background:#B0E0E6; margin-top:30px; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
          </form>
          </br>

          <!-- Footer-->
          <footer class="footerCSS bg-black">
            <div class="container px-5"><p class="m-0 text-center text-white small footerTextCSS">Copyright &copy; HGU TeamCC Service 2023</p></div>
          </footer>
          <!-- Bootstrap core JS-->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>`;
    return tag;
  },

  // user score board page HTML (사용자 전체 순위 페이지)
  HTML_score:function(banner,body,team_info,rand_url){
    var head_contents = head_function();
    var footer_contents = footer_function();
    var background_image_tag = 'assets/img/default_background.jpg';

    if(team_info[0].background_image !== null){
      background_image_tag = `data:${team_info[0].mimetype};base64,${team_info[0].background_image}`;
    }

    var tag = `
      <!DOCTYPE html>
      <html lang="en">
        ${head_contents}

        <style>
          td{
            border: hidden;
            padding: 5px;
          }
        </style>

        <body id="page-top">
          <!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
              ${banner}
            </div>
          </nav>
          <!-- Header-->
          <header class="masthead text-center text-white headerCSS" style="background-image: url('${background_image_tag}');">
            <div class="masthead-content">
              <div class="container px-5">
                <h3 class="masthead-heading mb-0">${team_info[0].title}</h3>
              </div>
            </div>
          </header> <br/>

          <div id = "mid_container">
            ${body} <br/>
            <form action="/teamcc/user?id=${rand_url}" method="post" style="text-align:center;">
              <input type="submit" value="메인 화면" class="mainScreenBtn"/><br />
            </form> <br/>
          </div>

          ${footer_contents}
        </body>
      </html>
    `;
    return tag;
  },

  // ----------------------- function (table, grid)  -----------------------------------------------------

  //user main page activity table generate function (사용자 활동 목록 생성 함수)
  function_activityTable:function(activitycc ,random_url, count_index, team_num,team_info){
    var tag = `
      <link href="css/template_user.css" rel="stylesheet" />
      <table class="userActivityTable_css">
        <tbody style="border-radius:20px">
        <tr>
          <td class="userActivity_td" width="30px;">ID</td>
          <td class="userActivity_td" width="40%;">Activity</td>
          <td class="userActivity_td" width="30px;">Score</td>
          <td class="userActivity_td" width="100px;">Image</td>
          <td class="userActivity_td" width="50px;">Delete</td>
        </tr>
    `;

    var delete_tag = '', upload_tag = '', uploadCount_tag = '';
    var cur_team = '';
    var nth = 0;

    for(var i = 0; i < activitycc.length; i++){
      delete_tag = '';
      upload_tag = '';
      uploadCount_tag = '';

      if(activitycc[i].size !== null ){ // 이미지 업로드가 된 상태
        var duplicate_num = count_index[activitycc[i].id-1].activity_num;

        nth++;
        if(team_info[0].state === "Yes"){// member state on
          if(count_index[activitycc[i].id-1].total === count_index[activitycc[i].id-1].activity_num){
            // 사용자가 제출한 활동 개수와 제출 가능한 활동 개수가 같으면 이미지,번호 ,delete만 출력
            delete_tag = `
              <form action="/teamcc/user_delete?id=${random_url}" method="post">
                <input type="hidden" name="activity_id" value="${activitycc[i].activity_id}" />
                <input type="hidden" name="team_num" value="${activitycc[i].team_num}" />
                <input type="hidden" name="actindex" value="${activitycc[i].activity_index}" />
                <input type="submit" class="deleteBtn" value="delete" />
              </form>
            `;
            if(nth === 1){
              if(count_index[activitycc[i].id-1].activity_num === 1){
                tag += `
                  <tr>
                    <td class="tdCSS">${activitycc[i].id}</td>
                    <td class="tdCSS">${activitycc[i].activity}</td>
                    <td class="tdCSS">${activitycc[i].score}</td>
                    <td class="tdCSS">
                    <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/></td>
                    <td class="tdCSS">${nth}번째</td>
                    <td class="tdCSS">${delete_tag}</td>
                  </tr>
                `;
              } else{
                tag += `
                  <tr>
                    <td class="tdCSS_snd">${activitycc[i].id}</td>
                    <td class="tdCSS_snd">${activitycc[i].activity}</td>
                    <td class="tdCSS_snd">${activitycc[i].score}</td>
                    <td class="tdCSS_snd">
                      <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/>
                    </td>
                    <td class="tdCSS_snd">${nth}번째</td>
                    <td class="tdCSS_snd">${delete_tag}</td>
                  </tr>
                `;
              }

            } else if(nth === duplicate_num){
              tag += `
                <tr>
                  <td class="tdCSS"</td>
                  <td class="tdCSS"></td>
                  <td class="tdCSS"></td>
                  <td class="tdCSS">
                  <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/></td>
                  <td class="tdCSS">${nth}번째</td>
                  <td class="tdCSS">${delete_tag}</td>
                </tr>
              `;
            } else{
              tag += `
                <tr>
                  <td class="tdCSS_snd"></td>
                  <td class="tdCSS_snd"></td>
                  <td class="tdCSS_snd"></td>
                  <td class="tdCSS_snd">
                    <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/>
                  </td>
                  <td class="tdCSS_snd">${nth}번째</td>
                  <td class="tdCSS_snd">${delete_tag}</td>
                </tr>
              `;
            }
            if(nth === duplicate_num) nth = 0;
          } else{ // 총 중복 가능한 횟수보다 적은 이미지가 업로드 되었을 경우
            //--- 이 부분이 만약 활동 가능 개수가 여러개일 경우 추가 할 수 있게 하려는 부분 만드는 중
            var cur_team = activitycc[i].id; // ID

            for(var k = 0; k < count_index[cur_team-1].activity_num; k++){
              i = i + k;
              if(i < activitycc.length ){
                if(activitycc[i].id === cur_team){
                  for(var n = 0 ; n < count_index[cur_team-1].activity_num ; n++){
                    delete_tag = `
                      <form action="/teamcc/user_delete?id=${random_url}" method="post">
                        <input type="hidden" name="activity_id" value="${activitycc[i].activity_id}" />
                        <input type="hidden" name="team_num" value="${activitycc[i].team_num}" />
                        <input type="hidden" name="actindex" value="${activitycc[i].activity_index}" />
                        <input type="submit" class="deleteBtn" value="delete" />
                      </form>
                    `;
                    if(n+1 === activitycc[i].activity_index){ // 해당 업로드 버튼에 사진 업로드 가능하게
                      // console.log("less nth: ", n+1);
                      if(n+1 === 1){
                        tag += `
                          <tr>
                            <td>${activitycc[i].id}</td>
                            <td>${activitycc[i].activity}</td>
                            <td>${activitycc[i].score}</td>
                            <td>
                            <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/></td>
                            <td>${activitycc[i].activity_index}번째</td>
                            <td>${delete_tag}</td>
                          </tr>
                        `;
                      } else if(n+1 === activitycc[i].activity_index){
                        tag += `
                          <tr>
                            <td class="tdCSS"</td>
                            <td class="tdCSS"></td>
                            <td class="tdCSS"></td>
                            <td class="tdCSS">
                            <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/></td>
                            <td class="tdCSS">${activitycc[i].activity_index}번째</td>
                            <td class="tdCSS">${delete_tag}</td>
                          </tr>
                        `;
                      } else{
                        tag += `
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            <img id="img_${activitycc[i].activity_id}_${activitycc[i].activity_index}" src="data:${activitycc[i].mimetype};base64,${activitycc[i].image}" width=150vw height=auto onclick="modal(${activitycc[i].activity_id},${activitycc[i].activity_index})"/></td>
                            <td>${n+1}번째</td>
                            <td>${delete_tag}</td>
                          </tr>
                        `;
                      }
                    } else{ // 업로드 하지 않은 버튼은 사진 올리지 않고 업로드 버튼 그대로
                      if(n+1 === 1){
                        tag += `
                          <tr>
                            <td>${activitycc[i].id}</td>
                            <td>${activitycc[i].activity}</td>
                            <td>${activitycc[i].score}</td>
                            <td>
                              <div class="filebox">
                                <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitycc[i].id}" method="post" enctype="multipart/form-data">
                                  <label for="ex_file_${activitycc[i].id}"> 업로드</label>
                                  <input type="file" id="ex_file_${activitycc[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[i].id})" />
                                  <input type="hidden" name="actid" value=${activitycc[i].id} />
                                  <input type="hidden" name="actUpload_num" value=${n+1} />
                                  <input type="hidden" name="rand_url" value="${random_url}" />
                                  <input type="hidden" name="team_num" value="${team_num}" />
                                  <input type="hidden" name="actindex" value="${i}" />
                                </form>
                              </div>
                            </td>
                            <td>${n+1}번째</td>
                            <td>${delete_tag}</td>
                          </tr>
                        `;
                      } else if(n+1 === duplicate_num){
                        tag += `
                          <tr>
                            <td class="tdCSS"</td>
                            <td class="tdCSS"></td>
                            <td class="tdCSS"></td>
                            <td class="tdCSS">
                              <div class="filebox">
                                <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitycc[i].id}" method="post" enctype="multipart/form-data">
                                  <label for="ex_file_${activitycc[i].id}"> 업로드</label>
                                  <input type="file" id="ex_file_${activitycc[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[i].id})" />
                                  <input type="hidden" name="actid" value=${activitycc[i].id} />
                                  <input type="hidden" name="actUpload_num" value=${n+1} />
                                  <input type="hidden" name="rand_url" value="${random_url}" />
                                  <input type="hidden" name="team_num" value="${team_num}" />
                                  <input type="hidden" name="actindex" value="${i}" />
                                </form>
                              </div>
                            </td>
                            <td class="tdCSS">${n+1}번째</td>
                            <td class="tdCSS">${delete_tag}</td>
                          </tr>
                        `;
                      } else{
                        tag += `
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <div class="filebox">
                                <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitycc[i].id}" method="post" enctype="multipart/form-data">
                                  <label for="ex_file_${activitycc[i].id}"> 업로드</label>
                                  <input type="file" id="ex_file_${activitycc[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[i].id})" />
                                  <input type="hidden" name="actid" value=${activitycc[i].id} />
                                  <input type="hidden" name="actUpload_num" value=${n+1} />
                                  <input type="hidden" name="rand_url" value="${random_url}" />
                                  <input type="hidden" name="team_num" value="${team_num}" />
                                  <input type="hidden" name="actindex" value="${i}" />
                                </form>
                              </div>
                            </td>
                            <td>${n+1}번째</td>
                            <td>${delete_tag}</td>
                          </tr>
                        `;
                      }
                    }
                  }
                } else{
                  for(var n = 0 ; n < duplicate_num ; n++){
                    tag += `
                      <tr>
                        <td class="tdCSS_snd">${activitycc[i].id}</td>
                        <td class="tdCSS_snd">${activitycc[i].activity}</td>
                        <td class="tdCSS_snd">${activitycc[i].score}</td>
                        <td class="tdCSS_snd">
                          <div class="filebox">
                            <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitycc[i].id}" method="post" enctype="multipart/form-data">
                              <label for="ex_file_${activitycc[i].id}"> 업로드</label>
                              <input type="file" id="ex_file_${activitycc[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[i].id})" />
                              <input type="hidden" name="actid" value=${activitycc[i].id} />
                              <input type="hidden" name="rand_url" value="${random_url}" />
                              <input type="hidden" name="team_num" value="${team_num}" />
                              <input type="hidden" name="actindex" value="${i}" />
                            </form>
                          </div>
                        </td>
                        <td class="tdCSS">${i}번째</td>
                        <td class="tdCSS_snd">
                        </td>
                      </tr>
                    `;
                  }
                }
              }
            }//for
          }
        }
      } else{ // image size가 null - 이미지 업로드가 되지 않은 상태(사진 업로드 전에 보이는 부분)
        if(team_info[0].state === "Yes"){// member state on
          var duplicate_num = activitycc[i].activity_num;
          var temp = 0;
          // console.log(activitycc[i]);
          if(duplicate_num === 1){
            upload_tag = `
              <div class="filebox"">
                <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitycc[i].id}" method="post" enctype="multipart/form-data">
                  <label for="ex_file_${activitycc[i].id}"> 업로드${temp}</label>
                  <input type="file" id="ex_file_${activitycc[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[i].id})" />
                  <input type="hidden" name="actid" value=${activitycc[i].id} />
                  <input type="hidden" name="actUpload_num" value="${temp}" />
                  <input type="hidden" name="rand_url" value="${random_url}" />
                  <input type="hidden" name="team_num" value="${team_num}" />
                  <input type="hidden" name="actindex" value="${i}" />
                </form>
              </div>
            `;
            uploadCount_tag = `
              <div style="padding: .5em .75em; line-height: 30px;">
                1번째
              </div>
            `;
            tag += `
              <tr>
                <td class="tdCSS">${activitycc[i].id}</td>
                <td class="tdCSS">${activitycc[i].activity}</td>
                <td class="tdCSS">${activitycc[i].score}</td>
                <td class="tdCSS">${upload_tag}</td>
                <td class="tdCSS">${uploadCount_tag}</td>
                <td class="tdCSS"></td>
              </tr>
            `;
          }
          else{ //만약 중복 가능 개수가 1개 이상일 경우
            for(var n = 0 ; n < duplicate_num ; n++){
              upload_tag = `
                <div class="filebox"">
                  <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitycc[i].id}" method="post" enctype="multipart/form-data">
                    <label for="ex_file_${activitycc[i].id}"> 업로드${temp}</label>
                    <input type="file" id="ex_file_${activitycc[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[i].id})" />
                    <input type="hidden" name="actid" value=${activitycc[i].id} />
                    <input type="hidden" name="actUpload_num" value="${temp}" />
                    <input type="hidden" name="rand_url" value="${random_url}" />
                    <input type="hidden" name="team_num" value="${team_num}" />
                    <input type="hidden" name="actindex" value="${i}" />
                  </form>
                </div>
              `;
              uploadCount_tag = `
                <div style="padding: .5em .75em; line-height: 30px;">
                  ${n+1}번째
                </div>
              `;
              if(n === 0){
                tag += `
                  <tr>
                    <td class="tdCSS_snd">${activitycc[i].id}</td>
                    <td class="tdCSS_snd">${activitycc[i].activity}</td>
                    <td class="tdCSS_snd">${activitycc[i].score}</td>
                    <td class="tdCSS_snd">${upload_tag}</td>
                    <td class="tdCSS_snd">${uploadCount_tag}</td>
                    <td class="tdCSS_snd"></td>
                  </tr>
                `;
              }
              else if(n != duplicate_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd">${upload_tag}</td>
                    <td class="tdCSS_snd">${uploadCount_tag}</td>
                    <td class="tdCSS_snd"></td>
                  </tr>
                `;
              }else{
                tag += `
                  <tr>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS">${upload_tag}</td>
                    <td class="tdCSS">${uploadCount_tag}</td>
                    <td class="tdCSS"></td>
                  </tr>
                `;
              }
              uploadCount_tag = '';
              upload_tag = '';
            }
          }
        }
      }
    }

    tag += `
        </tbody>
      </table>
      <script>
        function img(e, form_num){
          var file = e.files[0];
          var newImage = document.createElement("img");

          newImage.setAttribute("class", 'img');
          document.getElementById("form_bt_"+form_num).submit();
          newImage.src = url.createObjecturl(file);
          newImage.style.width = "150px";
          newImage.style.height = "150px";
          newImage.style.visibility  = "visible";
          newImage.style.objectFit = "contain";

          var container = document.getElementById('image-show');
          if(container.childElementCount === 0){
            container.appendChild(newImage);
          }else{
            container.removeChild(container.firstChild);
            container.appendChild(newImage);
          }
        }
      </script>
    `;
    return tag;
  },

  // card image activity table generate function (사용자 카드 이미지 활동 테이블 생성 함수)
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
      </tr>`;

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
            </td>`;
        }else{
          temp +=`
            <td id="td_table">
              <p style="font-size:3vw; margin-left:20px;"> &nbsp </p>
              <div id="td_background" style="margin-left:12px; background:${activity[i].color};">
                <p id="point_5" style="color:${text_color}; ">${activity[i].activity}</p>
              </div>
            </td>`;
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

    //-------------------------     merge table       ----------
    table = `
      <table id="tb_activityImage" style="background:${background_color}; width: 80vw;">
        <tbody>
          ${table}
        </tbody>
      </table>`;

    return table;
  }
}
