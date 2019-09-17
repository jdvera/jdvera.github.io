(function($) {
  $(function() {

    var firebaseConfig = {
      apiKey: "AIzaSyCPN2BgNphLudytlnAkWoedqv8Z0H5BbYU",
      authDomain: "portfolio-97e2a.firebaseapp.com",
      databaseURL: "https://portfolio-97e2a.firebaseio.com",
      projectId: "portfolio-97e2a",
      storageBucket: "",
      messagingSenderId: "786343169918",
      appId: "1:786343169918:web:780069908972a9fb11ad2f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    database.ref("/" + moment().format("x")).set({
      page_load: moment().format('MMM D, HH:mm')
    });

    $(".thumbnail").on("click", function() {
      var propName = "thumbnail_" + $(this).data("repo");
      database.ref("/" + moment().format("x")).set({
        [propName]: moment().format('MMM D, HH:mm')
      });
    });

    $(".gh-repo").on("click", function() {
      var propName = "repo_" + $(this).data("repo");
      database.ref("/" + moment().format("x")).set({
        [propName]: moment().format('MMM D, HH:mm')
      });
    });

    $(".nav-link-click").on("click", function() {
      database.ref("/" + moment().format("x")).set({
        [$(this).data("name")]: moment().format('MMM D, HH:mm')
      });
    })


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
