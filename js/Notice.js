$(function(){
	
	//侧边栏菜单选项
	$(".Financial_Center_li").click(function(){
		var i=$(".Financial_Center_li").index($(this));
		setTimeout(function(){
			$(".Financial_Center_li").removeClass("Selected_state").eq(i).addClass("Selected_state")
			$(".Financial_Center_li .choices_arrow").hide().eq(i).show();
		})
		
	})
	
	function webAnnon(str){
		var param="";
		if(str){
			param=str;
		}
		$(".noticeContent iframe").attr("src","paging.html?param="+param);
		
	}
	
	$("#notice").click(function(){
		webAnnon("notice");
	})
	$("#dynamic").click(function(){
		webAnnon("dynamic");
	})
	$("#information").click(function(){
		webAnnon("information");
	})
	
	
	
	//详情
//	function details(id){
//		var url="details.html?id="+id;
//		$(".noticeContent iframe").attr("src",url);
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
