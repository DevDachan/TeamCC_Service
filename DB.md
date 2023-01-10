# DB구성

## E-R Diagram
![teamcc](https://user-images.githubusercontent.com/111109411/211477982-4c013664-1e36-42a0-81e6-207f5c061eb4.png)

## 구성 TABLE
[1. team_info](#1-team_info)

[2. admin](#2-admin)

[3. url](#3-url)

[4. activity](#4-activity)

[5. cc](#5-cc)

[6. color](#6-color)

[7. count](#6-count)



</br>

### 1. team_info
> * 전체적인 팀의 정보를 담고 있는 테이블로써 팀의 이름, 배경 이미지, 관리자 정보등을 담고 있습니다.
> * **admin_id : 해당 팀CC의 관리자 ID를 의미합니다.**
> * **title    : 팀 CC의 제목입니다..**
> * **num      : 해당 팀의 index 번호를 의미합니다(전체 정보 구분).**
> * **background_image    : 팀CC 배경 이미지를 의미합니다.**
> * **background_mimetype : 팀CC 배경 이미지의 type을 의미합니다.**
> * **state : state는 현재 팀CC의 memeber state를 의미합니다.**



### 2. admin
> * 관리자 계정의 정보를 담고 있는 테이블입니다.
> * **id        : 관리자 계정의 ID를 의미합니다.**
> * **password  : 관리자 계정의 Password를 의미합니다.**

### 3. url
> url은 관리자가 사용자(팀원)에게 배포하게될 url의 random한 key값을 가지고 있는 테이블입니다.
> * **url       : 각 팀원들에게 제공될 URL의 Random Key를 의미합니다.**
> * **admin_id  : 해당 url을 indexing해줄 관리자 ID를 의미합니다.**
> * **team_num  : 해당 팀의 index 번호를 의미합니다.**

### 4. activity
> * 활동에 대한 정보를 담고 있는 테이블로써 활동 내용, 점수등을 가지고 있습니다.
> * **admin_id  : 관리자 계정의 ID를 의미합니다.**
> * **id        : 활동 ID로써 각각의 활동을 구분지어주는 ID를 의미합니다.**
> * **activity  : 활동 내용입니다.**
> * **score     : 해당 활동의 점수를 의미합니다.**

### 5. cc
> * 사용자(팀원)측에서 업로드한 정보를 저장하기 위한 테이블입니다.
> * **admin_id    : 관리자 계정의 ID를 의미합니다.**
> * **team_num    : 해당 팀의 index 번호를 의미합니다.**
> * **activity_id : 활동 ID를 의미합니다.**
> * **image       : 사용자(팀원)이 업로드한 이미지파일 내용입니다.**
> * **size        : 전체 파일의 size를 의미합니다.**
> * **mimetype    : 파일의 mimetype을 의미합니다.**

### 6. color
> * 사용자(팀원)들에게 활동 내용들을 전하기 위해 만드는 Image Board판을 구성하는 내용의 색상을 담고있는 테이블입니다.
> * **admin_id    : 관리자 계정의 ID를 의미합니다.**
> * **score       : 활동의 점수를 의미합니다.(만약 일반 score 원의 색이라면 점수만, 내부 글자 색일경우 score + _text (ex. 2_text) )**
> * **color       : image board에서 활동 점수의 색을 의미합니다.**

### 7. count
> * 전체 서비스의 조회수를 저장하기 위한 테이블입니다.
> * **id          : 관리자인지 사용자인지를 구분해줍니다.**
> * **year        : 날짜**
> * **month       : 날짜**
> * **day         : 날짜**
> * **count       : 조회수**



