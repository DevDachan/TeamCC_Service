# Node-JS-example

# Node js를 활용한 간단한 Web page 만들기

주제 : 한동 대학교 팀 CC 활동 관리 page

내용 : 한동 대학교 내부 활동 중 팀 CC라는 활동이 존재한다. 팀 CC 활동은 각각의 팀들이 팀장이 정해준 활동들을 수행하고 사진으로 기록을 한 뒤 팀장은 점수를 합산해 최종 우승 팀을 
선정하는 활동이다. 

기능 : Admin과 User가 존재. Admin은 기본적으로 팀명, 팀 CC수를 입력해 팀을 생성할 수 있고 이후 활동 및 점수를 추가할 수 있다. 
       각각의 user들에게는 팀장이 미리 입력한 활동들을 볼 수 있고 자신들이 활동한 사진을 upload해서 점수를 얻을 수 있다.
       


구현: 기본적인 기능들은 단순히 Nodejs만을 사용해 구현이 되었다. 모든 data들은 mysql을 사용해 DB를 관리하고 이미지의 경우에도 BLOB형식으로 DB에 저장시키도록 하였다.
      사진을 Blob형식으로 DB에 저장하는 것은 효율적이지 않지만 사진의 수가 적으므로 DB에 직접 저장하도록 함




Reference HTML Template
https://startbootstrap.com/theme/one-page-wonder 
