window.onscroll = function() {navbarFix()};

var navbar = document.getElementById("nav_bar");
var sticky = navbar.offsetTop;
function navbarFix() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function parse_files() {
        
}