(function($) {
  $(function() {

    $(".sidenav").sidenav();
    $(".parallax").parallax();

    $(".thumbnail").mouseenter(function() {
      $(this).attr("src", $(this).data("animate"));
    }).mouseleave(function() {
      $(this).attr("src", $(this).data("still"));
    });

    Image1 = new Image(1600, 900);
    Image1.src = "./images/coffee.gif";

    Image2 = new Image(1600, 900);
    Image2.src = "./images/deck.gif";

    Image3 = new Image(1600, 900);
    Image3.src = "./images/spell.gif";

    Image4 = new Image(1600, 900);
    Image4.src = "./images/viper.gif";

  });
})(jQuery);
