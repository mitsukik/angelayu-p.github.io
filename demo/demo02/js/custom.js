//slide out menu
    $(document).ready(function (){
        $(".navbar-toggler, .overlay").on("click", function(){
            $(".mobileMenu, .overlay").toggleClass("open");
        })
    });


//dropdown menu
    $(".rotate,.dropdown-toggle").click(function () {
        $(this).toggleClass("down");
    })


//like btn
function myFunction(x) {
    x.classList.toggle("fas");
}


//responsive menu hide when screen < 768px
if($('body').width() < 450){
    $('#dashboard__wrapper').addClass('sidebar-closed');
}else if($('body').width() > 450 && $('body').width() < 768){
   $('#dashboard__wrapper').addClass('sidebar-closed');
}else{
    $('#dashboard__wrapper').addClass('sidebar-open');
}


//delete
