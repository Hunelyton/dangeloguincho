window.onscroll = function() { navbarScroll() };

function navbarScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("navbar-scrolled");
  } else {
    document.getElementById("navbar").classList.remove("navbar-scrolled");
  }
}
