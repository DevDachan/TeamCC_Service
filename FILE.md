# :bulb: 페이지 설명

</br>
</br>   

## main.js
- NodeJS에서 가장 기본이 되는 javascript 파일로써 서버로 들어오는 HTTP request에 대해 각각의 페이지로 라우팅을 해주는 역할을 합니다.
- 해당 파일이 서비스의 주된 라우팅 기능을 수행하기 때문에 파일 가장 하단에 있는 app.listen의 parameter를 수정함으로써 사용할 포트 번호 수정이 가능합니다.

</br>   

## [1 library](#1-Library-lib)   
[1-1 admin.js](#1-1-adminjs)     
[1-2 template_admin.js](#1-2-template_adminjs)   
[1-3 user.js](#1-3-userjs)     
[1-4 template_user.js](#1-4-template_userjs)     
[1-5 db.js](#1-5-dbjs)   



## [2 Public](#1-login) 
### [2-1 assets](#2-1-assets)
### [2-2 css](#2-2-css)
[2-2-1 styles.css](#2-2-1-stylescss)     
[2-2-2 admin.css](#2-2-2-admincss)   
[2-2-3 template_admin.css](#2-2-3-template_admincss)   
[2-2-4 user.css](#2-2-4-usercss)      
[2-2-5 template_user.css](#2-2-5-template_usercss)     
### [2-3 js](#2-3-js)





---------------------------------------------------------------------------------------

## 1. Library (lib)
* 전체적인 페이지의 HTML 코드와 Javascript 코드를 담고 있는 폴더입니다.


### 1-1 admin.js
>  - admin.js 파일은 해당 서비스에서 관리자의 역할을 하는 admin에게 제공되는 페이지 로직을 담고 있는 파일입니다.
>  - 기본적으로 server측으로 들어오는 request에 맞는 HTML 코드를 template_admin.js를 사용해 HTML 코드를 만들어 response해주는 역할을 합니다.
>  - 대부분은 DB와 연결이 되어 CRUD의 역할을 수행합니다.

### 1-2 template_admin.js
>  - template_admin.js 파일은 admin.js 에서 요청한 HTML template을 담고 있는 파일입니다.
>  - admin.js에서 조회한 DB 내용을 토대로 사용자에게 보여줄 화면을 구성하는 HTML 코드를 return해주는 함수들을 담고 있습니다.


### 1-3 user.js
>  - user.js 파일은 해당 서비스에서 사용자의 역할을 하는 user에게 제공되는 페이지 로직을 담고 있는 파일입니다.
>  - admin.js와 동일하게 template_user.js를 사용해 HTML코드를 만들어 response해주는 역할을 합니다.
>  - 대부분의 기능은 DB의 CRUD 역할입니다.

### 1-4 template_user.js
>  - template_user.js 파일은 user.js에서 요청한 HTML template을 담고 있는 파일입니다.
>  - 각각의 함수를 사용해 user.js에서 조회한 DB 내용들을 토대로 사용자에게 보여줄 화면을 구성하는 HTML코드를 return해주는 함수들을 담고 있습니다.

### 1-5 db.js
>  - db.js는 db와 서비스를 연결하면서 필요한 계정에 정보와 host명을 담고 있는 파일입니다.






## 2. Public
* 해당 서비스를 구성하는 페이지들에 기본으로 사용하게 될 css, image, Javascript 파일등을 담고 있는 폴더 입니다.



### 2-1 assets
>  - assets의 경우에는 해당 페이지에서 기본으로 사용되는 이미지 파일들을 담고 있는 폴더 입니다.


### 2-2 css
>  - css는 각각의 js파일들이 사용하는 css 파일들을 담고 있는 폴더입니다.

#### 2-2-1 styles.css
>  - styles.css는 기본 bootstrap template에서 사용되는 css를 모아놓은 파일입니다.

#### 2-2-2 admin.css
>  - admin.css는 admin.js에서 사용되는 css들을 모아 놓은 파일입니다.

#### 2-2-3 template_admin.css
>  - template_admin.css는 admin.js에서 사용되는 css들을 모아 놓은 파일입니다.


#### 2-2-4 user.css
>  - user.css는 admin.js에서 사용되는 css들을 모아 놓은 파일입니다.


#### 2-2-5 template_user.css
>  - template_user.css는 admin.js에서 사용되는 css들을 모아 놓은 파일입니다.


### 2-3 js
>  - js 폴더는 해당 bootstrap template에서 제공하는 javascript 파일을 담고 있는 폴더 입니다.

