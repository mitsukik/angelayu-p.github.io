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

