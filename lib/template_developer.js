/*
  template_developer.js File
  (Modified on 2023.03.23)
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

    // 개발자 관리 페이지 로그인 
    HTML_developerMain:function(alertFlag, totalViewers, adminViewers, userViewers, imgCount, teamNum, todayTotalViewers, todayAdminViewers, todayUserViewers){
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
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>
        
                    <!-- Divider -->
                    <hr class="sidebar-divider">
        
                    <!-- Heading -->
                    <div class="sidebar-heading">
                        Interface
                    </div>
        
                    <!-- Nav Item - Pages Collapse Menu -->
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Components:</h6>
                                <a class="collapse-item" href="buttons.html">Buttons</a>
                                <a class="collapse-item" href="cards.html">Cards</a>
                            </div>
                        </div>
                    </li>
        
                    <!-- Nav Item - Utilities Collapse Menu -->
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Utilities:</h6>
                                <a class="collapse-item" href="utilities-color.html">Colors</a>
                                <a class="collapse-item" href="utilities-border.html">Borders</a>
                                <a class="collapse-item" href="utilities-animation.html">Animations</a>
                                <a class="collapse-item" href="utilities-other.html">Other</a>
                            </div>
                        </div>
                    </li>
        
                    <!-- Divider -->
                    <hr class="sidebar-divider">
        
                    <!-- Heading -->
                    <div class="sidebar-heading">
                        Addons
                    </div>
        
                    <!-- Nav Item - Pages Collapse Menu -->
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Login Screens:</h6>
                                <a class="collapse-item" href="login.html">Login</a>
                                <a class="collapse-item" href="register.html">Register</a>
                                <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div class="collapse-divider"></div>
                                <h6 class="collapse-header">Other Pages:</h6>
                                <a class="collapse-item" href="404.html">404 Page</a>
                                <a class="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>
        
                    <!-- Nav Item - Charts -->
                    <li class="nav-item">
                        <a class="nav-link" href="charts.html">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>
        
                    <!-- Nav Item - Tables -->
                    <li class="nav-item">
                        <a class="nav-link" href="tables.html">
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
                                <h1 class="h3 mb-0 text-gray-800 dashboardText">Dashboard</h1>
                                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        class="fas fa-signal fa-sm text-white-50"></i> View Graphs</a>
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
                            <div class="row"> <!-- team info table -->
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
                                            <tfoot>
                                                <tr>
                                                    <th>Team Name</th>
                                                    <th>Activity Count</th>
                                                    <th>CC Team Count</th>
                                                    <th>Image Count</th>
                                                    <th>Admin ID</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>63</td>
                                                    <td>$170,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Ashton Cox</td>
                                                    <td>Junior Technical Author</td>
                                                    <td>San Francisco</td>
                                                    <td>66</td>
                                                    <td>$86,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>22</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr>
                                                    <td>Airi Satou</td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>33</td>
                                                    <td>$162,700</td>
                                                </tr>
                                                <tr>
                                                    <td>Brielle Williamson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>New York</td>
                                                    <td>61</td>
                                                    <td>$372,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Herrod Chandler</td>
                                                    <td>Sales Assistant</td>
                                                    <td>San Francisco</td>
                                                    <td>59</td>
                                                    <td>$137,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Jackson Bradshaw</td>
                                                    <td>Director</td>
                                                    <td>New York</td>
                                                    <td>65</td>
                                                    <td>$645,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Olivia Liang</td>
                                                    <td>Support Engineer</td>
                                                    <td>Singapore</td>
                                                    <td>64</td>
                                                    <td>$234,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Bruno Nash</td>
                                                    <td>Software Engineer</td>
                                                    <td>London</td>
                                                    <td>38</td>
                                                    <td>$163,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Sakura Yamamoto</td>
                                                    <td>Support Engineer</td>
                                                    <td>Tokyo</td>
                                                    <td>37</td>
                                                    <td>$139,575</td>
                                                </tr>
                                                <tr>
                                                    <td>Thor Walton</td>
                                                    <td>Developer</td>
                                                    <td>New York</td>
                                                    <td>61</td>
                                                    <td>$98,540</td>
                                                </tr>
                                                <tr>
                                                    <td>Finn Camacho</td>
                                                    <td>Support Engineer</td>
                                                    <td>San Francisco</td>
                                                    <td>47</td>
                                                    <td>$87,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Serge Baldwin</td>
                                                    <td>Data Coordinator</td>
                                                    <td>Singapore</td>
                                                    <td>64</td>
                                                    <td>$138,575</td>
                                                </tr>
                                                <tr>
                                                    <td>Zenaida Frank</td>
                                                    <td>Software Engineer</td>
                                                    <td>New York</td>
                                                    <td>63</td>
                                                    <td>$125,250</td>
                                                </tr>
                                                <tr>
                                                    <td>Zorita Serrano</td>
                                                    <td>Software Engineer</td>
                                                    <td>San Francisco</td>
                                                    <td>56</td>
                                                    <td>$115,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jennifer Acosta</td>
                                                    <td>Junior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>43</td>
                                                    <td>$75,650</td>
                                                </tr>
                                                <tr>
                                                    <td>Cara Stevens</td>
                                                    <td>Sales Assistant</td>
                                                    <td>New York</td>
                                                    <td>46</td>
                                                    <td>$145,600</td>
                                                </tr>
                                                <tr>
                                                    <td>Hermione Butler</td>
                                                    <td>Regional Director</td>
                                                    <td>London</td>
                                                    <td>47</td>
                                                    <td>$356,250</td>
                                                </tr>
                                                <tr>
                                                    <td>Lael Greer</td>
                                                    <td>Systems Administrator</td>
                                                    <td>London</td>
                                                    <td>21</td>
                                                    <td>$103,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Jonas Alexander</td>
                                                    <td>Developer</td>
                                                    <td>San Francisco</td>
                                                    <td>30</td>
                                                    <td>$86,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Shad Decker</td>
                                                    <td>Regional Director</td>
                                                    <td>Edinburgh</td>
                                                    <td>51</td>
                                                    <td>$183,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Michael Bruce</td>
                                                    <td>Javascript Developer</td>
                                                    <td>Singapore</td>
                                                    <td>29</td>
                                                    <td>$183,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Donna Snider</td>
                                                    <td>Customer Support</td>
                                                    <td>New York</td>
                                                    <td>27</td>
                                                    <td>$112,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                                
                                <!-- Area Chart -->
                                <div class="col-xl-8 col-lg-7">
                                    <div class="card shadow mb-4">
                                        <!-- Card Header - Dropdown -->
                                        <div
                                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                            <div class="dropdown no-arrow">
                                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div class="dropdown-header">Dropdown Header:</div>
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card Body -->
                                        <div class="card-body">
                                            <div class="chart-area">
                                                <canvas id="myAreaChart"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <!-- Pie Chart -->
                                <div class="col-xl-4 col-lg-5">
                                    <div class="card shadow mb-4">
                                        <!-- Card Header - Dropdown -->
                                        <div
                                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                            <div class="dropdown no-arrow">
                                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div class="dropdown-header">Dropdown Header:</div>
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card Body -->
                                        <div class="card-body">
                                            <div class="chart-pie pt-4 pb-2">
                                                <canvas id="myPieChart"></canvas>
                                            </div>
                                            <div class="mt-4 text-center small">
                                                <span class="mr-2">
                                                    <i class="fas fa-circle text-primary"></i> Direct
                                                </span>
                                                <span class="mr-2">
                                                    <i class="fas fa-circle text-success"></i> Social
                                                </span>
                                                <span class="mr-2">
                                                    <i class="fas fa-circle text-info"></i> Referral
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <!-- Content Row -->
                            <div class="row">
        
                                <!-- Content Column -->
                                <div class="col-lg-6 mb-4">
        
                                    <!-- Project Card Example -->
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="small font-weight-bold">Server Migration <span
                                                    class="float-right">20%</span></h4>
                                            <div class="progress mb-4">
                                                <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"
                                                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h4 class="small font-weight-bold">Sales Tracking <span
                                                    class="float-right">40%</span></h4>
                                            <div class="progress mb-4">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                                                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h4 class="small font-weight-bold">Customer Database <span
                                                    class="float-right">60%</span></h4>
                                            <div class="progress mb-4">
                                                <div class="progress-bar" role="progressbar" style="width: 60%"
                                                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h4 class="small font-weight-bold">Payout Details <span
                                                    class="float-right">80%</span></h4>
                                            <div class="progress mb-4">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h4 class="small font-weight-bold">Account Setup <span
                                                    class="float-right">Complete!</span></h4>
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <!-- Color System -->
                                    <div class="row">
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-primary text-white shadow">
                                                <div class="card-body">
                                                    Primary
                                                    <div class="text-white-50 small">#4e73df</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-success text-white shadow">
                                                <div class="card-body">
                                                    Success
                                                    <div class="text-white-50 small">#1cc88a</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-info text-white shadow">
                                                <div class="card-body">
                                                    Info
                                                    <div class="text-white-50 small">#36b9cc</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-warning text-white shadow">
                                                <div class="card-body">
                                                    Warning
                                                    <div class="text-white-50 small">#f6c23e</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-danger text-white shadow">
                                                <div class="card-body">
                                                    Danger
                                                    <div class="text-white-50 small">#e74a3b</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-secondary text-white shadow">
                                                <div class="card-body">
                                                    Secondary
                                                    <div class="text-white-50 small">#858796</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-light text-black shadow">
                                                <div class="card-body">
                                                    Light
                                                    <div class="text-black-50 small">#f8f9fc</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 mb-4">
                                            <div class="card bg-dark text-white shadow">
                                                <div class="card-body">
                                                    Dark
                                                    <div class="text-white-50 small">#5a5c69</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                </div>
        
                                <div class="col-lg-6 mb-4">
        
                                    <!-- Illustrations -->
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="text-center">
                                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                                    src="img/undraw_posting_photo.svg" alt="...">
                                            </div>
                                            <p>Add some quality, svg illustrations to your project courtesy of <a
                                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                                constantly updated collection of beautiful svg images that you can use
                                                completely free and without attribution!</p>
                                            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                                unDraw &rarr;</a>
                                        </div>
                                    </div>
        
                                    <!-- Approach -->
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                                        </div>
                                        <div class="card-body">
                                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                                CSS bloat and poor page performance. Custom CSS classes are used to create
                                                custom components and custom utility classes.</p>
                                            <p class="mb-0">Before working with this theme, you should become familiar with the
                                                Bootstrap framework, especially the utility classes.</p>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
        
                        </div>
                        <!-- /.container-fluid -->
        
                    </div>
                    <!-- End of Main Content -->
        
                    <!-- Footer -->
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright © HGU TeamCC Service 2023</span>
                            </div>
                        </div>
                    </footer>
                    <!-- End of Footer -->
        
                </div>
                <!-- End of Content Wrapper -->
        
            </div>
            <!-- End of Page Wrapper -->
        
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