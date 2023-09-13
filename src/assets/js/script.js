$(document).ready(function () {
  // invoke the vertical carousel
  $("#vertical-carousel").carousel({
    interval: 3000,
  });

  // For card/Multi Carousel
  var itemsMainDiv = ".MultiCarousel";
  var itemsDiv = ".MultiCarousel-inner";
  var itemWidth = "";

  $(".leftLst, .rightLst").click(function () {
    var condition = $(this).hasClass("leftLst");
    if (condition) click(0, this);
    else click(1, this);
  });

  ResCarouselSize();

  $(window).resize(function () {
    ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
    var incno = 0;
    var dataItems = "data-items";
    var itemClass = ".item";
    var id = 0;
    var btnParentSb = "";
    var itemsSplit = "";
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $("body").width();
    $(itemsDiv).each(function () {
      id = id + 1;
      var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(",");
      $(this)
        .parent()
        .attr("id", "MultiCarousel" + id);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[2];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[2];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else {
        incno = itemsSplit[0];
        itemWidth = sampwidth / incno;
      }
      $(this).css({
        transform: "translateX(0px)",
        width: itemWidth * itemNumbers,
      });
      $(this)
        .find(itemClass)
        .each(function () {
          $(this).outerWidth(itemWidth);
        });

      $(".leftLst").addClass("over");
      $(".rightLst").removeClass("over");
    });
  }

  //this function used to move the items
  function ResCarousel(e, el, s) {
    var leftBtn = ".leftLst";
    var rightBtn = ".rightLst";
    var translateXval = "";
    var divStyle = $(el + " " + itemsDiv).css("transform");
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4]);
    if (e == 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(el + " " + rightBtn).removeClass("over");

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + " " + leftBtn).addClass("over");
      }
    } else if (e == 1) {
      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(el + " " + leftBtn).removeClass("over");

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + " " + rightBtn).addClass("over");
      }
    }
    $(el + " " + itemsDiv).css(
      "transform",
      "translateX(" + -translateXval + "px)"
    );
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
    var Parent = "#" + $(ee).parent().attr("id");
    var slide = $(Parent).attr("data-slide");
    ResCarousel(ell, Parent, slide);
  }
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
  });
});

// For Horizontal Card Carousel
$(".card .carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
