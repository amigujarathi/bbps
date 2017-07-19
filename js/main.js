$(document).ready(function(){
    /*
	* news section for the destop view 2 news display and mobile view 1 image should be display
	*/
    var br_width =  $( window ).width(); 
    var urlAbsolute = "images/banner_mob.jpg";
    if(br_width > 1224)
    {
        $('.slider1').bxSlider({
            //            auto: true,
            slideWidth: 550,
            maxSlides: 2,
        });
    }
    else{
        $('.slider1').bxSlider({
            //                 auto: true,
            slideWidth: 550,
        });
        $(".big_small_device").css("display","none");
    }
    $('body').click(function() {
        //$('.navbar-collapse.in').collapse('hide');
    });
    /*
	* end of new section
	*/

    /*
	* display the diffrent slider image for the mobile view 
	*/
    if(br_width < 748)
    {
        $(".desktop_slide").prop("src", urlAbsolute);
    }
    /*
	* end 
	*/
    $(window).bind('scroll', function () {
        var scrollheight = 76; 
        if (($(window).scrollTop() > scrollheight) ) {
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
                scrollTop: $(".hidden_popular_block").offset().top
            },
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
      
            if($elm.hasClass('animated')) {
                return true;
            } // if already animated skip to the next item
      
            topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
            if(wintop > (topcoords - (winheight*.75))) {
                // animate when top of the window is 3/4 above the element
                $elm.addClass('animated');
            }
        });
    } // end animate_elems()
});



/*--------------------------------
 Section vice moving code
 -------------------------------*/
$('#top-btn').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000); 
});


$(function(){
    var window_width =  $( window ).width(); 
    //alert(window_width);
    $(window).bind('scroll', function () {
        if(window_width > 1024)// used for width is 1024
        {
            if($(window).scrollTop() >= 620) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }
        }
        else if(window_width <= 1024 && window_width >= 949)// used for width is between 1024 to 1000
        {
            //alert("1024");
            if($(window).scrollTop() >= 500) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 853 && window_width >= 750)// used for width is between 790 to 750
        {
            //alert("780");
            if($(window).scrollTop() >= 390) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 719 && window_width >= 700)// used for width is between 719 to 700
        {
            //alert("719");
            if($(window).scrollTop() >= 800) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        } 
        else if(window_width <= 650 && window_width >= 630)// used for width is between 650 to 630
        {
            //alert("650");
            if($(window).scrollTop() >= 800) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }   
        else if(window_width <= 623 && window_width >= 610)// used for width is between 623 to 610
        {
            //alert("650");
            if($(window).scrollTop() >= 800) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 590 && window_width >= 520)// used for width is between 590 to 520
        {
            //alert("590");
            if($(window).scrollTop() >= 730) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 519 && window_width >= 510)// used for width is between 590 to 520
        {
            //alert("516");
            if($(window).scrollTop() >= 680) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 400 && window_width >= 358)// used for width is between 400 to 358
        {
            //alert("400");
            if($(window).scrollTop() >= 530) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 343 && window_width >= 330)// used for width is between 343 to 330
        {
            //alert("343");
            if($(window).scrollTop() >= 490) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }   
        }
        else if(window_width <= 310 && window_width >= 300)// used for width is between 310 to 303
        {
            //alert("310");
            if($(window).scrollTop() >= 450) 
            {
                $("#go-to-section").show();
                $("#go-to-section").addClass('sticky');
            }
            else
            {
                $("#go-to-section").hide();
                $("#go-to-section").removeClass('sticky');
            }       
        }
        
    });
});
 
 
 
$('#go-to-section ul li a').on("click",function (event) {
    event.preventDefault();
    var hrefLink = $(this).attr("href");
    //alert(hrefLink.split('#')[1]);
    var goToSectionPosition = $("#" + hrefLink.split('#')[1]).offset().top - 70;
    $('html, body').animate({
        scrollTop: goToSectionPosition
    }, 'slow');
});

$('.go-to-section-link').on("click", function (event) {
    event.preventDefault();
    var hrefLink = $(this).attr("href");
    //alert(hrefLink.split('#')[1]);
    var goToSectionPosition = $("#" + hrefLink.split('#')[1]).offset().top - 70;
    $('html, body').animate({
        scrollTop: goToSectionPosition
    }, 'slow');
    
});

$('#go-to-section ul li a').mouseover(function(){
    $("#go-to-section ul li span").hide();
    $(this).parents("li:first").find("span").show();
});

$('#go-to-section ul li a').mouseout(function(){
    $("#go-to-section ul li span").hide();
});

$('#go-to-section ul li a').click(function(){
    $('.selected').removeClass('selected');
    $(this).parents("li:first").addClass('selected');
});
 
 
 
 
/*---------------------
  heighlight section
 ----------------------*/

var aChildren = $("#go-to-section ul li").children(); // find the a children of the list items
var aArray = []; // create the empty aArray
$('#go-to-section ul li a').each(function(){
    //console.log($(this).attr('href'));
    aArray.push($(this).attr('href'));
});
//console.log(aArray);

$(window).scroll(function(){
    var window_width =  $( window ).width(); 
    //alert(window_width);
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    //console.log("windowPos :" + windowPos);
    var windowHeight = $(window).height(); // get the height of the window
    //console.log("windowHeight :" +windowHeight);
    var docHeight = $(document).height();
    //console.log("docHeight :" +docHeight);

    for (var i=0; i < aArray.length; i++) 
    {
        var theID = aArray[i];
        //console.log("theID :"+ theID);
        var divPos = $(theID).offset().top; // get the offset of the div from the top of page
        //console.log("divPos :" + divPos);
        var divHeight = $(theID).innerHeight(); // get the height of the div in question
        //console.log("divHeight :" + divHeight);

        // if(windowPos >= divPos - 125 && windowPos < (divPos + divHeight) - 125 ) 
             
        if(window_width > 1024)// used for width is 1024
        {
            if(windowPos >= (divPos - (divHeight - 249) ) ) 
            {
                //console.log("in if  :"+ theID);
                $('.selected').removeClass("selected");
                $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
            }
        }
        else if(window_width <= 1024 && window_width >= 949)// used for width is between 1024 to 1000
        {
            if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 160) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(windowPos >= (divPos - (divHeight - 215) ) ) 
            {
                //console.log("in if  :"+ theID);
                $('.selected').removeClass("selected");
                $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
            }
        }
        else if(window_width <= 853 && window_width >= 750)// used for width is between 790 to 750
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 140) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 110) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 100) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        } 
        else if(window_width <= 719 && window_width >= 700)// used for width is between 719 to 700
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 360) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 400) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 330) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }   
        else if(window_width <= 650 && window_width >= 630)// used for width is between 650 to 630
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 330) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 390) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 320) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }
        else if(window_width <= 623 && window_width >= 610)// used for width is between 623 to 610
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 330) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 390) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 320) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }     
        else if(window_width <= 590 && window_width >= 520)// used for width is between 590 to 520
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 320) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 335) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 280) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }
        else if(window_width <= 519 && window_width >= 510)// used for width is between 519 to 510
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 380) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 260) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 310) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }
        else if(window_width <= 400 && window_width >= 358)// used for width is between 400 to 358
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 340) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 210) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 290) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }
        else if(window_width <= 343 && window_width >= 330)// used for width is between 343 to 330
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 330) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 230) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 270) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }
        else if(window_width <= 310 && window_width >= 300)// used for width is between 310 to 300
        {
            if(theID == "#go-to-bbps-partner")
            {
                if(windowPos >= (divPos - (divHeight - 360) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-billers")
            {
                if(windowPos >= (divPos - (divHeight - 230) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else if(theID == "#go-to-bbps-customer")
            {
                if(windowPos >= (divPos - (divHeight - 320) ) ) 
                {
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }
            }
            else 
            {
                if(windowPos >= (divPos - (divHeight - 190) ) ) 
                {
                    //console.log("in if  :"+ theID);
                    $('.selected').removeClass("selected");
                    $("a[href='" + theID + "']").closest( "li" ).addClass("selected");
                }    
            }
        }
            
    }//end for loop
    if(windowPos + windowHeight == docHeight) {
        if (!$("#go-to-section li:last-child").hasClass("selected")) {
            var navActiveCurrent = $(".selected").attr("href");
            $("a[href='" + navActiveCurrent + "']").closest( "li" ).removeClass("selected");
            $("#go-to-section li:last-child").addClass("selected");
        }
    }
        
});