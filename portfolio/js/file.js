

 $(window).on("load", function(){
    $(".header__icon").click(function(){
      $(".menu-open").toggleClass("menu_aclive");
      $(".header__icon").toggleClass("img-icon");
      $(".header__icon hr").toggleClass("none");
      $("body").toggleClass("bo");
    })
    
})
