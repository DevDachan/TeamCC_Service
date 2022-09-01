module.exports = {
  //----------------------   user  -----------------------------
  //user 화면 기본 html
  main_HTML:function( body, control,team_num,team_name){
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
            ${body}
            ${control}
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

    },
  //user의 main activity목록 생성
  userActivityTable:function(activitycc ,random_url, activitylist,team_num){
      var tag = `
      <style>
        .filebox label {
          display: inline-block;
          padding: .5em .75em;
          color: white;
          font-weight: bold;
          font-size: inherit;
          line-height: normal;
          vertical-align: middle;
          background-color: #fdfdfd;
          cursor: pointer;
          border: 1px solid #ebebeb;
          border-bottom-color: #e2e2e2;
          border-radius: .25em;
          background-color: #337ab7;
          border-color: #2e6da4;
        }


        .filebox input[type="file"] {  /* 파일 필드 숨기기 */
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip:rect(0,0,0,0);
          border: 0;
        }
        td{
          text-align:center;
          border: 0px;
          border:2px solid black;
          padding: 7px;

        }
      </style>
      <table style="text-align:center;margin:auto; margin-top:50px;">
      <tbody style=" border-radius:20px">

      <tr>
          <td style="border-bottom:2px solid black; width:30px">ID</td>
          <td style="border-bottom:2px solid black; width:400px">Activity</td>
          <td style="border-bottom:2px solid black; width:30px">Score</td>
          <td style="border-bottom:2px solid black; width:100px">Image</td>
          <td style="border-bottom:2px solid black; width:50px">Delete</td>
      </tr>

      `;

      var i = 0;
      var count = 0;

      while(i < activitylist.length){
        if(count < activitycc.length && activitylist[i].activity === activitycc[count].activity){
          tag += `
              <tr>
                  <td>${i+1}</td>
                  <td>${activitycc[count].activity}</td>
                  <td>${activitycc[count].score}</td>
                  <td>
                  <img src="data:${activitycc[count].mimetype};base64,${activitycc[count].image}" width=100px height=100px>
                  </td>
                  <td>
                    <form action="/user_delete?id=${random_url}" method="post">
                      <input type="hidden" name="activity_id" value="${activitycc[count].activity_id}">
                      <input type="submit" style="border:0px; font-weight:bold; border-radius:20px; width:80px; height:30px" value="delete">
                    </form>
                  </td>
              </tr>
          `
          i++;
          count++;
        }else{
          tag += `
              <tr>
                  <td>${i+1}</td>
                  <td>${activitylist[i].activity}</td>
                  <td>${activitylist[i].score}</td>
                  <td>
                  <div class="filebox">
                  <form action='/image_upload?rand=${random_url}' id="submit_bt" method="post" enctype="multipart/form-data">
                    <label for="ex_file"> 업로드 </label>
                    <input type="file" id="ex_file" style=" border:0px;"
                     id="fileinput" name="userfile" accept="image/*" required onchange="img(this)" style="display:inline;">

                    <input type="hidden" name="actid" value=${i+1}>
                    <input type="hidden" name="rand_url" value="${random_url}">
                    <input type="hidden" name="team_num" value="${team_num}">
                  </form>
                  <div>
                  </td>
                  <td>
                  </td>
              </tr>
          `
          i++;
        }

      }
      tag += `</tbody></table>      <script>
                            function img(e){
                                //이미지 형식은 blob형식
                                var file = e.files[0];
                                //blob 형식의 이미지 URL로 변환시키기
                                var newImage = document.createElement("img");
                                newImage.setAttribute("class", 'img');
                                document.getElementById("submit_bt").submit();
                               //이미지 source 가져오기
                               newImage.src = URL.createObjectURL(file);

                               newImage.style.width = "150px";
                               newImage.style.height = "150px";
                               newImage.style.visibility  = "visible";
                               newImage.style.objectFit = "contain";

                               //이전 이미지를 삭제 후 image-show div에 추가
                               var container = document.getElementById('image-show');
                               if(container.childElementCount === 0){
                                 container.appendChild(newImage);
                               }
                               else{
                                container.removeChild(container.firstChild);
                                container.appendChild(newImage);
                                }
                            }
                          </script>`;
      return tag;
    },
    // user의 score board 화면 HTML
    score_HTML:function(body,team_name){

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
    }
}
