/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 
<!-- mobile nav toggle - avoids unsafe-inline-->
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('togglenav')
    .addEventListener('click', navToggle);
});
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
      if (currentScrollPos > 100) {
    document.getElementById("topnav").style.top = "-100px";
  }
  }
  prevScrollpos = currentScrollPos;
} 

//WebFontConfig = {
    //google: { families: [ 'Roboto+Slab' ] }
//};

//(function() {
    //var wf = document.createElement('script');
    //wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    //wf.type = 'text/javascript';
    //wf.async = 'true';
    //var s = document.getElementsByTagName('script')[0];
    //s.parentNode.insertBefore(wf, s);
//})();


