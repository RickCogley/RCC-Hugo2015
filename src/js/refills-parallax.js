//Bourbon refills parallax
$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});
$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});
