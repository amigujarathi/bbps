$(document).ready(function(){
   /*$('.bxslider').bxSlider({
        auto: true,
//        autoControls: true
   });
   
   */
   $(window).bind('scroll', function () {
       var scrollheight = 76; 
    if ($(window).scrollTop() > scrollheight ) {
        $('.menu').removeClass('menu-adjust');
        $('.menu').addClass('navbar_fixed');  
    }
    else{
         $('.menu').addClass('menu-adjust');
        $('.menu').removeClass('navbar_fixed');  
    }
});




$(".footer_img").click(function(){
    //alert($(".cl_hidden").hasClass('open_cl'));
    $(this).css("display","none");
    $('.footer_icon_down').css('display','block');
    
    if($(".hidden_popular_block").slideToggle('close_cl'))
    {
        $(".hidden_popular_block").addClass('open_cl');
        $('html,body').animate({
        scrollTop: $(".hidden_popular_block").offset().top},
        'slow');
    } 
});

$(".footer_icon_down").click(function(){
    $(this).css("display","none");
    $('.footer_img').css('display','block');
});

});
$(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $(window).scroll(function(){
    animate_elems();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
    
    /*if(wintop > 78)
        {
            $("").removeClass(menu-adjust);
            $("").addClass();
        }
    */
    
    
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  } // end animate_elems()
});