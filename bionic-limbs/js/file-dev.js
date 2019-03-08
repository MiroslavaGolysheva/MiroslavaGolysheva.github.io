jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 300) {
        jQuery('.dev__foto__foto-2_block').addClass('sliding-blog-9');
    }
    else {
        jQuery('.dev__foto__foto-2_block').removeClass('sliding-blog-9');
    }
});

jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 300) {
        jQuery('.dev__foto__foto-1_block').addClass('sliding-blog-9');
    }
    else {
        jQuery('.dev__foto__foto-1_block').removeClass('sliding-blog-9');
    }
});



$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $svg_anm   = $preloader.find('.cssload-spinner');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
  });
  
  $(window).on("load", function(){
    $(".header__top-part__menu").click(function(){
      $(".head__menu_active").toggleClass("head__menu_active-toggle");
      $("body").toggleClass("head__menu_active-toggle");
    })
    
})
