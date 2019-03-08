

$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $svg_anm   = $preloader.find('.cssload-spinner');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});


$(window).on("load", function(){
    $(".menu").click(function(){
        $(".icon-menu").toggleClass("icon-menu-toggle");
        $("body").toggleClass("body-none");
        $(".open-menu").toggleClass("open-menu-toggle");
        
    })

})




$(window).scroll(function(e) {
    var height = $(this).scrollTop();
    $('.line-fix')[height >= 570 ? 'addClass' : 'removeClass']('active')
  });


  $(window).scroll(function(e) {
    var height = $(this).scrollTop();
    $('.icon-menu')[height >= 570 ? 'addClass' : 'removeClass']('active')
  });



    $('.slider').slick({
        autoplay: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true
     
    });
          
 