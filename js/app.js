var myNav = document.querySelector(".navbar");
var logo = document.getElementById("navLogo");
var katalog = document.getElementById("navKatalog");
var mobileNav = document.getElementById("mobileNav");
var mobLink = document.getElementsByClassName("mob-link");
var toTop = document.getElementById("toTop");

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

  if (
    document.body.scrollTop >= 700 ||
    document.documentElement.scrollTop >= 700
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavbar() {
  // mobileNav.classList.toggle("mobile-nav__active");
  document.body.classList.toggle("hide");
  if ($(mobileNav).css("opacity") == 0) {
    $(mobileNav).click();
    $(mobileNav).css("opacity", 1);
    $(mobileNav).css("display", "block");
  } else {
    $(mobileNav).css("opacity", 0);
    $(mobileNav).css("display", "none");
  }
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

  // ZAVRSITI DA POSTAVLJA LINK UNUTAR DUGMADI ZA EN I SRPSKI
  $("#srb1").each(function () {
    $(this).attr("href", window.location.hostname);
  });
  $("#eng1").each(function () {
    $(this).attr("href", window.location.hostname + "/en");
  });
  // $("#srb1").attr("href", window.location.hostname);
  // $("#eng1").attr("href", window.location.hostname + "/en");

  $(mobLink).on("click", function () {
    // mobileNav.classList.toggle("mobile-nav__active");
    document.body.classList.toggle("hide");
    if ($(mobileNav).css("opacity") == 0) {
      $(mobileNav).click();
      $(mobileNav).css("opacity", 1);
      $(mobileNav).css("display", "block");
    } else {
      $(mobileNav).css("opacity", 0);
      $(mobileNav).css("display", "none");
    }
  });
});
