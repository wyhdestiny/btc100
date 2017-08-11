$(function(){
	//复选框
	var off=false;
	$(".register_txt").click(function(){
		if(off){
			$(".next_register").attr("disabled",true);
			off=false;
		}else{
			$(".next_register").removeAttr("disabled");
			off=true;
		}
	})
	var offo=false;
	$(".check").click(function(){
		if(offo){
			$(".next_register").attr("disabled",true);
			offo=false;
		}else{
			$(".next_register").removeAttr("disabled");
			offo=true;
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
})
