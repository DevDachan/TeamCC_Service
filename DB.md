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
> * **admin_id : 해당 팀CC의 관리자 ID를 의미합니다.**
> * **title    : 팀 CC의 제목를 의미합니다.**
> * **num      : 해당 팀의 index 번호를 의미합니다.**
> * **background_image    : 팀CC 배경 이미지를 의미합니다.**
> * **background_mimetype : 팀CC 배경 이미지의 type을 의미합니다.**
> * **state : state는 현재 팀CC의 memeber state를 의미합니다.**



### 2. admin
> * **id        : 관리자 계정의 ID를 의미합니다.**
> * **password  : 관리자 계정의 Password를 의미합니다.**

### 3. url
> * **url       : 각 팀원들에게 제공될 URL을 의미합니다.**
> * **admin_id  : **
> * **team_num  : **

### 4. activity
> * **admin_id  : **
> * **id        : **
> * **activity  : **
> * **score     : **

### 5. cc
> * **admin_id    : **
> * **team_num    : **
> * **activity_id : **
> * **image       : **
> * **size        : **
> * **mimetype    : **

### 6. color
> * **admin_id    : **
> * **score       : **
> * **color       : **

### 7. count
> * **id          : **
> * **year        : **
> * **month       : **
> * **day         : **
> * **count       : **



