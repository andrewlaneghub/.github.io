//Based on Chapter 11 Excerise 1 Extra's plugin
"use strict";
$(document).ready(() => {
  $("#slider").bxSlider({
    randomStart: true,
    moveSlides: 1,
    pause: 3000,
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 250,
    slideMargin: 10,
    pager: true,
    pagerType: "short",
    pagerSelector: "#pager"
  }); //end slider
}); //end ready
