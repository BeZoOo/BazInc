/*global $, jquery, alert*/
$(function() {  
    $("html").niceScroll();
});

$(document).ready(function (){
	$('.carousel').carousel({
		interval:3000
	});

	// Show Color Option Div When Clicking On The Gear 

	$(".gear-check").click(function (){
		$(".color-option").fadeToggle();
	});

	// Change Theme Color On Click

	var colorLi = $(".color-option ul li");

	colorLi
		.eq(0).css("backgroundColor","#0895D1").end()
		.eq(1).css("backgroundColor","#c61616").end()
		.eq(2).css("backgroundColor","#c7a629").end()
		.eq(3).css("backgroundColor","#7b29b8");

	colorLi.click(function ()
	{
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));

	});

	// Cashing The Scroll Element

	var scrollButton = $("#scroll-top");

	$(window).scroll(function ()
	{
		 $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

	});

		//Click on button to scroll

		scrollButton.click(function ()
		{
			$("html,body").animate({ scrollTop : 0 }, 600);
		});
});

//loading Screen

$(window).on("load",function ()
{


	$(".loading-overlay .spinner").fadeOut(2000,
	function ()
	{	
		$("body").css("overflow","auto");

		$(this).parent().fadeOut(2000,
		function ()
		{
			$(this).remove();
		});	
	});
});