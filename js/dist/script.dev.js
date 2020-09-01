"use strict";

$(document).ready(function () {
  /* navigation bar color change */
  var changeColor = function changeColor() {
    /*console.log("scroll");*/
    var scroll_start = 0;
    var startchange = $("#start");
    var offset = startchange.offset();

    if (startchange.length) {
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();

        if (scroll_start > offset.top) {
          $(".navbar").addClass("bg-cloud");
        } else {
          $(".navbar").removeClass("bg-light");
          $(".navbar").removeClass("bg-cloud");
          /*console.log("portfolio out");*/
        }
      });
    }
  };
  /* page scroll on click */


  var scroll = function scroll() {
    $(".page-scroll a").click(function (event) {
      event.preventDefault();
      var $anchor = $(this);
      console.log($(this).attr("href"));
      $("html, body").animate({
        scrollTop: $($anchor.attr("href")).offset().top
      }, 1000, "easeInOutExpo");
    });
  };

  changeColor();
  scroll();
});