(function($) {
  $(function() {

    $(".sidenav").sidenav();
    $(".parallax").parallax();

    $(".thumbnail").mouseenter(function() {
      $(this).attr("src", $(this).data("animate"));
    }).mouseleave(function() {
      $(this).attr("src", $(this).data("still"));
    });

  });
})(jQuery);
