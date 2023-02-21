<<<<<<< HEAD
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=NodeJS-TeamCC&fontSize=70" width=100% />


<div align='center'>
	<img src="https://img.shields.io/badge/JavaScript-007396?style=flat&logo=JavaScript&logoColor=white"/>
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>
	<img src="https://img.shields.io/badge/express-000000?style=flat&logo=DevExpress&logoColor=white"/>
	<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
  	<img src="https://img.shields.io/badge/HTML-007396?style=flat&logo=HTML5&logoColor=white"/>
	<img src="https://img.shields.io/badge/CSS-F43059?style=flat&logo=CSS Wizardry&logoColor=white"/>
	<img src="https://img.shields.io/badge/Bootstrap-F43059?style=flat&logo=Bootstrap&logoColor=white"/>
</div>
<br/>
  
  

* 해당 서비스는 한동대학교 내에서 매 학기마다 이뤄지는 팀CC 활동을 조금 더 편리하게 하기 위해 만든 서비스로 관리자가 하나의 게시판을 만들면 사용자들에게 개인 업로드 페이지를 부여해서 사진을 입력 받을 수 있도록 하는 서비스입니다.
* TEAM CC 활동이란 팀 내에서 팀원들끼리 친해지기 위해서 남녀 짝을 지어 주어진 활동을 하고 각 활동에 따라 점수를 부여받아 최종적으로 점수가 높은 짝이 우승하는 활동이다.   


</br>

**1. [파일 설명](FILE.md)**   
**2. [Guideline](https://daffodil-mum-545.notion.site/HGU-TEAM-CC-Site-Guideline-a33a35526b7043b6bc0446febb4c6510)**   
**3. [DB](DB.md)**   

</br>



## :blue_heart:  문제점
- TEAM CC활동을 하면서 기존에는 단순히 카카오톡을 통해 팀장이 각 팀원들의 짝을 정해주고 수행하는 활동에 
대한 내용들을 개인적으로 수집해 점수를 집계했다.

- 기존의 방식대로 활동을 진행하면 중간중간 사진을 보내는 경우 팀장이 한번에 사진을 분류해 점수를 내기가 
복잡하고 팀원들 또한 혼란이 올 수 있음

- 또한 각 팀원들이 점수를 집계하는 것도 하나하나 체크해가며 활동을 하기에 수행함에 있어서 목표 성취감이
크게 와 닿지 않을 수 있음


</br>

## :heart: WEB 소개

- 기본적으로 전체적인 기능은 NodeJS와 Express를 사용해서 구현이 되었다. DB의 경우에는 MYSQL을 사용하였고 
호스팅 서버는 Cafe24의 도메인을 사용했다.
- 전체 Web은 PC에서도 접속이 가능하지만 모바일에서 접속이 가능하도록 UI들을 구성함


## :yellow_heart: 기능 구현

### 1. 이미지 업로드

#### 사용자측 이미지 업로드 HTML
> * **사용자 측에서 이미지를 업로드 할 때에는 input-file로 입력을 받게 된다. 이 data를 form으로 넘기기 위해서는 enctype option을 multipart/form-data를 주어야 한다.**
```
<form action='/image_upload?rand=${random_url}' id="form_bt_${activitylist[i].id}" method="post" enctype="multipart/form-data">
   <label for="ex_file_${activitylist[i].id}"> 업로드</label>
   <input type="file" id="ex_file_${activitylist[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitylist[i].id})" style="display:inline; border:0px;" />
   <input type="hidden" name="actid" value=${activitylist[i].id} />
   <input type="hidden" name="rand_url" value="${random_url}" />
   <input type="hidden" name="team_num" value="${team_num}" />
</form>
```

#### 이미지 업로드 query   
> * **이미지를 업로드 할 때는 blob 형식의 image data를 base64 형식으로 변환한 뒤 INSERT해줘야 한다. 이때 DB table에서는 BLOB 형식으로 입력 받음**   
```
const base64image = Buffer.from(request.file.buffer).toString('base64');

db.query(`SELECT * FROM url WHERE url=?`,[rand_url],function(error,admin_id){
        if(error){
          throw error;
        }
        db.query(`INSERT INTO cc VALUE('${admin_id[0].admin_id}','${request.body.team_num}','${request.body.actid}','${base64image}','${request.file.size}','${request.file.mimetype}')`, function(error1,cc){}
```

### 2. 카카오톡 공유하기

> * **카카오톡 공유하기의 경우에는 카카오톡측에서 제공하는 Open API를 사용해 공유를 하게 된다.**
> * **카카오톡 공유하기 기능을 사용하기 위해서는 [kakao developers](https://developers.kakao.com/)에 해당 애플리케이션을 등록해야 사용이 가능하다.**

</br>

> * **카카오톡 공유하기는 별다른 모듈 없이 스크립트로 바로 사용이 가능하다. 위에서 표시한 kakao developers에서 자바스크립트 키를 발급받고 해당 키를 사용해 내가 원하는 형태의 공유 내용을 구성하면 스크립트 태그 안에서 카카오톡 공유하기가 사용 가능함**

```
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
         <script type="text/javascript">
             function kakaoShare(url_num) {
		 Kakao.cleanup();
		 Kakao.init("사용할 앱의 JavaScript 키");    
		 Kakao.Link.createDefaultButton({
                     objectType:"feed",
		     container: document.querySelector("#kakao_href")
                     , content : {
                         title:"Team CC 링크"
                         , description:"http://localhost:80/user?id=" + url_num  // 콘텐츠 설명
                         , imageUrl:"https://ifh.cc/g/CAOojM.png" // 썸네일 같은거
                         , link : {
                             mobileWebUrl:"http://localhost:80/user?id=" + url_num    // 모바일 카카오톡에서 사용하는 웹 링크 URL
                             , webUrl:"http://localhost:80/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                         }
                     }, buttons : [
                         { title:"팀CC 링크로 들어가기"    // 공유했을 때 뜨는 버튼 제목
                             , link : {
                                 mobileWebUrl:"http://localhost:80/user?id=" + url_num   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                             , webUrl:"http://localhost:80/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                             }
                         }
                     ]
                 });
                 document.getElementById("kakao_href").click(); // 새로고침
             }
         </script>
         <a href="http://localhost:80/admin_main" id="kakao_href"></a>
         <img src="https://ifh.cc/g/BbQVhq.png" onClick="kakaoShare('${url[i].url}');" width="50" alt="Share" class="btnImg">
```





## :green_heart: 기대되는 효과
- TEAM CC 활동을 하면서 팀장의 경우에는 처음 계정을 만들어 활동만 입력시켜 놓으면 이후에는 팀원들이 진행
하는 것이기 때문에 추가적인 수고가 줄어든다.
- 팀원들의 경우에는 자신들이 하는 활동들을 실시간으로 업로드해 점수를 확인 할 수 있고 현재 다른 팀원들이
얼마나 활동을 진행하는지 확인이 가능하다.


=======
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=NodeJS-TeamCC&fontSize=70" width=100% />


<div align='center'>
	<img src="https://img.shields.io/badge/JavaScript-007396?style=flat&logo=JavaScript&logoColor=white"/>
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>
	<img src="https://img.shields.io/badge/express-000000?style=flat&logo=DevExpress&logoColor=white"/>
	<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
  	<img src="https://img.shields.io/badge/HTML-007396?style=flat&logo=HTML5&logoColor=white"/>
	<img src="https://img.shields.io/badge/CSS-F43059?style=flat&logo=CSS Wizardry&logoColor=white"/>
	<img src="https://img.shields.io/badge/Bootstrap-F43059?style=flat&logo=Bootstrap&logoColor=white"/>
</div>
<br/>
  

## 프로젝트 설명

* 해당 서비스는 한동대학교 내에서 매 학기마다 이뤄지는 팀CC 활동을 조금 더 편리하게 하기 위해 만든 서비스로 관리자가 하나의 게시판을 만들면 사용자들에게 개인 업로드 페이지를 부여해서 사진을 입력 받을 수 있도록 하는 서비스입니다.
* TEAM CC 활동이란 팀 내에서 팀원들끼리 친해지기 위해서 남녀 짝을 지어 주어진 활동을 하고 각 활동에 따라 점수를 부여받아 최종적으로 점수가 높은 짝이 우승하는 활동이다.   


</br>

**1. [파일 설명](FILE.md)**   
**2. [Guideline](https://daffodil-mum-545.notion.site/HGU-TEAM-CC-Site-Guideline-a33a35526b7043b6bc0446febb4c6510)**   
**3. [DB](DB.md)**   

</br>



## :blue_heart:  문제점
- TEAM CC활동을 하면서 기존에는 단순히 카카오톡을 통해 팀장이 각 팀원들의 짝을 정해주고 수행하는 활동에 
대한 내용들을 개인적으로 수집해 점수를 집계했다.

- 기존의 방식대로 활동을 진행하면 중간중간 사진을 보내는 경우 팀장이 한번에 사진을 분류해 점수를 내기가 
복잡하고 팀원들 또한 혼란이 올 수 있음

- 또한 각 팀원들이 점수를 집계하는 것도 하나하나 체크해가며 활동을 하기에 수행함에 있어서 목표 성취감이
크게 와 닿지 않을 수 있음


</br>

## :heart: WEB 소개

- 기본적으로 전체적인 기능은 NodeJS와 Express를 사용해서 구현이 되었다. DB의 경우에는 MYSQL을 사용하였고 
호스팅 서버는 Cafe24의 도메인을 사용했다.
- 전체 Web은 PC에서도 접속이 가능하지만 모바일에서 접속이 가능하도록 UI들을 구성함


## :yellow_heart: 기능 구현

### 1. 이미지 업로드

#### 사용자측 이미지 업로드 HTML
> * **사용자 측에서 이미지를 업로드 할 때에는 input-file로 입력을 받게 된다. 이 data를 form으로 넘기기 위해서는 enctype option을 multipart/form-data를 주어야 한다.**
```
<form action='/image_upload?rand=${random_url}' id="form_bt_${activitylist[i].id}" method="post" enctype="multipart/form-data">
   <label for="ex_file_${activitylist[i].id}"> 업로드</label>
   <input type="file" id="ex_file_${activitylist[i].id}" name="userfile" accept="image/*" required onchange="img(this,${activitylist[i].id})" style="display:inline; border:0px;" />
   <input type="hidden" name="actid" value=${activitylist[i].id} />
   <input type="hidden" name="rand_url" value="${random_url}" />
   <input type="hidden" name="team_num" value="${team_num}" />
</form>
```

#### 이미지 업로드 query   
> * **이미지를 업로드 할 때는 blob 형식의 image data를 base64 형식으로 변환한 뒤 INSERT해줘야 한다. 이때 DB table에서는 BLOB 형식으로 입력 받음**   
```
const base64image = Buffer.from(request.file.buffer).toString('base64');

db.query(`SELECT * FROM url WHERE url=?`,[rand_url],function(error,admin_id){
        if(error){
          throw error;
        }
        db.query(`INSERT INTO cc VALUE('${admin_id[0].admin_id}','${request.body.team_num}','${request.body.actid}','${base64image}','${request.file.size}','${request.file.mimetype}')`, function(error1,cc){}
```

### 2. 카카오톡 공유하기

> * **카카오톡 공유하기의 경우에는 카카오톡측에서 제공하는 Open API를 사용해 공유를 하게 된다.**
> * **카카오톡 공유하기 기능을 사용하기 위해서는 [kakao developers](https://developers.kakao.com/)에 해당 애플리케이션을 등록해야 사용이 가능하다.**

</br>

> * **카카오톡 공유하기는 별다른 모듈 없이 스크립트로 바로 사용이 가능하다. 위에서 표시한 kakao developers에서 자바스크립트 키를 발급받고 해당 키를 사용해 내가 원하는 형태의 공유 내용을 구성하면 스크립트 태그 안에서 카카오톡 공유하기가 사용 가능함**

```
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
         <script type="text/javascript">
             function kakaoShare(url_num) {
		 Kakao.cleanup();
		 Kakao.init("사용할 앱의 JavaScript 키");    
		 Kakao.Link.createDefaultButton({
                     objectType:"feed",
		     container: document.querySelector("#kakao_href")
                     , content : {
                         title:"Team CC 링크"
                         , description:"http://localhost:80/user?id=" + url_num  // 콘텐츠 설명
                         , imageUrl:"https://ifh.cc/g/CAOojM.png" // 썸네일 같은거
                         , link : {
                             mobileWebUrl:"http://localhost:80/user?id=" + url_num    // 모바일 카카오톡에서 사용하는 웹 링크 URL
                             , webUrl:"http://localhost:80/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                         }
                     }, buttons : [
                         { title:"팀CC 링크로 들어가기"    // 공유했을 때 뜨는 버튼 제목
                             , link : {
                                 mobileWebUrl:"http://localhost:80/user?id=" + url_num   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                             , webUrl:"http://localhost:80/user?id=" + url_num  // PC버전 카카오톡에서 사용하는 웹 링크 URL
                             }
                         }
                     ]
                 });
                 document.getElementById("kakao_href").click(); // 새로고침
             }
         </script>
         <a href="http://localhost:80/admin_main" id="kakao_href"></a>
         <img src="https://ifh.cc/g/BbQVhq.png" onClick="kakaoShare('${url[i].url}');" width="50" alt="Share" class="btnImg">
```





## :green_heart: 기대되는 효과
- TEAM CC 활동을 하면서 팀장의 경우에는 처음 계정을 만들어 활동만 입력시켜 놓으면 이후에는 팀원들이 진행
하는 것이기 때문에 추가적인 수고가 줄어든다.
- 팀원들의 경우에는 자신들이 하는 활동들을 실시간으로 업로드해 점수를 확인 할 수 있고 현재 다른 팀원들이
얼마나 활동을 진행하는지 확인이 가능하다.


## Contributors

<a href="https://github.com/DevDachan/NodeJS-TeamCCService/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DevDachan/NodeJS-TeamCCService" />
</a>

>>>>>>> 9818a434a718e83192380d90b4c1cafe0e5736a8
