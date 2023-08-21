$(function(){

    // $(".hamburger").click(function() {
    //   $(".menu").toggleClass("open");
          
    //   });
    


    // 모바일
      function slideMenu() {
        const activeState = $(".menu").hasClass("active"); 
        $(".menu").animate({
            left: activeState ? "0%" : "-400px"}, 300);
        }
        
        $(".hamburger").on("click",function(){
            $(".hamburger").toggleClass("open");
            $(" .menu").toggleClass("active");
            slideMenu();   
        });

    // 모바일 끝

  // Animate the scroll to top
  $('aside').click(function() {
        
    $('html, body').animate({scrollTop: 0}, 1000);
    
  });

  $('aside').hide();


  // ===== Scroll to Top visible ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 3500) {        // If page is scrolled more than 50px
        $('aside').fadeIn();    // Fade in the arrow
    } else {
        $('aside').fadeOut();   // Else fade out the arrow
    }
});

// scroll

// tablet, pc right nav
$('#right li a.r_service').click(function(){

  // 요소의 스크롤 높이 절대값

  // service
  const div = document.getElementById('contact');
  const divTop = div.getBoundingClientRect().top;
  const absoluteTop = window.pageYOffset + divTop;

  console.log(absoluteTop);

  $('body, html').animate({ scrollTop: absoluteTop - 80+"px"}, 1000);

});

$('#right li a.r_location').click(function(){

  // 요소의 스크롤 높이 절대값

  // location
  const div1 = document.getElementById('cafe_resize');
  const divTop1 = div1.getBoundingClientRect().top;
  const absoluteTop1 = window.pageYOffset + divTop1;

  console.log(absoluteTop1);

  $('body, html').animate({ scrollTop: absoluteTop1 - 80+"px"}, 1000);

});

// mobile bottomNav
$('.bottomNav li a.map').click(function(){

// 요소의 스크롤 높이 절대값

  // location
  const div3 = document.getElementById('cafeloca');
  const divTop3 = div3.getBoundingClientRect().top;
  const absoluteTop3 = window.pageYOffset + divTop3;

  console.log(absoluteTop3);

  $('body, html').animate({ scrollTop: absoluteTop3 - 80+"px"}, 1000);

});

$('.bottomNav li a.pen').click(function(){

  
  // 요소의 스크롤 높이 절대값
  
    // location
    const div4 = document.getElementById('contact');
    const divTop4 = div4.getBoundingClientRect().top;
    const absoluteTop4 = window.pageYOffset + divTop4;
  
    console.log(absoluteTop4);
  
    $('body, html').animate({ scrollTop: absoluteTop4 - 80+"px"}, 1000);
  
  });

});