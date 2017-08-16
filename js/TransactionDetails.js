$(function(){
	
	//币种列表
	$(".discountBar_currency").mousemove(function(){
		$(".currencyList").css("display","block");
		$(".arrow").css("display","block");
	})
	$(".discountBar_currency").mouseout(function(){
		$(".currencyList").css("display","none");
		$(".arrow").css("display","none");
	})
	
	
	
		//侧边栏菜单选项
	$(".Transation_content_li").click(function(){
		var i=$(".Transation_content_li").index($(this));
		setTimeout(function(){
			$(".Transation_content_li").removeClass("Selected_state").eq(i).addClass("Selected_state")
			$(".Transation_content_li .choices_arrow").hide().eq(i).show();
		})
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
