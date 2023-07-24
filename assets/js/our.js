const body = document.querySelector('body');

// when the body has class "home"
if (body.classList.contains('home')) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 200) {
        $(".logo-default").hide(); // Hide the default logo when scrolled beyond 500 pixels
        $(".logo-dark").show(); // Show the dark logo
        $("#mainMenu nav  ul  li  a").css({
          color: "#000"
        });
        $("#btn-search i").css({
          color: "#000"
        });
        $(".icon-globe").css({
          color: "#000"
        });
        $(".p-dropdown span").css({
          color: "#000"
        });
      } else {
        $(".logo-default").show(); // Show the default logo
        $(".logo-dark").hide(); // Hide the dark logo when not scrolled beyond 500 pixels
        $("#mainMenu nav ul li a").css({
          color: "#fff"
        });
        $("#btn-search i ").css({
          color: "#fff"
        });
        $(".icon-globe").css({
          color: "#fff"
        });
        $(".p-dropdown span").css({
          color: "#fff"
        });
      }
    });
  });
}
//when the body not contain class home
else {
  $("#mainMenu nav  ul  li  a").css({
    color: "#000"
  });
  $("#btn-search i").css({
    color: "#000"
  });
  $(".icon-globe").css({
    color: "#000"
  });
  $(".p-dropdown span").css({
    color: "#000"
  });
}