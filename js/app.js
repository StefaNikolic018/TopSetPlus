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
  var opacity = 1;
  if (!mobileNav.classList.contains("mobile-nav__inactive")) {
    if (opacity == 1) {
      do {
        setTimeout(() => {
          opacity = opacity - 0.1;
          mobileNav.style.opacity(opacity);
        }, 1000);
      } while (opacity != 0);
    }
  }
  mobileNav.classList.toggle("mobile-nav__inactive");
  document.body.classList.toggle("hide");
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
