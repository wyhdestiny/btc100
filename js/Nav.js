$(function(){
	//导航条
	
	$(".Navigation_bar_contents li").click(function(){
		console.log($(".Navigation_bar_contents li").length)
		$(this).addClass("first_Underline");
		$(this).css("color","#eb6519");
		$(this).siblings().removeClass("first_Underline");
		$(this).siblings().css("color","#333333");
//		$(".last_Menu_content").css("color","#999999")
	})
	$(".last_Menu_content").click(function(){
//		location.href="html/AboutUs.html"
	})
	$(".last_Menu_content").mousemove(function(){
		$(this).css("color","white")
	})
	$(".last_Menu_content").mouseout(function(){
		$(this).css("color","#333333")
	})
	
})
