$(function(){
	
	//footer 官方群
	
	$(".Official_group").mousemove(function(){
//		$(".Official_group_menu").css("display","block")
		setTimeout(function(){
			$(".Official_group_menu").show();
		},2000)
		
		$(".Official_group_img img").attr('src','../img/index_footer_bottom.png');
	})
	$(".Official_group").mouseout(function(){
//		$(".Official_group_menu").css("display","none")
		$(".Official_group_img img").attr('src','../img/index_footer_top.png');
		setTimeout(function () {
	        $(".Official_group_menu").hide();
	    }, 3000);
	})
	$(".Official_group_menu").mousemove(function(){
		$(".Official_group_menu").css("display","block")
		$(".Official_group_img img").attr('src','../img/index_footer_bottom.png');
	})
	$(".Official_group_menu").mouseout(function(){
		$(".Official_group_menu").css("display","none")
		$(".Official_group_img img").attr('src','../img/index_footer_top.png');
	})
	
	
	
	
	
	
	
	
	
	
})
