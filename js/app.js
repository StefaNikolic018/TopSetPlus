var myNav = document.querySelector(".navbar");
var logo = document.getElementById("navLogo");
var katalog = document.getElementById("navKatalog");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 40 ||
    document.documentElement.scrollTop >= 40
  ) {
    myNav.classList.add("scroll");
    logo.style.visibility = "visible";
    katalog.style.visibility = "visible";
  } else {
    myNav.classList.remove("scroll");
    logo.style.visibility = "hidden";
    katalog.style.visibility = "hidden";
  }
};

// JavaScript Document
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
