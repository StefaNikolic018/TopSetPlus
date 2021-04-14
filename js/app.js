var myNav = document.querySelector(".navbar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};
