module.exports = {
  //----------------------   user  -----------------------------
  //user 화면 기본 html
  main_HTML:function( banner, body, team_num,team_info){
    var background_image_tag = 'assets/img/default_background.jpg';
    if(team_info[0].background_image !== null){
      background_image_tag = `data:${team_info[0].mimetype};base64,${team_info[0].background_image}`;
    }

    return `
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
          <link href="css/template_user.css" rel="stylesheet" />

          <script>
            function modal(img){
               var img_tag = 'img_'+ img;
               document.getElementById('modal_img').src = document.getElementById(img_tag).src;
               document.getElementById('modal_bt').click();
            }
          </script>

        </head>
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

            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="js/scripts.js"></script>
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
          <!-- Footer-->
          <footer class="footerCSS">
            <div class="footerTextCSS">
              <p class="m-0 text-center text-white small">Copyright &copy; HGU TeamCC Service 2023</p>
            </div>
          </footer>
        </body>
      </html>
    `;
  },

  //user의 main activity목록 생성
  userActivityTable:function(activitycc ,random_url, activitylist,team_num,team_info){
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

      if(check >= 0){
        if(team_info[0].state === "Yes"){
          delete_tag = `
            <link href="css/template_user.css" rel="stylesheet" />
            <form action="/user_delete?id=${random_url}" method="post">
              <input type="hidden" name="activity_id" value="${activitycc[check].activity_id}" />
              <input type="submit" class="deleteBtn" value="delete" />
            </form>
          `;
        }
        tag += `
          <link href="css/template_user.css" rel="stylesheet" />
          <tr>
            <td class="tdCSS">${i+1}</td>
            <td class="tdCSS">${activitylist[i].activity}</td>
            <td class="tdCSS">${activitylist[i].score}</td>
            <td class="tdCSS">
            <img id="img_${activitycc[check].activity_id}" src="data:${activitycc[check].mimetype};base64,${activitycc[check].image}" width=150vw height=auto onclick="modal(${activitycc[check].activity_id})"/></td>
            <td class="tdCSS">${delete_tag}</td>
          </tr>
        `;
        i++;
      } else{
	      if(team_info[0].state === "Yes"){
          upload_tag = `
            <div class="filebox">
              <form action='/image_upload?rand=${random_url}' id="form_bt_${activitylist[i].id}" method="post" enctype="multipart/form-data">
                <label for="ex_file_${activitylist[i].id}"> 업로드</label>
                <input type="file" id="ex_file_${activitylist[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitylist[i].id})" />
                <input type="hidden" name="actid" value=${activitylist[i].id} />
                <input type="hidden" name="rand_url" value="${random_url}" />
                <input type="hidden" name="team_num" value="${team_num}" />
              </form>
            </div>
          `;
	      }
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
        i++;
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


  image_card_HTML:function(activity,team_info,color_db,admin_id,text_color_db,score_color_db,url_num){
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
          <link href="css/admin.css" rel="stylesheet" />

          <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
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
                  scale: 1
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
            <button id="captureBtn" onclick="capture();">학점표 이미지 다운로드</button>
          </div>

          <br />
          <div id="activityCapture">
            ${this.activityImagewithoutPick(activity,team_info,color_db,admin_id,text_color_db,score_color_db)}
          </div>
          <br />

          <form action="/user?id=${url_num}" method="post" style="text-align:center;">
            <input type="submit" value="메인 화면" style="margin-bottom: 20px; background:#B0E0E6; margin-top:30px; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
          </form>
          </br>

          <!-- Footer-->
          <footer class="footerCSS bg-black">
            <div class="container px-5"><p class="m-0 text-center text-white small footerTextCSS">Copyright &copy; HGU TeamCC Service 2023</p></div>
          </footer>
          <!-- Bootstrap core JS-->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
          <!-- Core theme JS-->
          <script src="js/scripts.js"></script>
        </body>
      </html>`;
    return tag;
  },
  activityImagewithoutPick:function(activity,team_info,color_db,admin_id,text_color_db,score_color_db){
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
  },
  // user의 score board 화면 HTML
  score_HTML:function(body,team_info,rand_url){
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
          <link href="css/template_user.css" rel="stylesheet" />
          <style>
            td{
              border: hidden;
              padding: 5px;
            }
        </style>
        </head>
        <body id="page-top">
          <!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
              <a class="navbar-brand">User Page</a>
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
            <form action="/user?id=${rand_url}" method="post" style="text-align:center;">
              <input type="submit" value="메인 화면" class="mainScreenBtn"/><br />
            </form> <br/>
          </div>

          <!-- Footer-->
          <footer class="footerCSS">
            <div class="footerTextCSS">
              <p class="m-0 text-center text-white small">Copyright &copy; HGU TeamCC Service 2023</p>
            </div>
          </footer>
          <!-- Bootstrap core JS-->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
          <!-- Core theme JS-->
          <script src="js/scripts.js"></script>
        </body>
      </html>
    `;
    return tag;
  }
}
