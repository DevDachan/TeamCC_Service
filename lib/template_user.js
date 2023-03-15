
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
          <td class="userActivity_td" width="100px;">Number</td>
          <td class="userActivity_td" width="130px;">Image</td>
          <td class="userActivity_td" width="50px;">Delete</td>
        </tr>
    `;

    var delete_tag = '', upload_tag = '', uploadCount_tag = '';
    var activitycc_temp = 0;
    var empty = false;
    var index_number = 0;
    for(var i =0; i<count_index.length; i++){
      empty = false;
      for(var activity_index = 0; activity_index < count_index[i].activity_num; activity_index++){
          if(team_info[0].state === "Yes"){// member state on
            if(count_index[i].max_index !== null){
              index_number = count_index[i].max_index+activity_index;
            }else{
              index_number = activity_index;
            }

            if(empty === true){ // for문을 돌리면서 만약 index가 차지 않았을 경우를 대비
             var prev_temp = activitycc_temp-1;
             upload_tag = `
               <div class="filebox"">
                 <form action='/teamcc/image_upload?rand=${random_url}' class="upload_bt" id="form_bt_${activitycc[prev_temp].id}" method="post" enctype="multipart/form-data">
                   <label for="ex_file_${activitycc[prev_temp].id}"> 업로드</label>
                   <input type="file" id="ex_file_${activitycc[prev_temp].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[prev_temp].id})" />
                   <input type="hidden" name="actid" value=${activitycc[prev_temp].id} />
                   <input type="hidden" name="rand_url" value="${random_url}" />
                   <input type="hidden" name="team_num" value="${team_num}" />
                   <input type="hidden" name="actindex" value="${index_number}" />
                 </form>
               </div>
             `;
             uploadCount_tag = `
               <div style="padding: .5em .75em; line-height: 30px;">
                ${activity_index+1}번째
               </div>
             `;

        //---------------------------- tag line -----------------------------------------
              if(activity_index === 0 && activity_index === count_index[i].activity_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS">${activitycc[prev_temp].id}</td>
                    <td class="tdCSS">${activitycc[prev_temp].activity}</td>
                    <td class="tdCSS">${activitycc[prev_temp].score}점</td>
                    <td class="tdCSS">${uploadCount_tag}</td>
                    <td class="tdCSS">${upload_tag}</td>
                    <td class="tdCSS"></td>
                  </tr>
                `;
              }else if(activity_index === 0){
                tag += `
                  <tr>
                    <td class="tdCSS_snd">${activitycc[prev_temp].id}</td>
                    <td class="tdCSS_snd">${activitycc[prev_temp].activity}</td>
                    <td class="tdCSS_snd">${activitycc[prev_temp].score}점</td>
                    <td class="tdCSS_snd">${uploadCount_tag}</td>
                    <td class="tdCSS_snd">${upload_tag}</td>
                    <td class="tdCSS_snd"></td>
                  </tr>
                `;
              }else if(activity_index === count_index[i].activity_num-1){
               tag += `
                 <tr>
                   <td class="tdCSS"></td>
                   <td class="tdCSS"></td>
                   <td class="tdCSS"></td>
                   <td class="tdCSS">${uploadCount_tag}</td>
                   <td class="tdCSS">${upload_tag}</td>
                   <td class="tdCSS"></td>
                 </tr>
               `;

             }else{
               tag += `
                 <tr>
                   <td class="tdCSS_snd"></td>
                   <td class="tdCSS_snd"></td>
                   <td class="tdCSS_snd"></td>
                   <td class="tdCSS_snd">${uploadCount_tag}</td>
                   <td class="tdCSS_snd">${upload_tag}</td>
                   <td class="tdCSS_snd"></td>
                 </tr>
               `;

             }

        //----------------------------------------------------------------------------------

           }else if(activitycc[activitycc_temp].size === null){
              upload_tag = `
                <div class="filebox"">
                  <form action='/teamcc/image_upload?rand=${random_url}' class="upload_bt" id="form_bt_${activitycc[activitycc_temp].id}" method="post" enctype="multipart/form-data">
                    <label for="ex_file_${activitycc[activitycc_temp].id}"> 업로드</label>
                    <input type="file" id="ex_file_${activitycc[activitycc_temp].id}" name="userfile" accept="image/*" required onchange="img(this,${activitycc[activitycc_temp].id})" />
                    <input type="hidden" name="actid" value=${activitycc[activitycc_temp].id} />
                    <input type="hidden" name="rand_url" value="${random_url}" />
                    <input type="hidden" name="team_num" value="${team_num}" />
                    <input type="hidden" name="actindex" value="${index_number}" />
                  </form>
                </div>
              `;
              uploadCount_tag = `
                <div style="padding: .5em .75em; line-height: 30px;">
                  ${activity_index+1}번째
                </div>
              `;
              //---------------------------- tag line -----------------------------------------
              if(activity_index === 0 && activity_index === count_index[i].activity_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS">${activitycc[activitycc_temp].id}</td>
                    <td class="tdCSS">${activitycc[activitycc_temp].activity}</td>
                    <td class="tdCSS">${activitycc[activitycc_temp].score}점</td>
                    <td class="tdCSS">${uploadCount_tag}</td>
                    <td class="tdCSS">${upload_tag}</td>
                    <td class="tdCSS"></td>
                  </tr>
                `;
              }else if(activity_index === 0){
                tag += `
                  <tr>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].id}</td>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].activity}</td>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].score}점</td>
                    <td class="tdCSS_snd">${uploadCount_tag}</td>
                    <td class="tdCSS_snd">${upload_tag}</td>
                    <td class="tdCSS_snd"></td>
                  </tr>
                `;
              }
              else if(activity_index === count_index[i].activity_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS">${uploadCount_tag}</td>
                    <td class="tdCSS">${upload_tag}</td>
                    <td class="tdCSS"></td>
                  </tr>
                `;
              }
              else{
                tag += `
                  <tr>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd">/td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd">${uploadCount_tag}</td>
                    <td class="tdCSS_snd">${upload_tag}</td>
                    <td class="tdCSS_snd"></td>
                  </tr>
                `;
              }
            //-------------------------------------------------------------------------


            }else{ //이미지가 들어 있을 경우 나타내기
              delete_tag = `
                <form action="/teamcc/user_delete?id=${random_url}" method="post">
                  <input type="hidden" name="activity_id" value="${activitycc[activitycc_temp].activity_id}" />
                  <input type="hidden" name="team_num" value="${activitycc[activitycc_temp].team_num}" />
                  <input type="hidden" name="actindex" value="${activitycc[activitycc_temp].activity_index}" />
                  <input type="submit" class="deleteBtn" value="delete" />
                </form>
              `;
      //--------------------------------- tag line -----------------------------------------
              if(activity_index === 0 && activity_index === count_index[i].activity_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS">${activitycc[activitycc_temp].id}</td>
                    <td class="tdCSS">${activitycc[activitycc_temp].activity}</td>
                    <td class="tdCSS">${activitycc[activitycc_temp].score}점</td>
                    <td class="tdCSS">${activity_index+1}번째</td>
                    <td class="tdCSS">
                      <img id="img_${activitycc[activitycc_temp].activity_id}_${activitycc[activitycc_temp].activity_index}" src="data:${activitycc[activitycc_temp].mimetype};base64,${activitycc[activitycc_temp].image}" width=150vw height=auto onclick="modal(${activitycc[activitycc_temp].activity_id},${activitycc[activitycc_temp].activity_index})"/>
                    </td>
                    <td class="tdCSS">${delete_tag}</td>
                  </tr>
                `;
              }else if(activity_index === 0){
                tag += `
                  <tr>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].id}</td>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].activity}</td>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].score}점</td>
                    <td class="tdCSS_snd">${activity_index+1}번째</td>
                    <td class="tdCSS_snd">
                      <img id="img_${activitycc[activitycc_temp].activity_id}_${activitycc[activitycc_temp].activity_index}" src="data:${activitycc[activitycc_temp].mimetype};base64,${activitycc[activitycc_temp].image}" width=150vw height=auto onclick="modal(${activitycc[activitycc_temp].activity_id},${activitycc[activitycc_temp].activity_index})"/>
                    </td>
                    <td class="tdCSS_snd">${delete_tag}</td>
                  </tr>
                `;
              }else if(activity_index === count_index[i].activity_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS">${activity_index+1}번째</td>
                    <td class="tdCSS">
                      <img id="img_${activitycc[activitycc_temp].activity_id}_${activitycc[activitycc_temp].activity_index}" src="data:${activitycc[activitycc_temp].mimetype};base64,${activitycc[activitycc_temp].image}" width=150vw height=auto onclick="modal(${activitycc[activitycc_temp].activity_id},${activitycc[activitycc_temp].activity_index})"/>
                    </td>
                    <td class="tdCSS">${delete_tag}</td>
                  </tr>
                `;
              }else{
                tag += `
                  <tr>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd">${activity_index+1}번째</td>
                    <td class="tdCSS_snd">
                      <img id="img_${activitycc[activitycc_temp].activity_id}_${activitycc[activitycc_temp].activity_index}" src="data:${activitycc[activitycc_temp].mimetype};base64,${activitycc[activitycc_temp].image}" width=150vw height=auto onclick="modal(${activitycc[activitycc_temp].activity_id},${activitycc[activitycc_temp].activity_index})"/>
                    </td>
                    <td class="tdCSS_snd">${delete_tag}</td>
                  </tr>
                `;
              }
          //---------------------------------------------------------------------------------

            }
          }else{ // member state off
            if(activitycc[activitycc_temp].size === null){
              uploadCount_tag = `
                <div style="padding: .5em .75em; line-height: 30px;">
                  1번째
                </div>
              `;
              if(activity_index === count_index[i].activity_num-1){
                tag += `
                  <tr>
                    <td class="tdCSS">${activitycc[activitycc_temp].id}</td>
                    <td class="tdCSS">${activitycc[activitycc_temp].activity}</td>
                    <td class="tdCSS">${activitycc[activitycc_temp].score}점</td>
                    <td class="tdCSS">${uploadCount_tag}</td>
                    <td class="tdCSS"></td>
                    <td class="tdCSS"></td>
                  </tr>
                `;
              }else{
                tag += `
                  <tr>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].id}</td>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].activity}</td>
                    <td class="tdCSS_snd">${activitycc[activitycc_temp].score}점</td>
                    <td class="tdCSS_snd">${uploadCount_tag}</td>
                    <td class="tdCSS_snd"></td>
                    <td class="tdCSS_snd"></td>
                  </tr>
                `;
              }
            }
          }

        if(empty === false && activitycc_temp < activitycc.length-1 && activitycc[activitycc_temp].id === count_index[i].id){
          activitycc_temp++;
          if(activitycc[activitycc_temp].id !==count_index[i].id){
            empty = true;
          }
        }else if(activitycc_temp === activitycc.length-1 && activity_index < count_index[i].activity_num-1 && i === count_index.length-1){
          activitycc_temp++;
          empty = true;
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
