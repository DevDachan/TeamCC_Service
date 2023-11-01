<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=TeamCCService&fontSize=70" width=100% />


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
  
## :calendar: 프로젝트 기간
### 개발 기간: 2022.08~2023.03    
### 배포 기간: 2023.03.05~2023.03.27   

**총 사용: 9262 / 이미지 수 : 1204개**   
<img src="https://user-images.githubusercontent.com/111109411/230569775-dec0e0ba-a79d-4c84-9ac3-c060c507dba4.png" width=50% />

## :runner: 개발 인원
### 풀 스택 개발 2인




<br/>
  

**기존 카카오톡 채팅방을 사용해 진행 되던 학교 내 소셜 활동인 팀 CC 활동을 조금 더 편리하게 관리하기 위해 대시보드와 점수판을 제공하는 웹 서비스**



</br>   

## :green_heart: 설명 페이지   

**1. [파일 설명](FILE.md)**   
**2. [Guideline](https://daffodil-mum-545.notion.site/HGU-TEAM-CC-Site-Guideline-a33a35526b7043b6bc0446febb4c6510)**   
**3. [DB](DB.md)**   

</br>



## :heart: WEB 소개


* 팀 CC 활동이란 남녀 두명 짝을 지어 한 주 동안 팀장이 정해준 활동들을 하게 되고 가장 많은 활동을 한 팀이 우승을 하게 되는 활동입니다 

* 관리자는 한주간 수행할 미션들을 등록하고 각 팀에게 특정 주소를 지정해주어 활동 내역에 대해 사진을 업로드 할 수 있는 기능을 제공합니다. 이를 통해 각 팀원들은 쉽게 미션 목록을 확인하고 수행한 결과를 업로드하여 간편하게 점수를 계산할 수 있습니다. 


- 기본적으로 전체적인 기능은 NodeJS를 사용해서 구현이 되었습니다. DB의 경우에는 MYSQL을 사용하였고 
호스팅 서버는 Cafe24의 도메인을 사용했습니다.

- 전체 Web은 PC에서도 접속이 가능하지만 모바일에서 접속이 가능하도록 UI들을 구성했습니다.


## :blue_heart:  기존 문제점(요구 사항)
- TEAM CC활동을 하면서 기존에는 단순히 카카오톡을 통해 팀장이 각 팀원들의 짝을 정해주고 수행하는 활동에 
대한 내용들을 개인적으로 수집해 점수를 집계했다.

- 기존의 방식대로 활동을 진행하면 중간중간 사진을 보내는 경우 팀장이 한번에 사진을 분류해 점수를 내기가 
복잡하고 팀원들 또한 혼란이 올 수 있다.

- 또한 각 팀원들이 점수를 집계하는 것도 하나하나 체크해가며 활동을 하기에 수행함에 있어서 목표 성취감이
크게 와 닿지 않을 수 있다.


</br>


## :yellow_heart: 기능 구현

### 1. 이미지 업로드

#### 사용자측 이미지 업로드 HTML
> * **사용자 측에서 이미지를 업로드 할 때에는 input-file로 입력을 받게 됩니다. 이 data를 form으로 넘기기 위해서는 enctype option을 multipart/form-data를 줘야 합니다.**
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
> * **이미지를 업로드 할 때는 blob 형식의 image data를 base64 형식으로 변환한 뒤 INSERT해줘야 합니다. 이때 DB table에서는 BLOB 형식으로 입력을 받습니다.**   
<br/>     

> 이미지를 base64 형태로 직접 저장한 이유는 이후 이미지를 웹 서비스측에 출력함에 있어 더 간편하게 나타내기 위함입니다. base64형태로 DB에 이미지를 저장할 경우에는 별도의 파일이 없이 이미지를 출력하는 것이 가능해집니다.

```
const base64image = Buffer.from(request.file.buffer).toString('base64');
...
db.query(`INSERT INTO cc VALUE('${admin_id[0].admin_id}','${request.body.team_num}','${request.body.actid}','${base64image}','${request.file.size}','${request.file.mimetype}')`)
	
```

### 2. 카카오톡 공유하기
<img src="https://user-images.githubusercontent.com/111109411/230572601-5d321ed9-f483-4e07-9b5c-2fb2aa427bbc.png" width=50%>


> * **카카오톡 공유하기의 경우에는 카카오톡측에서 제공하는 Open API를 사용했습니다.**
> * **카카오톡 공유하기 기능을 사용하기 위해서는 [kakao developers](https://developers.kakao.com/)에 해당 애플리케이션을 등록해야 사용이 가능합니다.**

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

### 3. 이미지 미리보기  

<img src="https://user-images.githubusercontent.com/111109411/230571595-2cf1b1d0-6ed5-484d-bf45-d4ee27ff7545.png" width = 50%>


> * **팀원 페이지에서 각 이미지를 업로드 한 이후 단순히 작은 사이즈가 아니라 원본 크기로 크게 볼 수 있게 미리보기 기능을 모달을 사용해 구현했습니다.**   
> * **각 이미지에 onClick 이벤트를 넣어 이벤트가 발생하면 해당 이미지의 id와 name을 통해서 어떤 이미지인지를 확인하고 modal 내에 있는 img 태그에 src값을 넣어주도록 만들었습니다.**      


#### img tag 

```
 <img id="img_${activitycc[activitycc_temp].activity_id}_${activitycc[activitycc_temp].activity_index}" src="data:${activitycc[activitycc_temp].mimetype};base64,${activitycc[activitycc_temp].image}" width=150vw height=auto onclick="modal(${activitycc[activitycc_temp].activity_id},${activitycc[activitycc_temp].activity_index})"/>
```

#### java script   
```
<script>
    function modal(img,index){
       var img_tag = 'img_'+ img + '_'+index;
       document.getElementById('modal_img').src = document.getElementById(img_tag).src;
       document.getElementById('modal_bt').click();
    }
</script>
```

#### modal   
```
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
```



## :green_heart: 기대되는 효과
- TEAM CC 활동을 하면서 팀장의 경우에는 처음 계정을 만들어 활동만 입력시켜 놓으면 이후에는 팀원들이 진행
하는 것이기 때문에 추가적인 수고가 줄어든다.

- 팀원들의 경우에는 자신들이 하는 활동들을 실시간으로 업로드해 점수를 확인 할 수 있고 현재 다른 팀원들이
얼마나 활동을 진행하는지 확인이 가능하다.



## 🔨 트러블 슈팅

### 1. 이미지 렌더링 이슈

- 처음 이미지를 서버측에 저장하는 방법에 있어서 단순히 Blob 형태의 데이터로 DB에 저장하는 방식을 선택했었습니다. 하지만 서비스에서 사용하는 이미지의 수가 많아짐에 따라서 다수의 이미지를 화면에 출력할 시 해당 이미지들이 모두 Blob형태의 데이터로 클라이언트측으로 전달이 되기 때문에 렌더링 시간이 오래 걸리게 됐습니다.

#### DB 저장   
- ***DB 용량 증가:*** 이미지 파일은 일반적으로 큰 파일이기 때문에 Blob 형식으로 저장할 경우 DB 용량이 증가할 수 있습니다. 이는 DB 백업 및 복구 시에도 문제를 일으킬 수 있습니다.   
- ***보안 문제:*** 이미지 파일을 Blob 형식으로 DB에 저장하면, 해당 파일에 대한 직접적인 URL이 없기 때문에, 다른 사용자가 해당 이미지에 접근하기가 어렵습니다. 그러나, DB에 저장된 이미지 파일에 대한 접근 권한이 있는 경우, 악의적인 사용자가 해당 이미지를 다운로드하거나 불법적으로 사용할 수 있는 가능성이 있습니다.   
- ***성능 저하:*** Blob 형식으로 저장된 이미지 파일은 DB에서 조회 및 검색 시에도 불필요한 데이터를 함께 가져오게 되어 성능에 영향을 미칠 수 있습니다.


#### File System 저장   
- ***파일 업로드 취약점:*** 파일 업로드 과정에서 파일 확장자를 검증하지 않으면 공격자가 악성 파일(예: .php 파일 등)을 업로드하여 서버 취약점을 이용해 공격을 시도할 수 있습니다.   
- ***파일 다운로드 취약점:*** 서버에서 저장한 이미지 파일의 경로를 직접 노출시키면, 공격자가 해당 이미지 파일을 직접 다운로드할 수 있습니다. 이때, 공격자가 다운로드한 파일에는 악성 코드가 포함될 수 있으며, 이를 이용해 서버를 공격할 수 있습니다.   
- ***파일 권한 설정:*** 서버에 저장된 파일의 권한 설정이 적절하지 않을 경우, 공격자가 해당 파일에 대한 권한을 획득하여 파일 내용을 변경하거나 삭제할 수 있습니다.   

#### 👀 결론 
- 서버측 File System에 이미지 파일을 직접 저장을 하고 저장된 path를 DB측에 저장시켜놓는 방법을 사용해야 한다는 결론에 도달했습니다.    



### 2. 세션 정보 오류

- 어떻게 보면 가장 기본적인 오류인데 서버측에서 세션 정보에 대해 확인하는 과정에서 조건문을 잘못처리해 세션 정보가 없을 경우 가끔 505 Error가 뜨는 경우가 생겼었습니다.
   
```
 if(request.session.uid === undefined)
```

- 위와 같이 undefined라고만 처리를 했었는데 undefined가 아닌 null값이 반환될 때도 있었습니다.
- 이후 아래와 같이 상황에 따라 모두 처리가 가능하도록 변경했습니다.
   
```
  if(request.session.uid === undefined || request.session.uid === null)
```

## Contributors

<a href="https://github.com/DevDachan/NodeJS-TeamCCService/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DevDachan/NodeJS-TeamCCService" />
</a>

<br/>
  
## 로드맵     
[v2.0]   
- 활동 표에서 드래그하여 활동 순서 변경 가능하도록      
- 활동 인증 시 위치 기반 api 사용         
- 테이블 형식 UI 변경하기      
- SpringBoot, AWS, Kotlin
