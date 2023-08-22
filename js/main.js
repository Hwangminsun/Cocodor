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
    $(".menu >ul >li> a").children(".down").attr("src", "../image/menu/down.png");
    modalOff();

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

  // 검색 창 토글
  $(".search_box").hide();

  $(".search").click(function () {
    $(".search_box").slideToggle("50", function () {});
  });

  // 메인 이미지 슬릭
  $("#main_image").slick({
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
  $(".best_list li").on("click", function () {
    const n = $(this).index();
    $(".best_list li").removeClass();
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
  $(".frag_ract").slick({
    autoplay: false,
    infinity: true,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  });

  // 향기 슬릭 필터
  $(".frag_list li").on("click", function (e) {
    e.preventDefault();

    const num = $(this).index();

    $(".frag_list li").removeClass();
    $(this).addClass("select");

    if (num == 0) {
      $(".frag_ract").slick("slickUnfilter");
    } else if (num == 1) {
      $(".frag_ract").slick("slickUnfilter");
      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".fruty"));
    } else if (num == 2) {
      $(".frag_ract").slick("slickUnfilter");
      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".cotton"));
    } else if (num == 3) {
      $(".frag_ract").slick("slickUnfilter");
      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".herbal"));
    } else if (num == 4) {
      $(".frag_ract").slick("slickUnfilter");
      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".woody"));
    } else {
      $(".frag_ract").slick("slickUnfilter");
      $(".frag_ract").slick("slickFilter", $(".frag_ract li").filter(".fresh"));
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

    // scroll to top
    $("aside").click(function () {

      $("html, body").animate({ scrollTop: 0 }, 1000);
    });
  
    $("aside").hide();
  
    // Scroll Top visible
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 2450) {
        $("aside").fadeIn();
      } else {
        $("aside").fadeOut();
      }
    });
});
