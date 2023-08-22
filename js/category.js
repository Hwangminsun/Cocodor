$(function(){

// 햄버거 메뉴
$(".ham").click(function () {
    $(".menu").animate({ marginLeft: "70%" }, 350);
    modalOn();
  });

  // 모달 부분 클릭 시 메뉴 닫히도록
  $(".modal_back").click(function () {

    $(".menu").animate({ marginLeft: "0%" }, 350);
    $(".sub").stop().slideUp(500);
    $(".menu >ul >li> a").children(".down").attr("src", "../image/menu/down.png");
    modalOff();

  });

  // 서브 메뉴
  $(".menu >ul >li a").click(function () {

    //제목과 down 이미지
    if ($(this).next().is(":visible")) { //보이면 실행해라
      $(this).next().stop().slideUp(500);
      $(this).children(".down").attr("src", "image/menu/down.png");
    } else {
      $(".sub").stop().slideUp(500);
      $(".menu >ul >li a").children(".down").attr("src", "image/menu/down.png");
      $(this).next().stop().slideDown(500);
      $(this).find("img").attr("src", "image/menu/up.png");
    }
  });

  // 모달 보일 때 스크롤 락 설정
  function modalOn() {
    $(".modal_back").addClass("back_on");
    $("body").addClass("body_lock");
  }

  function modalOff() {
    $(".modal_back").removeClass("back_on");
    $("body").removeClass("body_lock");
  }

  // 검색 창 토글
  $(".search_box").hide();

  $(".search").click(function () {
    $(".search_box").slideToggle("50", function () {});
  });

  // 화면에서 배너 3장이 시간 간격을 두고 돌아가며 나오게 하는 것
  setInterval(function () {

    const left1 = $("#top_banner ul").css("left"); /* 0 */

    if (parseInt(left1) == -630) {
      // 위치가 -630px 라면
      $("#top_banner ul").animate(
        {
          left: 0, //ul의 위치를 0으로
        },
        "slow"
      );
    } else {
      $("#top_banner ul").animate(
        {
          left: "-=315px", //ul의 위치를 현재 위치에서
        },
        "slow"
      );
    }
  }, 3000);

  // 상품목록 디퓨저 종류 필터
  $(".filterList_1").hide();

  $("#filter_1 > p > a.filter_title_1").on("click", function (e) {
    e.preventDefault();

    if ($(this).parent().next().is(":visible")) {
      $(this).parent().next().stop().hide();
      $(this).find("img").css({ transform: "none" });
    } else {
      $(this).parent().next().stop().show();
      $(this).find("img").css({ transform: "rotate(180deg)" });
    }
  });
  // ok

  $("#filter_1 ul.filterList_1 li").on("click", function () {
    const filter_Top = $(this).text();
    console.log(filter_Top);

    $(".filterList_1 li").removeClass("on");
    $(this).addClass("on");
    $(".filterList_1").hide();
    $("#filter_1 > p > a > b").text(filter_Top);
    $("#filter_1 > p > a.filter_title_1")
      .find("img")
      .css({ transform: "rotate(0deg)" });

    // ok

    const btnName = $(this).text();
    console.log(btnName);

    $("#dif_box ul.dif_list li").each(function () {
      const imgAlt = $(this).find("img").attr("data-list");
      console.log(imgAlt);

      if (btnName == "전체보기") {
        $("#dif_box ul.dif_list li").fadeIn();
      } else if (imgAlt == btnName) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });

  // scroll to top
  $("#aside").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $("#aside").hide();

  // Scroll to Top visible
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 1300) {
      $("#aside").fadeIn();
    } else {
      $("#aside").fadeOut();
    }

  });

});