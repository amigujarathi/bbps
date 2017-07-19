 $(function(){   
	//default open tab 
	$('#current-market').css('display','block');
	$('#whoisagent').css('display','block');
	$('#whoisagentinstitution').css('display','block');
		$('.active1').removeClass('active1');
		$('#li_1').addClass('active1');
		$('#li_custom_1').addClass('active1');
 
	   
	$("a[href$='#current-market']").click(function(){
		$('#current-market').css('display','block');
		$('#bbps-overview').css('display','none');
		$('#about-bbpcu').css('display','none');
		$('#about-ncpi').css('display','none');
		$('#bbps-team').css('display','none'); 
		$('#brand-logo').css('display','none');
		
		$('.active1').removeClass('active1');
		$('#li_1').addClass('active1');
		$('#li_custom_1').addClass('active1');
	   
	});
	
	$("a[href$='#bbps-overview']").click(function(){
		$('#bbps-overview').css('display','block');
		$('#current-market').css('display','none');
		$('#about-bbpcu').css('display','none');
		$('#about-ncpi').css('display','none');
		$('#bbps-team').css('display','none'); 
		$('#brand-logo').css('display','none');
		
		$('.active1').removeClass('active1');
		$('#li_2').addClass('active1');
		$('#li_custom_2').addClass('active1');

	});
	
	$("a[href$='#about-bbpcu']").click(function(){
		$('#about-bbpcu').css('display','block');
		$('#bbps-overview').css('display','none');
		$('#current-market').css('display','none'); 
		$('#about-ncpi').css('display','none'); 
		$('#bbps-team').css('display','none'); 
		$('#brand-logo').css('display','none');
		
	    $('.active1').removeClass('active1');
	    $('#li_3').addClass('active1');
	    $('#li_custom_3').addClass('active1');
 
		
	});
	
	$("a[href$='#about-ncpi']").click(function(){
		$('#about-ncpi').css('display','block'); 
		$('#about-bbpcu').css('display','none');
		$('#bbps-overview').css('display','none');
		$('#current-market').css('display','none');
		$('#bbps-team').css('display','none'); 
		$('#brand-logo').css('display','none');
		
		$('.active1').removeClass('active1');
		$('#li_4').addClass('active1');
	    $('#li_custom_4').addClass('active1');
	});
	
	$("a[href$='#bbps-team']").click(function(){
		$('#bbps-team').css('display','block'); 
		$('#about-ncpi').css('display','none'); 
		$('#about-bbpcu').css('display','none');
		$('#bbps-overview').css('display','none');
		$('#current-market').css('display','none'); 
		$('#brand-logo').css('display','none');

		$('.active1').removeClass('active1');
		$('#li_5').addClass('active1');
		$('#li_custom_5').addClass('active1');
	   
	});
	
	$("a[href$='#brand-logo']").click(function(){
		$('#brand-logo').css('display','block');
		$('#about-ncpi').css('display','none'); 
		$('#about-bbpcu').css('display','none');
		$('#bbps-overview').css('display','none');
		$('#current-market').css('display','none');
		$('#bbps-team').css('display','none'); 
		
	
		$('.active1').removeClass('active1');
		$('#li_6').addClass('active1');
		$('#li_custom_6').addClass('active1');
	});
	$(document).click(function (event) {
		//alert('in');
        var clickover = $(event.target);
        var _opened = $(".about-subnav").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
			//alert('out');
            $("button[data-target='#bs-example-navbar-collapse-2']").click();
        }
    });
});
$(window).scroll(function () {
	var headerTop = $("#main-header").offset().top + $("#main-header").outerHeight();
	//alert(headerTop);
	if ($(window).scrollTop() > headerTop) {
		//when the header reaches the top 
		$("#sticky").css("display", "block");
	} 
	else {
		//put position back to relative
		$("#sticky").css("display", "none");
	}
});	
/*
$('ul.nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('ul.nav li.dropdown').click(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});*/