// JavaScript Document

//mobile menu
$(document).ready(function() {
	$(".navbar-toggler,.overlay").on("click", function() {
		$(".mobileMenu,.overlay").toggleClass("open");
	});
});



//nav icon
$(document).ready(function(){
	$('.nav-icon0').click(function(){
		$(this).toggleClass('open');
	});
});



//loader
var $loader = document.querySelector('.loader')

window.onload = function() {
  $loader.classList.remove('loader--active')
};

document.querySelector('.btn').addEventListener('click', function () {
  $loader.classList.add('loader--active')
  
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 5000)
})



function checkPassword() {
    // Replace 'your-username' and 'your-password' with your desired values
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;
    if (enteredUsername === 'thankyou' && enteredPassword === 'thankyou') {
        // Redirect to the protected page
        window.location.href = './index_eng.html';
    } else {
        // Show an error message
        alert('Incorrect username or password. Please try again.');
    }
}
   