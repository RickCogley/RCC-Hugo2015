onscroll = function() {
  var toTopVisible = false;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 1000) {
    if (!toTopVisible) {
      document.getElementById('nav-to-top').style.display = 'block';
    }
  } else {
    if (scrollTop < 1000 || toTopVisible) {
      document.getElementById('nav-to-top').style.display = 'none';
    }
  }
};
