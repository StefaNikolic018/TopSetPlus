var myNav = document.querySelector(".navbar");
var logo = document.getElementById("navLogo");
var katalog = document.getElementById("navKatalog");
var mobileNav = document.getElementById("mobileNav");

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

function mobileNavbar() {
  // if (mobileNav.classList.has("mobile-nav__inactive")) {
  // mobileNav.classList
  // .remove("mobile-nav__inactive")
  // .add("mobile-nav__active");
  // } else {
  // mobileNav.classList
  // .remove("mobile-nav__inactive")
  // .add("mobile-nav__inactive");
  // }
  mobileNav.classList.toggle("mobile-nav__inactive");
}

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
