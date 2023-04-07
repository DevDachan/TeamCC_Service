/*
  template_developer.js File
  (Modified on 2023.03.24)
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
    // 개발자 관리 페이지 로그인 
  HTML_developerLogin:function(){
    return`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Coming Soon - Start Bootstrap Theme</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <!-- Font Awesome icons (free version)-->
                <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
                <!-- Google fonts-->
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap" rel="stylesheet" />
                <!-- Core theme CSS (includes Bootstrap)-->
                <link href="/teamcc/css/styles2.css" rel="stylesheet" />
                <link href="/teamcc/css/developer.css" rel="stylesheet" />
            </head>
            <body>
                <!-- Background Video-->
                <video class="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/backVideo.mp4" type="video/mp4" /></video>
                <!-- Masthead-->
                <div class="masthead">
                    <div class="masthead-content text-white">
                        <div class="container-fluid px-4 px-lg-0" style="padding: 20px;">
                            <h1 style="font-size; 30px;" class="fst-italic lh-1 mb-4">Team CC Service Depelover's Admin Page</h1>
                            <p style="font-size: 13px; paddig-right: 20px;" class="mb-5">This is a developer management page where you can view total views, daily views, number of registered images per team, number of registered activities, and list of subscribers etc.</p>
                            
                            <!-- login box -->
                            <form style="width:400px;" action="http://handongapp.cafe24.com/teamcc/developer/login_action" method="post">
                                <h4 id="lb_ID" >ID</h4>
                                <input id="ip_id" class="infoBlank" name="id" required type="text"></input>
                                <div>&nbsp;</div>
                                <h4 id="lb_PWD" style="  margin-top: 5px;">PWD</h4>
                                <input id="ip_pwd" class="infoBlank" required name="pwd" type="password"></input>
                                <br>
                                <input id="bt_login" type="submit" value="LOGIN" class="btn btn-primary btn-xl rounded-pill mt-5" ></input>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Bootstrap core JS-->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <!-- Core theme JS-->
                <script src="/teamcc/js/scripts.js"></script>
                <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
                <!-- * *                               SB Forms JS                               * *-->
                <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
                <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
                <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            </body>
        </html>    
    `;
    },

    // team info db table 
    function_teamInfoTable:function(activityCount, teamImgCount, team_info){
        // console.log(teamImgCount); // 팀별 activity 수 리스트

        var tag = ``;
        for(var i = 0; i < team_info.length; i++){
          tag +=`
            <tr>
                <td><b>${team_info[i].title}</b></td>
                <td>${activityCount[i]}</td>
                <td>${team_info[i].num}</td>
                <td>${teamImgCount[i]}</td>
                <td>${team_info[i].admin_id}</td>
            </tr>`;
        }

        return tag;
    },

    // 개발자 관리 페이지 로그인 
    HTML_developerMain:function(activityCount, teamImgCount, team_info, alertFlag, totalViewers, adminViewers, userViewers, imgCount, teamNum, todayTotalViewers, todayAdminViewers, todayUserViewers){
        var head_contents = head_function();

        console.log(alertFlag);
        if(alertFlag === "noSession"){
          var modalTitle = '로그인을 다시 해주세요!';
          var modalContent = '로그인 세션 정보가 존재하지 않습니다.<br>로그인 화면으로 돌아갑니다!';
          var backURL = 'http://handongapp.cafe24.com/teamcc/developer';
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
        return`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <meta name="author" content="">
        
            <title>Developer's - Dashboard</title>
        
            <!-- Custom fonts for this template-->
            <link href="/teamcc/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet">
        
            <!-- Custom styles for this template-->
            <link href="/teamcc/css/sb-admin-2.min.css" rel="stylesheet">
            <link href="/teamcc/css/developer.css" rel="stylesheet">
        </head>
        
        <body id="page-top">
        
            <!-- Page Wrapper -->
            <div id="wrapper">
                <!-- Sidebar -->
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <!-- Sidebar - Brand -->
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="http://handongapp.cafe24.com/teamcc/developer/admin_main">
                        <div class="sidebar-brand-text mx-3">Developer Page</div>
                    </a>
        
                    <!-- Divider -->
                    <hr class="sidebar-divider my-0">
        
                    <!-- Nav Item - Dashboard -->
                    <li class="nav-item active">
                        <a class="nav-link" href="#dashBoard">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>
        
                    <!-- Divider -->
                    <hr class="sidebar-divider">
        
                    <!-- Heading -->
                    <div class="sidebar-heading">
                        Components
                    </div>
        
                    <!-- Nav Item - Tables -->
                    <li class="nav-item">
                        <a class="nav-link" href="#teamTable">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
        
                    <!-- Divider -->
                    <hr class="sidebar-divider d-none d-md-block">
                </ul>
                <!-- End of Sidebar -->
        
                <!-- Content Wrapper -->
                <div id="content-wrapper" class="d-flex flex-column">
        
                    <!-- Main Content -->
                    <div id="content">
        
                        <!-- Topbar -->
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <a href="http://handongapp.cafe24.com/teamcc" style="text-decoration: none; color: inherit;">
                                <div id="logoTitle">TeamCC Service</div>
                            </a>
        
                            <!-- Topbar Navbar -->
                            <ul class="navbar-nav ml-auto navbarRight">
                                <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                                <li class="nav-item dropdown no-arrow d-sm-none">
                                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-search fa-fw"></i>
                                    </a>
                                    <!-- Dropdown - Messages -->
                                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form class="form-inline mr-auto w-100 navbar-search">
                                            <div class="input-group">
                                                <input type="text" class="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
        
                                <!-- Nav Item - Messages -->
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <!-- Dropdown - Messages -->
                                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 class="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="...">
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="...">
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div class="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="...">
                                                <div class="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="...">
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <!-- End of Topbar -->
        
                        <!-- Begin Page Content -->
                        <div class="container-fluid">
        
                            <!-- Page Heading -->
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800 dashboardText" id="dashBoard">Dashboard</h1>
                            </div>
        
                            <!-- Content Row -->
                            <div class="row">
                                <!-- Total Viewers -->
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total Viewers</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">👀 ${totalViewers} (Total)</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">🌱 ${todayTotalViewers} (Today)</div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-users fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Admin viewers -->
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-success shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Admin Viewers</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">👀 ${adminViewers} (Total)</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">🌱  ${todayAdminViewers} (Today)</div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-users fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- User viewers -->
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-warning shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        User Viewers</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">👀 ${userViewers} (Total)</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">🌱 ${todayUserViewers} (Today)</div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-users fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Image Count -->
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-danger shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Total image count</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">❤️ ${imgCount}</div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-camera fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Earnings (Monthly) Card Example -->
                                <!--
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-info shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                    </div>
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col-auto">
                                                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="progress progress-sm mr-2">
                                                                <div class="progress-bar bg-info" role="progressbar"
                                                                    style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                -->
                            </div>
        
                            <!-- Content Row -->
                            <div class="row" id="teamTable"> <!-- team info table -->
                                <div class="col-xl-12">
                                    <!-- Bootstrap core JavaScript-->
                                    <script src="/teamcc/vendor/jquery/jquery.min.js"></script>
                                    <script src="/teamcc/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                                
                                    <!-- Core plugin JavaScript-->
                                    <script src="/teamcc/vendor/jquery-easing/jquery.easing.min.js"></script>
                                
                                    <!-- Custom scripts for all pages-->
                                    <script src="/teamcc/js/sb-admin-2.min.js"></script>
                                
                                    <!-- Page level plugins -->
                                    <script src="/teamcc/vendor/datatables/jquery.dataTables.min.js"></script>
                                    <script src="/teamcc/vendor/datatables/dataTables.bootstrap4.min.js"></script>
                                
                                    <!-- Page level custom scripts -->
                                    <script src="/teamcc/js/demo/datatables-demo.js"></script>

                                    <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <h6 class="m-0 font-weight-bold text-primary">About Team Information (Total ${teamNum} Teams)</h6>
                                    </div>

                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Team Name</th>
                                                        <th>Activity Count</th>
                                                        <th>CC Team Count</th>
                                                        <th>Image Count</th>
                                                        <th>Admin ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${this.function_teamInfoTable(activityCount, teamImgCount, team_info)}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Footer -->
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright © HGU TeamCC Service 2023</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <!-- Scroll to Top Button-->
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
            </a>
        
            <!-- Logout Modal-->
            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a class="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html> 
        `;
        }
    },
}