$(function() {
	
//	var top_a=$("#nav").scrollTop()
//	if(top_a>=900){
//		console.log("在顶部")
//	}else{
//		console.log("在底部")
//	}
	
	//导航条
	$(".Navigation_bar_contents li").click(function(){
		$(this).addClass("first_Underline");
		$(this).css("color","#eb6519");
		$(this).siblings().removeClass("first_Underline");
		$(this).siblings().css("color","#999999");
	})
	$(".last_Menu_content").mousemove(function(){
		$(this).css("color","white");
	})
	$(".last_Menu_content").mouseout(function(){
		$(this).css("color","#999999");
	})
	
	
	//
	$(".shouye").click(function(){
		location.href="index.html"
	})
	$(".jiaoyi").click(function(){
		location.href="html/TradingCenter.html"
	})
	$(".caiwu").click(function(){
		location.href="html/FinancialCenter.html"
	})
	
	
	
	
	//k线图选项卡
	var K_linetop=$(".Discount_bar_ul_li");
	var K_linebottom=$(".k_line");
	var K_arrow=$(".kline_arrow");
	 
	K_linetop.hover(function(){
		var i=K_linetop.index($(this));
		
		function way(){
			K_linetop.removeClass("#Discount_bar_ul_li_first").eq(i).addClass("#Discount_bar_ul_li_first");
			K_linetop.removeClass(".kline_arrow").eq(i).addClass(".kline_arrow");
			K_arrow.hide().eq(i).show();
			K_linebottom.hide().eq(i).show();
		}
		timer = setTimeout(way,50);
		
	},function(){
		clearTimeout(timer);
	})
	
	
	
	
	//新闻中心
	
	$(".Website_dynamics").hover(function(){
		$(this).addClass("PressCenter_first");
		$(this).siblings().removeClass("PressCenter_first");
		$(".News_content_details").css("display","block").css("transition",".3s");
		$(".News_content_details").siblings().css("display","none").css("transition",".3s");
	})
	
	$(".Project_dynamics").hover(function(){
		$(this).addClass("PressCenter_first");
		$(this).siblings().removeClass("PressCenter_first");
		$(".News_content_details_two").css("display","block").css("transition",".3s");
		$(".News_content_details_two").siblings().css("display","none").css("transition",".3s");
	})
	
	$(".Quotation_information").hover(function(){
		$(this).addClass("PressCenter_first");
		$(this).siblings().removeClass("PressCenter_first");
		$(".News_content_details_three").css("display","block").css("transition",".3s");
		$(".News_content_details_three").siblings().css("display","none").css("transition",".3s");
	})
	
	//News_details_left_upper_a
	$(".News_details_left_upper_a").mousemove(function(){
		$(".News_details_left_upper_a .Press_details_left_last_date").css("background","#E96228").css("color","white");
	})
	$(".News_details_left_upper_a").mouseout(function(){
		$(".News_details_left_upper_a .Press_details_left_last_date").css("background","white").css("color","#E96228");
	})
	//News_details_left_upper_b
	$(".News_details_left_upper_b").mousemove(function(){
		$(".News_details_left_upper_b .Press_details_left_last_date").css("background","#E96228").css("color","white");
	})
	$(".News_details_left_upper_b").mouseout(function(){
		$(".News_details_left_upper_b .Press_details_left_last_date").css("background","white").css("color","#E96228");
	})
	//News_details_left_upper_c
	$(".News_details_left_upper_c").mousemove(function(){
		$(".News_details_left_upper_c .Press_details_left_last_date").css("background","#E96228").css("color","white");
	})
	$(".News_details_left_upper_c").mouseout(function(){
		$(".News_details_left_upper_c .Press_details_left_last_date").css("background","white").css("color","#E96228");
	})
	//News_details_left_upper_d
	$(".News_details_left_upper_d").mousemove(function(){
		$(".News_details_left_upper_d .Press_details_left_last_date").css("background","#E96228").css("color","white");
	})
	$(".News_details_left_upper_d").mouseout(function(){
		$(".News_details_left_upper_d .Press_details_left_last_date").css("background","white").css("color","#E96228");
	})
	//News_details_left_upper_e
	$(".News_details_left_upper_e").mousemove(function(){
		$(".News_details_left_upper_e .Press_details_left_last_date").css("background","#E96228").css("color","white");
	})
	$(".News_details_left_upper_e").mouseout(function(){
		$(".News_details_left_upper_e .Press_details_left_last_date").css("background","white").css("color","#E96228");
	})
	//News_details_left_upper_f
	$(".News_details_left_upper_f").mousemove(function(){
		$(".News_details_left_upper_f .Press_details_left_last_date").css("background","#E96228").css("color","white");
	})
	$(".News_details_left_upper_f").mouseout(function(){
		$(".News_details_left_upper_f .Press_details_left_last_date").css("background","white").css("color","#E96228");
	})
	
	
	//联系我们
	
	$(".Online_Service_background_a").mousemove(function(){
		$(".contact_img_a").addClass("change_big");
	})
	$(".Online_Service_background_a").mouseout(function(){
		$(".contact_img_a").removeClass("change_big");
	})
	$(".Online_Service_background_b").mousemove(function(){
		$(".contact_img_b").addClass("change_big");
	})
	$(".Online_Service_background_b").mouseout(function(){
		$(".contact_img_b").removeClass("change_big");
	})
	$(".Online_Service_background_c").mousemove(function(){
		$(".contact_img_c").addClass("change_big");
	})
	$(".Online_Service_background_c").mouseout(function(){
		$(".contact_img_c").removeClass("change_big");
	})
	$(".Online_Service_background_d").mousemove(function(){
		$(".contact_img_d").addClass("change_big");
	})
	$(".Online_Service_background_d").mouseout(function(){
		$(".contact_img_d").removeClass("change_big");
	})
	$(".Online_Service_background_e").mousemove(function(){
		$(".contact_img_e").addClass("change_big");
	})
	$(".Online_Service_background_e").mouseout(function(){
		$(".contact_img_e").removeClass("change_big");
	})
	
	//新手指导
	$(".Registration_Guide").mousemove(function(){
		$(".Registration_Guide").addClass("Hover_over");
	})
	$(".Registration_Guide").mouseout(function(){
		$(".Registration_Guide").removeClass("Hover_over");
	})
	$(".Prepaid_cash_withdrawal").mousemove(function(){
		$(".Prepaid_cash_withdrawal").addClass("Hover_over");
	})
	$(".Prepaid_cash_withdrawal").mouseout(function(){
		$(".Prepaid_cash_withdrawal").removeClass("Hover_over");
	})
	$(".Coin_money").mousemove(function(){
		$(".Coin_money").addClass("Hover_over");
	})
	$(".Coin_money").mouseout(function(){
		$(".Coin_money").removeClass("Hover_over");
	})
	$(".Buying_and_selling").mousemove(function(){
		$(".Buying_and_selling").addClass("Hover_over");
	})
	$(".Buying_and_selling").mouseout(function(){
		$(".Buying_and_selling").removeClass("Hover_over");
	})
	
	
	
	//footer
	$(".Official_group").mousemove(function(){
		$(".Official_group_menu").css("display","block")
		$(".Official_group_img img").attr('src','img/index_footer_bottom.png');
	})
	$(".Official_group").mouseout(function(){
		$(".Official_group_menu").css("display","none")
		$(".Official_group_img img").attr('src','img/index_footer_top.png');
	})
	$(".Official_group_menu").mousemove(function(){
		$(".Official_group_menu").css("display","block")
		$(".Official_group_img img").attr('src','img/index_footer_bottom.png');
	})
	$(".Official_group_menu").mouseout(function(){
		$(".Official_group_menu").css("display","none")
		$(".Official_group_img img").attr('src','img/index_footer_top.png');
	})
	
	
	
	
	
})