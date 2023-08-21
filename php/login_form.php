<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="shortcut icon" href="../image/mainlogo/favicon.ico">
    <script src="../jquery/js/jquery-1.11.2.min.js"></script>
    
		<title>Cocodor 공식몰</title>
</head>

<script>
  $(function(){

  $( ".ham" ).click(function() {
  $(".menu").animate({marginLeft:"70%"}, 350);
     });

    $( ".modal_back" ).click(function() {
    $(".menu").animate({marginLeft:"0%"}, 350);
    $(".sub").stop().slideUp(500);
    $(".menu >ul >li> a").children("img").attr("src","../image/menu/down.png");
    
  });

  $(".menu >ul >li a").click(function(){ //제목과 down 이미지
    if($(this).next().is(":visible")){ //보이면 실행해라
      $(this).next().stop().slideUp(500);
      $(this).children("img").attr("src","../image/menu/down.png");
    }else{
  $(".sub").stop().slideUp(500);
  $(".menu >ul >li a").children("img").attr("src","../image/menu/down.png");
  $(this).next().stop().slideDown(500);
  $(this).find("img").attr("src","../image/menu/up.png");
    }
  });

  function modalOn(){
      $(".modal_back").addClass("back_on");
     // $("body").addClass("body_lock");   // body ��ũ�Ѿȵ�
  }
  function modalOff(){
      $(".modal_back").removeClass("back_on");
    //  $("body").removeClass("body_lock");   // body ��ũ�Ѿȵ�
  }
  $(".ham").click(function(){
      modalOn();
  });
  $(".modal_back").click(function(){
      modalOff();
  });

  $(".big").hide();

  $(".search").click(function() {
    $(".big").slideToggle("50", function() {
   });
  }); 

   

  function modalOn(){
      $(".modal_back").addClass("back_on");
     $("body").addClass("body_lock");
  }
  function modalOff(){
      $(".modal_back").removeClass("back_on");
     $("body").removeClass("body_lock");
  }
  $(".ham").click(function(){
      modalOn();
  });
  $(".modal_back").click(function(){
      modalOff();
  });

  $('.up').click(function(){
  $("html, body").animate({
    scrollTop: 0
}, "slow")
return false
});

  });

</script>

<body>
<div class="modal_back"></div>
  <div id="skip-menu">
    <a href=#menu>메뉴 바로가기</a>
    <a href=#section>콘텐츠 바로가기</a>
    </div>
  <header id="header" class="cf">
    
    <? include "header.php"; ?>  
  
  </header>
  
  <!-- 햄버거 메뉴 -->
  <nav class="menu">
    <div class="top">
      <ul class="cf">
        <li><a href="login_form.php"><span>회원가입</span></a></li>
        <li><img src="../image/menu/t_bar.png" alt="구분선"></li>
        <li><a href="#"><span>로그인</span></a></li>
    </ul>

    </div>
    <ul class="me1">
      <li class="first"><a class="title" href="#">브랜드<img class="down" src="../image/menu/down.png" alt="down"></a>
        <ul class="sub">
          <li><a href="../news.html">코코도르 소식</a></li>
          <li><a href="#">코코도르 기업홈페이지</a></li>
          <li><a href="../brand.html">사회공헌</a></li>
        </ul>
      </li>
        
      <li class="first"><a  class="title" href="#">제품<img  class="down" src="../image/menu/down.png" alt="down"></a>
        <ul class="sub">
          <li class="icon"><a href="sale.html">기획전<img class="sale" src="../image/menu/sale.png" alt="sale"></a></li>
          <li><a href="category.html">디퓨저</a></li>
          <li><a href="candle.html">캔들</a></li>
          <li><a href="flower.html">플라워&Gift</a></li>
          <li><a href="#frag">향기</a></li>
          <li><a href="#">대량&답례품</a></li>
          <li><a href="#">도매고객전용</a></li>
        </ul>
      </li>    
       
      <li class="first"><a  class="title" href="#">이벤트<img  class="down" src="../image/menu/down.png" alt="down"></a>
        <ul class="sub">
          <li><a href="event.html">이벤트 목록</a></li>
        </ul>
      </li>  
      <li class="first"><a  class="title" href="#">고객지원<img  class="down" src="../image/menu/down.png" alt="down"></a>
        <ul class="sub">
          <li><a href="#">자주묻는 질문</a></li>
          <li><a href="#">1:1문의</a></li>
          <li><a href="#">제휴문의</a></li>
        </ul>
      </li>
  </ul>
  <!-- <button class="close">&#215;</button> -->

  <!-- <div class="search"></div> -->
</nav>



<section id="section">
      
    <div class="start">
        <form name="member_form" method="post" action="login.php">
   <!-- login.php 로 이동, 전송방식은 post -->
        <h2>로그인</h2>
        <ul class="log">
            <li><label for="name">ID</label></li>
            <li><input type="text" id="name"
                name="id" size="15" maxlength="9" 
        autofocus placeholder="아이디"></li>
        <li><label for="pwd">Password</label></li>
        <li><input type="password" id="pwd" name="pass" size="15" maxlength="9" 
        autofocus placeholder="비밀번호"></li>
        </ul>
   

    <div class="in">
        <input type="submit" value="Login">
    </div>
    </form>
</div>
    
<div class="find">
<ul >
    <li><a href="id_screen.php">아이디찾기</a></li>
    <li><a href="id_screen.php">비밀번호찾기</a></li>
    <li><a href="member_form.php">일반회원가입</a></li>
</ul>
</div>

<div class="snl">
    <h2>SNS 로그인 및 회원가입</h2>
    <ul class="cf">
        <li><a href="#"><img src="../image/etc/kakaotalk_logo.png" 
        alt="카카오"></a></li>
        <li><a href="#"><img src="../image/etc/naver_icon.png"
        alt="네이버"></a></li>
    </ul>
</div>
</section>

<div class="up">
    <p><a href="javascript:void(0)"><img src="../image/up.png" alt="맨위로이동"></a></p>
  </div>  

  <script>
    $(function(){

  //top아이콘 클릭시 부드럽게 이동
$(".scroll_up").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
    return false
});
});
  </script>
          
    <footer>
      <h3>COMPANY INFO</h3>
        <div class="cs">
          <p>교환 / 반품주소지 : 경기도 용인시 처인구 모현읍 왕담로 145-17 코코도르(주)</p>
          <p>CS CENTER : 02-3445-0101</p>
          <p>운영시간 : 오전 9시 ~ 오후 5시 (주말, 공휴일 휴무)</p>
          <p>점심시간 : 정오 12시 ~ 오후 1시</p>
        </div>
    
        <ul class="sns cf">
         <li><a href="#"><img src="../image/sns/in.png" alt="인스타그램아이콘"></a></li>
         <li><a href="#"><img src="../image/sns/fb.png" alt="페이스북아이콘"></a></li>
         <li><a href="#"><img src="../image/sns/yt.png" alt="유튜브아이콘"></a></li>
        </ul>
        
        <div class="int cf">
          <ul>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">이용악관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">이용안내</a></li>
          </ul>
        </div>
    
        <div class="corp">
          <p>코코도르(주)  대표이사 : 정연재</p>
          <p>대표전화 : 02-3445-0101</p>
          <p>통신판매업신고번호 : 2013-용인처인-0082</p>
          <p>사업자등록번호 : 114-86-20008</p>
          <p>이메일 : cocoadmin@cocodor.com</p>
          <p>주소 : 경기도 용인시 처인구 모현읍 왕담로 145-17</p>
        </div>
    
        <div class="copyright">
          <p>Copyright&copy; by 코코도르(주). all rights reserved.</p>
          <p>Hosting by makeshop. Design by morenvy.</p>
        </div>
    
    </footer>
    
    </body>
    </html>
    
</body>
</html>