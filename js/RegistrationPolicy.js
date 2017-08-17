$(function(){
	//复选框
	
	var off=false;
	$(".register_txt").click(function(){
		if(off){
			$(".next_register").attr("disabled",true);
			$(".regist_agreement img").attr('src','../img/not_check_selected.png');
			off=false;
		}else{
			$(".next_register").removeAttr("disabled");
			$(".regist_agreement img").attr('src','../img/input_checkbox.png');
			off=true;
		}
	})
	$(".register_notCheck_img").click(function(){
		if(off){
			$(".next_register").attr("disabled",true);
			$(".regist_agreement img").attr('src','../img/not_check_selected.png');
			off=false;
		}else{
			$(".next_register").removeAttr("disabled");
			$(".regist_agreement img").attr('src','../img/input_checkbox.png');
			off=true;
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
