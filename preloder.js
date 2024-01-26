// Select the preloader element

var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
  // Hide the preloader once the page is fully loaded
  loader.style.display = "none";
});
