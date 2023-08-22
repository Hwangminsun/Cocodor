$(function () {
  // 햄버거 메뉴
  $(".ham").click(function () {
    $(".menu").animate({ marginLeft: "70%" }, 350);
    modalOn();
  });

  // 모달 부분 클릭 시 메뉴 닫히도록
  $(".modal_back").click(function () {
    $(".menu").animate({ marginLeft: "0%" }, 350);
    $(".sub").stop().slideUp(500);
    $(".menu >ul >li> a")
      .children(".down")
      .attr("src", "../image/menu/down.png");
    modalOff();
  });

  // 서브 메뉴
  $(".menu >ul >li a").click(function () {
    //제목과 down 이미지
    if ($(this).next().is(":visible")) {
      //보이면 실행해라
      $(this).next().stop().slideUp(500);
      $(this).children(".down").attr("src", "image/menu/down.png");
    } else {
      $(".sub").stop().slideUp(500);
      $(".menu >ul >li a").children(".down").attr("src", "image/menu/down.png");
      $(this).next().stop().slideDown(500);
      $(this).find("img").attr("src", "image/menu/up.png");
    }
  });

  // scroll to top
  $("aside").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $("aside").hide();

  // ===== Scroll to Top visible ====
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 2450) {
      $("aside").fadeIn();
    } else {
      $("aside").fadeOut();
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
  $(".big").hide();

  $(".search").click(function () {
    $(".big").slideToggle("50", function () {});
  });

  // 메인 이미지 슬릭
  $("#slide ul").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    focusOnHover: false,
  });

  // best 슬릭
  $("#best").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    focusOnHover: false,
  });

  // best 슬릭 필터
  $(".small li").on("click", function () {
    const n = $(this).index();
    $(".small li").removeClass();
    $(this).addClass("on");
    if (n == 0) {
      $("#best").slick("slickUnfilter");
    } else if (n == 1) {
      $("#best").slick("slickUnfilter");
      $("#best").slick("slickFilter", $("#best li").filter(".dfs"));
    } else if (n == 2) {
      $("#best").slick("slickUnfilter");
      $("#best").slick("slickFilter", $("#best li").filter(".can"));
    } else if (n == 3) {
      $("#best").slick("slickUnfilter");
      $("#best").slick("slickFilter", $("#best li").filter(".gft"));
    } else {
      $("#best").slick("slickUnfilter");
      $("#best").slick("slickFilter", $("#best li").filter(".flw"));
    }
  });

  // new 슬릭
  $("#new ul").slick({
    // autoplaySpeed: 1500,
    // infinite: true,
    // dots:false,
    arrows: true,
    // fade: true,
    // cssEase: 'linear',
    // pauseOnHover: false,
    // focusOnHover: false
  });

  // frag (향기) 슬릭
  $(".ract").slick({
    autoplay: false,
    infinity: true,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  });

  // 향기 슬릭 필터
  $(".cc li").on("click", function (e) {
    e.preventDefault();

    const num = $(this).index();

    $(".cc li").removeClass();
    $(this).addClass("select");

    if (num == 0) {
      $(".ract").slick("slickUnfilter");
    } else if (num == 1) {
      $(".ract").slick("slickUnfilter");
      $(".ract").slick("slickFilter", $(".ract li").filter(".fruty"));
    } else if (num == 2) {
      $(".ract").slick("slickUnfilter");
      $(".ract").slick("slickFilter", $(".ract li").filter(".cotton"));
    } else if (num == 3) {
      $(".ract").slick("slickUnfilter");
      $(".ract").slick("slickFilter", $(".ract li").filter(".herbal"));
    } else if (num == 4) {
      $(".ract").slick("slickUnfilter");
      $(".ract").slick("slickFilter", $(".ract li").filter(".woody"));
    } else {
      $(".ract").slick("slickUnfilter");
      $(".ract").slick("slickFilter", $(".ract li").filter(".fresh"));
    }
  });

  //  flower, gift 슬릭 fade
  $("#flower ul").slick({
    autoplay: true,
    speed: 2500,
    infinite: true,
    fade: true,
    arrows: false,
    dots: false,
  });

  // categoty.html - 배너 슬라이드

  //화면에서 배너 3장이 시간 간격을 두고 돌아가며 나오게 하는 것

  setInterval(function () {
    const left1 = $("#pp ul").css("left"); /* 0 */

    if (parseInt(left1) == -630) {
      // 위치가 -630px 라면 (3번째 이미지에 위치해있으면)
      $("#pp ul").animate(
        {
          left: 0, //ul의 왼쪽 위치를 0으로
        },
        "slow"
      );
    } else {
      $("#pp ul").animate(
        {
          left: "-=315px", //ul의 왼쪽위치를 현재 위치에서
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

    $("#sg ul.ss li").each(function () {
      const imgAlt = $(this).find("img").attr("data-list");
      console.log(imgAlt);

      if (btnName == "전체보기") {
        $("#sg ul.ss li").fadeIn();
      } else if (imgAlt == btnName) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });
});
