$(document).ready(function () {
  // invoke the carousel
  $("#vertical-carousel").carousel({
    interval: 3000,
  });
});

// scroll slides on mouse scroll
$("#vertical-carousel").bind("mousewheel DOMMouseScroll", function (e) {
  debugger
  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
    $(this).carousel("prev");
  } else {
    $(this).carousel("next");
  }
  e.preventDefault();
});

//scroll slides on swipe for touch enabled devices
$("#vertical-carousel").on("touchstart", function (event) {
  var yTouchPointStart = event.originalEvent.touches[0].pageY;
  $(this).on("touchmove", function (event) {
    var yTouchPointEnd = event.originalEvent.touches[0].pageY;
    if (Math.floor(yTouchPointStart - yTouchPointEnd) > 1) {
      $(".carousel").carousel("next");
    } else if (Math.floor(yTouchPointStart - yTouchPointEnd) < -1) {
      $(".carousel").carousel("prev");
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
  event.preventDefault();
});

//animated  carousel start
$(document).ready(function () {
  //to add  start animation on load for first slide
  $(function () {
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        this.addClass("animated " + animationName).one(
          animationEnd,
          function () {
            $(this).removeClass(animationName);
          }
        );
      },
    });
    $(".item1.active img").animateCss("slideInDown");
    $(".item1.active h2").animateCss("zoomIn");
    $(".item1.active p").animateCss("fadeIn");
  });

  //to start animation on  mousescroll , click and swipe

  $("#vertical-carousel").on("slide.bs.carousel", function () {
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        this.addClass("animated " + animationName).one(
          animationEnd,
          function () {
            $(this).removeClass(animationName);
          }
        );
      },
    });

    // add animation type  from animate.css on the element which you want to animate

    $(".item1 img").animateCss("slideInDown");
    $(".item1 h2").animateCss("zoomIn");
    $(".item1 p").animateCss("fadeIn");

    $(".item2 img").animateCss("zoomIn");
    $(".item2 h2").animateCss("swing");
    $(".item2 p").animateCss("fadeIn");

    $(".item3 img").animateCss("fadeInLeft");
    $(".item3 h2").animateCss("fadeInDown");
    $(".item3 p").animateCss("fadeIn");
  });
});
