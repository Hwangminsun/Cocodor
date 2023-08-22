## 모바일 웹 - 코코도르 쇼핑몰 (Cocodor)
### URL : http:/icelatte.dothome.co.kr
----------------------
### 기획 의도
>   코코도르는 우리나라에서 가장 대중적인 디퓨저 브랜드입니다.  
> 저렴한 가격대비 큰 만족감을 느낄 수 있고, 다양한 디자인과 구성의 상품이 있습니다.
>  
> 현재 코코도르의 메인 페이지는 한 화면에 지나치게 많은 정보와 이미지가 있고   
> 같은 내용의 메뉴가 여러 섹션에 중복 배치되어있습니다.  
> 따라서 많은 정보 보다는 최소한의 이미지, 간결한 설명을 활용하며  
> 중복된 메뉴구성을 최소화하고, 불필요하다고 생각되는 메뉴를 수정하여  
> 화면 전체를 한 눈에 알아볼 수 있도록 리뉴얼했습니다.
### Skill : HTML, CSS, Jquery  
> - 웹 접근성 : skip-menu (내용 바로가기, 하단 바로가기)   
> - W3C 유효성 검사 완료
> - HTML5 시맨틱 태그
### 주요 구현기능
-----------------------
 1. Main page
  
> ![coco_cap1](https://github.com/Hwangminsun/Cocodor/assets/127732251/80c9d9c1-a6d9-4dc0-98ae-76c576f34a26)
  >  - 헤더 : float 적용, 메인 이미지 슬라이드 인디케이트 등 : flex 적용
  >  - 햄버거 메뉴 슬라이드
> ```
>   $(".ham").click(function () {
> 
>     $(".menu").animate({ marginLeft: "70%" }, 350);
>     modalOn();
> 
>  });
>
>  // 모달 부분 클릭 시 메뉴 닫히도록
>  $(".modal_back").click(function () {
> 
>    $(".menu").animate({ marginLeft: "0%" }, 350);
>    $(".sub").stop().slideUp(500);
>    $(".menu >ul >li> a").children(".down").attr("src", "../image/menu/down.png");
> 
>    modalOff();
> 
>  });
> ```
  >  - 모달 창, 스크롤 lock 
  >  - 검색 아이콘 Toggle slide
  >  - Slick slide 적용, slick-dots / slick-arrow - css style 커스텀
  >  - Slick filter 적용   
> ```
>  $(".frag_list li").on("click", function (e) {
> 
>    e.preventDefault();
> 
>    const num = $(this).index();
>    $(".frag_list li").removeClass();
>    $(this).addClass("select");
> 
>    if (num == 0) {
>      $(".frag_ract").slick("slickUnfilter");
>    } else if (num == 1) {
>      $(".frag_ract").slick("slickUnfilter");
>      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".fruty"));
>    } else if (num == 2) {
>      $(".frag_ract").slick("slickUnfilter");
>      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".cotton"));
>    } else if (num == 3) {
>      $(".frag_ract").slick("slickUnfilter");
>      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".herbal"));
>    } else if (num == 4) {
>      $(".frag_ract").slick("slickUnfilter");
>     $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".woody"));
>    } else {
>      $(".frag_ract").slick("slickUnfilter");
>      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".fresh"));
> 
>    }
>  });
> ```
 2.  Sub - category.html
    
> ![coco_cap2](https://github.com/Hwangminsun/Cocodor/assets/127732251/fbf681f6-4081-48e0-b13f-34c4b2192344)
  > - 배너 이미지 슬라이드
> ```
>   setInterval(function() {
> 
>     const left1 = $("#top_banner ul").css("left"); /* 0 */
>
>     if (parseInt(left1) == -630) {
>         $("#top_banner ul").animate({left: 0}, "slow"); //ul의 위치를 0으로
>     } else {
>         $("#top_banner ul").animate({left: "-=315px"}, "slow");
>    }
> 
> }, 3000);
> ```
  > - 상품목록에서 '디퓨저 종류' 검색기능 적용
>```
>  $(".filterList_1").hide();
>
>  $("#filter_1 > p > a.filter_title_1").on("click", function (e) {
>    e.preventDefault();
>
>    if ($(this).parent().next().is(":visible")) {
>      $(this).parent().next().stop().hide();
>      $(this).find("img").css({ transform: "none" });
>    } else {
>      $(this).parent().next().stop().show();
>      $(this).find("img").css({ transform: "rotate(180deg)" });
>    }
>  });
>
>  $("#filter_1 ul.filterList_1 li").on("click", function () {
>    const filter_Top = $(this).text();
>    console.log(filter_Top);
>
>    $(".filterList_1 li").removeClass("on");
>    $(this).addClass("on");
>    $(".filterList_1").hide();
>    $("#filter_1 > p > a > b").text(filter_Top);
>    $("#filter_1 > p > a.filter_title_1").find("img").css({ transform: "rotate(0deg)" });
>
>    const btnName = $(this).text();
>    console.log(btnName);
>
>    $("#dif_box ul.dif_list li").each(function () {
>      const imgAlt = $(this).find("img").attr("data-list");
>      console.log(imgAlt);
>
>      if (btnName == "전체보기") {
>        $("#dif_box ul.dif_list li").fadeIn();
>      } else if (imgAlt == btnName) {
>        $(this).fadeIn();
>      } else {
>        $(this).fadeOut();
>      }
>    });
>  });
>```
