
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
        function modal(img){
           var img_tag = 'img_'+ img;
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

    if(team_info[0].background_image !== null){
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
  function_activityTable:function(activitycc ,random_url, activitylist,team_num,team_info){
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

    var i = 0;
    var check = -1;
    var delete_tag = '', upload_tag = '';
    while(i < activitylist.length){
      check = -1;
      delete_tag = '';
      upload_tag = '';
      for(var k = 0; k<activitycc.length; k++){
        if(activitylist[i].id === activitycc[k].id){
          check = k;
        }
      }
      /*check == 해당 activity의 시작 값 (activity id가 변하는 부분까지 추가를 하면 됨)
      activity_index는 그냥 최대값 + 1?
      문제가 될 부분?*/

      // 만약 check가 0보다 클 경우 해당 activity에 data가 존재한다는 뜻
      if(check >= 0){
        if(team_info[0].state === "Yes"){// member state on
          for(var activity_step = 1; activity_step <= activitylist[i].activity_num; activity_step++){
            var current_index = check+activity_step-1;
            if(activitycc[current_index] !== undefined){
              delete_tag = `
                <link href="css/template_user.css" rel="stylesheet" />
                <form action="/teamcc/user_delete?id=${random_url}" method="post">
                  <input type="hidden" name="activity_id" value="${activitycc[current_index].activity_id}" />
                  <input type="hidden" name="actindex" value="${activitycc[current_index].activity_index}" />
                  <input type="submit" class="deleteBtn" value="delete" />
                </form>
              `;
              if(activity_step === 1){ // 첫번째 activity만 data 출력
                tag += `
                  <link href="css/template_user.css" rel="stylesheet" />
                  <tr>
                    <td class="tdCSS_snd">${i+1}</td>
                    <td class="tdCSS_snd">${activitylist[i].activity}</td>
                    <td class="tdCSS_snd">${activitylist[i].score}</td>
                    <td class="tdCSS_snd">
                    <img id="img_${activitycc[current_index].activity_id}_${activitycc[current_index].activity_index}" src="data:${activitycc[current_index].mimetype};base64,${activitycc[current_index].image}" width=150vw height=auto onclick="modal(${activitycc[current_index].activity_id},${activitycc[current_index].activity_index})"/></td>
                    <td class="tdCSS_snd">${delete_tag}</td>
                  </tr>
                `;
              }
              else if(activity_step === activitylist[i].activity_num){ // 마지막 activity일 때만 border bottom
                tag += `
                  <link href="css/template_user.css" rel="stylesheet" />
                  <tr>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS">
                    <img id="img_${activitycc[current_index].activity_id}_${activitycc[current_index].activity_index}" src="data:${activitycc[current_index].mimetype};base64,${activitycc[current_index].image}" width=150vw height=auto onclick="modal(${activitycc[current_index].activity_id},${activitycc[current_index].activity_index})"/></td>
                    <td class="tdCSS">${delete_tag}</td>
                  </tr>
                `;
              }
              else{ //나머지 activity의 경우 data출력 X, border bottome X
                tag += `
                  <link href="css/template_user.css" rel="stylesheet" />
                  <tr>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd">
                    <img id="img_${activitycc[current_index].activity_id}_${activitycc[current_index].activity_index}" src="data:${activitycc[current_index].mimetype};base64,${activitycc[current_index].image}" width=150vw height=auto onclick="modal(${activitycc[current_index].activity_id},${activitycc[current_index].activity_index})"/></td>
                    <td class="tdCSS_snd">${delete_tag}</td>
                  </tr>
                `;
              }
            }else{
              upload_tag += `
                <div class="filebox">
                  <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitylist[i].id}" method="post" enctype="multipart/form-data">
                    <label for="ex_file_${activitylist[i].id}"> 업로드</label>
                    <input type="file" id="ex_file_${activitylist[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitylist[i].id})" />
                    <input type="hidden" name="actid" value=${activitylist[i].id} />
                    <input type="hidden" name="rand_url" value="${random_url}" />
                    <input type="hidden" name="team_num" value="${team_num}" />
                    <input type="hidden" name="actindex" value="${activity_step}" />
                  </form>
                </div>
              `;
              tag += `
                <link href="css/template_user.css" rel="stylesheet" />
                <tr>
                  <td class="tdCSS"></td>
                  <td class="tdCSS"></td>
                  <td class="tdCSS"></td>
                  <td class="tdCSS">${upload_tag}</td>
                  <td class="tdCSS"></td>
                </tr>
              `;
            }
            if(activity_step !== 1){
              i++;
            }
          }
        }
        else{// member state off
          tag += `
            <link href="css/template_user.css" rel="stylesheet" />
            <tr>
              <td class="tdCSS">${i+1}</td>
              <td class="tdCSS">${activitylist[i].activity}</td>
              <td class="tdCSS">${activitylist[i].score}</td>
              <td class="tdCSS">
              <img id="img_${activitycc[check].activity_id}_${activitycc[check].activity_index}" src="data:${activitycc[check].mimetype};base64,${activitycc[check].image}" width=150vw height=auto onclick="modal(${activitycc[check].activity_id})"/></td>
              <td class="tdCSS"></td>
            </tr>
          `;
        }
        i++;
      } else{
	      if(team_info[0].state === "Yes"){// member state on
          for(var activity_step = 1; activity_step <= activitylist[i].activity_num; activity_step++){
            upload_tag += `
              <div class="filebox">
                <form action='/teamcc/image_upload?rand=${random_url}' id="form_bt_${activitylist[i].id}" method="post" enctype="multipart/form-data">
                  <label for="ex_file_${activitylist[i].id}"> 업로드</label>
                  <input type="file" id="ex_file_${activitylist[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitylist[i].id})" />
                  <input type="hidden" name="actid" value=${activitylist[i].id} />
                  <input type="hidden" name="rand_url" value="${random_url}" />
                  <input type="hidden" name="team_num" value="${team_num}" />
                  <input type="hidden" name="actindex" value="${activity_step}" />
                </form>
              </div>
            `;
            tag += `
              <link href="css/template_user.css" rel="stylesheet" />
              <tr>
                <td class="tdCSS">${i+1}</td>
                <td class="tdCSS">${activitylist[i].activity}</td>
                <td class="tdCSS">${activitylist[i].score}</td>
                <td class="tdCSS">${upload_tag}</td>
                <td class="tdCSS"></td>
              </tr>
            `;
          }
	      }else{ // member state off
          tag += `
            <link href="css/template_user.css" rel="stylesheet" />
            <tr>
              <td class="tdCSS">${i+1}</td>
              <td class="tdCSS">${activitylist[i].activity}</td>
              <td class="tdCSS">${activitylist[i].score}</td>
              <td class="tdCSS"></td>
              <td class="tdCSS"></td>
            </tr>
          `;
        }
        i++;
      }

    }//while
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
