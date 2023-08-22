$(function () {
  $("#slide ul").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $("#best").slick({
    autoplay: false,
    autoplaySpeed: 3500,
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  });

  $("#new ul").slick({
    autoplay: false,
    infinite: true,
    arrows: false,
  });

  $("#flower ul").slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
  });
});
