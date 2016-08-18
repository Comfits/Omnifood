$(document).ready(function(){
	$('.mobile-menu').click(function(e){
		var icon = $('.icon-mobile-menu');
		var nav = $('.main-nav');
		nav.slideToggle(300);
		if(icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
			nav.css('display','block');
		}
		else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
			nav.css('display','none');
		}
		e.preventDefault();
	});
});