$('.information-block__slider-block__slider').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 1,   
    prevArrow: '.information-block__slider-block__arrows__left',
    nextArrow: '.information-block__slider-block__arrows__right',
  });
          
  $('.information-block__slider-block__slider-2').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 1,   
    prevArrow: '.information-block__slider-block__arrows__left-2',
    nextArrow: '.information-block__slider-block__arrows__right-2',
  });

  $(window).on("load", function(){
    $(".header__top-part__menu").click(function(){
      $(".head__menu_active").toggleClass("head__menu_active-toggle");
      $("body").toggleClass("head__menu_active-toggle");
    })
    
})

$('.split').typeIt({
  strings: 'bionic human muscle enhancers..',
  speed: 90,
  autoStart: false
});

$(window).on('load', function () {
  var $preloader = $('#preloader'),
      $svg_anm   = $preloader.find('.cssload-spinner');
  $svg_anm.fadeOut();
  $preloader.delay(500).fadeOut('slow');


});


function ScrollAnimation(el, classChnged, scrollHeight){

  if ( $(window).scrollTop() > $(el).offset().top - scrollHeight) 
  {
    $(el).addClass(classChnged);
  }else{
    $(el).removeClass(classChnged);
  }

}



$(window).scroll(function(){

  
  ScrollAnimation(".information-block__info_background p", "welcome-show", 500);

  ScrollAnimation(".information-block__slider-block_close-block", "open-menu", 500);

  ScrollAnimation(".block-black", "block-black-open", 500);

  ScrollAnimation(".block-black-gallery", "block-black-gallery-open", 500);

  ScrollAnimation(".gallery_grey", "welcome-show", 500);


});


