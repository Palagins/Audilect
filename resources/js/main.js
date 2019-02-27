$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

function showLogin() {
  document.getElementById('id01').style.display ="block";
}

function showSignIn() {
  document.getElementById('id02').style.display ="block";
}

function closeLogin() {
  document.getElementById('id01').style.display ="none";
}

function closeSignIn() {
  document.getElementById('id02').style.display ="none";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
