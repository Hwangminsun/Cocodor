$(function(){
  $("#slide ul").slick({
    dots:true,
    arrows :false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('#best').slick({
    autoplay: false,
    autoplaySpeed: 3500,
    infinity: true,
    slidesToShow:2,
    slidesToScroll:1,
    dots:false,
    arrows:false

  });

//  $(".small li").on("click",function(e){
//   const n=$(this).index();
//   $(".small li").removeClass();
//   $(this).addClass("on");
//   if (n==0) {
//     $("#best").slick("slickUnfilter");
//   }else if(n==1){
//     $("#best").slick("slickUnfilter");
//     $("#best").slick("slickFilter", $("#best li").filter(".dfs"));
//   }else if(n==2){
//     $("#best").slick("slickUnfilter");
//     $("#best").slick("slickFilter", $("#best li").filter(".can"));
//   }else if(n==3){
//     $("#best").slick("slickUnfilter");
//     $("#best").slick("slickFilter", $("#best li").filter(".gft"));
//   }else{
//     $("#best").slick("slickUnfilter");
//     $("#best").slick("slickFilter", $("#best li").filter(".flw"));
//   }
//   //slickUnfilter, 적용된 .filter를 해제
//   e.preventDefault();
// });

  $("#new ul").slick({
    autoplay: false,
    infinite: true,
    arrows: false,
  });

  // $('.ract').slick({
        
  //   slidesToShow:1,
  //   slidesToScroll:1,
  // });

 
  $('#flower ul').slick({

    autoplay: false,
    infinite: true,
    arrows:false,
    dots: true,


  });


});