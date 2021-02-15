
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.display = "flex"
  } else {
    document.getElementsByClassName("navbar")[0].style.display ="none"
  }
  prevScrollpos = currentScrollPos;
}