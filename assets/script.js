$(document).ready(function () {
  // Page Changes
  $("#homePageLink").click(function () {
    $(".content").load("home.html").hide().fadeIn(1000);
  })
  $("#flowersPageLink").click(function () {
    $(".content").load("flowers.html").hide().fadeIn(1000);
  })
  $("#occasionsPageLink").click(function () {
    $(".content").load("occasions.html").hide().fadeIn(1000);
  })
  $("#floristryPageLink").click(function () {
    $(".content").load("floristry.html").hide().fadeIn(1000);
  })
  $("#contactPageLink").click(function () {
    $(".content").load("contact.html").hide().fadeIn(1000);
  })

  // Button Actions
  var numberOfItem = 0;
  $(document).on("click", ".btn-cart", function () {
    numberOfItem++;
    $("#itemInCart").text(numberOfItem);

    $(".flash").slideDown(function () {
      setTimeout(function () {
        $(".flash").slideUp()
      }, 2000);
    });
  })

  // Page controls
  $(document).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 100) {
      $(".user-menu>nav").addClass("minibar");
    } else {
      $(".user-menu>nav").removeClass("minibar");
    }
  })
})

function setDefaultPage() {
  $(".content").load("home.html");
}