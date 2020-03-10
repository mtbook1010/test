// トップスライダー
$("document").ready(function() {
  $(".mypattern").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: "23%"
  });
});

$("document").ready(function() {
  $(".mypattern-event").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "27%"
  });
});
