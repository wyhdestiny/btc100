$(function(){
	
	
	//侧边栏菜单选项
	$(".Financial_Center_li").click(function(){
		var i=$(".Financial_Center_li").index($(this));
		setTimeout(function(){
			$(".Financial_Center_li").removeClass("Selected_state").eq(i).addClass("Selected_state")
			$(".Financial_Center_li_cont").hide().eq(i).show();
			$(".Financial_Center_li .choices_arrow").hide().eq(i).show();
		})
		
	})
	
	//约值
	$(".content_market").mouseup(function(){
//		alert("000")
		var market=$(this).text()*2;
		$(this).css("color","#E96328");
		$(this).text(market)
	})
	$(".content_market").mouseout(function(){
		var market=$(this).text();
		$(this).css("color","#E96328");
		$(this).text(market/2)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
