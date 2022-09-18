module.exports = {
  //----------------------   user  -----------------------------
  //user 화면 기본 html
  main_HTML:function( body, control,team_num,team_info){
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
        </head>
        <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div class="container px-5">
                    <a class="navbar-brand">User Page</a>
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
  userActivityTable:function(activitycc ,random_url, activitylist,team_num,team_info){
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
          padding: 7px;

        }
      </style>
      <table style="text-align:center;margin:auto; margin-top:50px;">
      <tbody style=" border-radius:20px">

      <tr>
          <td style="border-bottom:2px solid black; width:30px; font-size: 25px; font-weight:bold;">ID</td>
          <td style="border-bottom:2px solid black; width:40%; font-size: 25px; font-weight:bold;">Activity</td>
          <td style="border-bottom:2px solid black; width:30px; font-size: 25px; font-weight:bold;">Score</td>
          <td style="border-bottom:2px solid black; width:100px; font-size: 25px; font-weight:bold;">Image</td>
          <td style="border-bottom:2px solid black; width:50px; font-size: 25px; font-weight:bold;">Delete</td>
      </tr>

      `;

      var i = 0;
      var check = -1;
      var delete_tag = '';
      var upload_tag = '';	  
      while(i < activitylist.length){
	check = -1; 
	delete_tag = '';      
	upload_tag = '';      
	 for(var k = 0; k<activitycc.length; k++){
	  console.log(activitylist[i].id +" hit is " + activitycc[k].id); 
	  if(activitylist[i].id === activitycc[k].id){
	    console.log("hihi"); 
	    check = k;
	   }	

	 }
         	 
	 if(check >= 0){
	  if(team_info[0].state === "Yes"){
           delete_tag = `
             <form action="/user_delete?id=${random_url}" method="post">
	        <input type="hidden" name="activity_id" value="${activitycc[check].activity_id}" />
	        <input type="submit" style="border:0px; font-weight:bold; border-radius:20px; width:80px; height:30px" value="delete" />
	     </form>

            `;

	  }	 
          tag += `
              <tr>
                  <td style="border-bottom:2px solid lightgrey;">${i+1}</td>
                  <td style="border-bottom:2px solid lightgrey;">${activitylist[i].activity}</td>
                  <td style="border-bottom:2px solid lightgrey;">${activitylist[i].score}</td>
                  <td style="border-bottom:2px solid lightgrey;">
                  <img src="data:${activitycc[check].mimetype};base64,${activitycc[check].image}" width=150vw height=auto/>
                  </td>
                  <td style="border-bottom:2px solid lightgrey;">
		  ${delete_tag}
		  </td>
              </tr>
          `;
          i++;
        }else{
	  if(team_info[0].state === "Yes"){
            upload_tag = `
             <div class="filebox">
	     <form action='/image_upload?rand=${random_url}' id="form_bt_${activitylist[i].id}" method="post" enctype="multipart/form-data">
	     <label for="ex_file_${activitylist[i].id}"> 업로드</label>
	     <input type="file" id="ex_file_${activitylist[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitylist[i].id})" style="display:inline; border:0px;" />

	     <input type="hidden" name="actid" value=${activitylist[i].id} />
	     <input type="hidden" name="rand_url" value="${random_url}" />
	     <input type="hidden" name="team_num" value="${team_num}" />
	     </form>
             </div> `;
	  }	
          tag += `
              <tr>
                  <td style="border-bottom:2px solid lightgrey;">${i+1}</td>
                  <td style="border-bottom:2px solid lightgrey;">${activitylist[i].activity}</td>
                  <td style="border-bottom:2px solid lightgrey;">${activitylist[i].score}</td>
                  <td style="border-bottom:2px solid lightgrey;">
                  ${upload_tag}
		  </td>
                  <td style="border-bottom:2px solid lightgrey;">
                  </td>
              </tr>
          `;
	
          i++;
        }
      }
      tag += `</tbody></table>    <script>
        function img(e, form_num){
              //이미지 형식은 blob형식
              var file = e.files[0];
              //blob 형식의 이미지 url로 변환시키기
              var newImage = document.createElement("img");
              newImage.setAttribute("class", 'img');

              document.getElementById("form_bt_"+form_num).submit();
             //이미지 source 가져오기
             newImage.src = url.createObjecturl(file);

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
      </script>  `;
      return tag;
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
          </head>
          <body id="page-top">
              <!-- Navigation-->
              <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                  <div class="container px-5">
                      <a class="navbar-brand">User Page</a>
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
              <br />
              ${body}
              <br />
              <form action="/user?id=${rand_url}" method="post" style="text-align:center;">
                <input type="submit" value="메인 화면" style="background:#B0E0E6;   font-family: 'Jua', sans-serif; font-size:20px;border:0px; font-weight:bold; border-radius:20px; width:200px; height:50px"  /><br />
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
    }
}
