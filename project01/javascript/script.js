// JavaScript Document

$(document).ready(function(){

  $('.navi').mouseover(function(){        
	  $(this).find('.sub_menu').stop().slideDown(500);
      $('.top').stop().animate({"height":"300px"})
  }).mouseout(function(){
	  $(this).find('.sub_menu').stop().slideUp(500);
      $('.top').stop().animate({"height":"123px"})
  });

  $('.imgslide a:gt(0)').hide();
  setInterval(function(){
	$('.imgslide a:first-child').fadeOut()
	   .next('a').fadeIn()
	   .end().appendTo('.imgslide');},3000);


   $('.tabmenu>li>a').mouseover(function(){
	$(this).parent().addClass("active").siblings().removeClass("active");
		return false;
   });
    
   
    jQuery(document).ready(function () {
    'use strict';
    $(".jsMMenuBtn").hover(function () {
        
        $(".jsMMenu").stop().slideDown();
    }, function () {
        
         $(".jsMMenu").stop().slideUp();
    });
    
    $(".jsMMenu").hover(
      function() {
        $(".jsMMenu").stop().slideDown(400);
      },
      function() {
        $(".jsMMenu").stop().slideUp(600);
      }
    );
});
    
    
    
  $(".notice li:first").click(function(){
	$("#modal").addClass("active");
  });
  $(".btn").click(function(){
	$("#modal").removeClass("active");
  });
	   
});