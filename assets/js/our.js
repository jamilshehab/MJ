// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(document).scrollTop() > 200) {
//       $(".logo-default").hide(); // Show the default logo when scrolled beyond 500 pixels
//       $(".logo-dark").show(); // Hide the dark logo
//       $("#mainMenu nav  ul  li  a").css({
//         color: "#000"
//       });
//       $("#btn-search i").css({
//         color: "#000"
//       });
//       $(".icon-globe").css({
//         color: "#000"
//       });
//       $(".p-dropdown span").css({
//         color: "#000"
//       });
//     } else {
//       $(".logo-default").show(); // Hide the default logo
//       $(".logo-dark").hide(); // Show the dark logo when not scrolled beyond 500 pixels
//       $("#mainMenu nav ul li a").css({
//         color: "#fff"
//       });
//       $("#btn-search i ").css({
//         color: "#fff"
//       });
//       $(".icon-globe").css({
//         color: "#fff"
//       });
//       $(".p-dropdown span").css({
//         color: "#fff"
//       });
//     }
//     // if ($(document).scrollTop() == 200){
//     //     $("#header").css({ background-color:"blue"});
//     // }
//   });
// });

// $(document).ready(function () {
//   var homepage = window.location.pathname === '/';

//   if (!homepage) {
//     $(".logo-default").hide(); // Show the default logo when scrolled beyond 500 pixels
//     $(".logo-dark").show(); // Hide the dark logo
//     $("#mainMenu nav  ul  li  a").css({
//       color: "#000"
//     });
//     $("#btn-search i").css({
//       color: "#000"
//     });
//     $(".icon-globe").css({
//       color: "#000"
//     });
//     $(".p-dropdown span").css({
//       color: "#000"
//     });
//   }
// });




const body = document.querySelector('body');

// when the body has class "home"
if (body.classList.contains('home')) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 200) {
        $(".logo-default").hide(); // Show the default logo when scrolled beyond 500 pixels
        $(".logo-dark").show(); // Hide the dark logo
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
        $(".logo-default").show(); // Hide the default logo
        $(".logo-dark").hide(); // Show the dark logo when not scrolled beyond 500 pixels
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
} else {
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