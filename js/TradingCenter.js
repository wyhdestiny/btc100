$(function(){
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
	
	
	//币种列表
	$(".Currency_list_header_middle span").click(function(){
		$(this).addClass("Digital_underline");
		$(this).siblings().removeClass("Digital_underline");
	})
	$(".Digital_currency").click(function(){
		$("#table_content_one").css("display","block");
		$("#table_content_two").css("display","none");
		$("#table_content_three").css("display","none");
	})
	$(".Digital_asset").click(function(){
		$("#table_content_one").css("display","none");
		$("#table_content_two").css("display","block");
		$("#table_content_three").css("display","none");
	})
	$(".Observation_area").click(function(){
		$("#table_content_one").css("display","none");
		$("#table_content_two").css("display","none");
		$("#table_content_three").css("display","block");
	})
	
//table_content_one
	//最新成交价
	$(".Latest_transaction_price").click(function(){
		$(".Latest_transaction_price").addClass("change_color");
		$(".Latest_transaction_price").siblings().removeClass("change_color");
		//成交量
		$(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		 //成交额
        $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //日涨跌
        $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".The_latest_price");
        orderid.each(function(i){
           var id = parseInt($(this).html()); 
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var _length = orderIdArray.length;
        //table_content_one
        var table_content_one=$("#table_content_one").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_two
        var table_content_two=$("#table_content_two").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_two").append(table_content_two.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_three
        var table_content_three=$("#table_content_three").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_three").append(table_content_three.eq(idIndex[orderIdArray[i]]));
        }
	})
	
	//24H成交量
	$(".volume").click(function(){
		$(".volume").addClass("change_color");
		$(".volume").siblings().removeClass("change_color");
		//最新成交量
		$(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
        //成交额
        $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //日涨跌
        $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".volume_of_business");
        orderid.each(function(i){
           var id = parseInt($(this).html()); 
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".volume_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".volume_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var _length = orderIdArray.length;
        //table_content_one
        var table_content_one=$("#table_content_one").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
       	//table_content_two
        var table_content_two=$("#table_content_two").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_two").append(table_content_two.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_three
        var table_content_three=$("#table_content_three").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_three").append(table_content_three.eq(idIndex[orderIdArray[i]]));
        }
        
	})
	
	//24H成交额(CNY)
	$(".Turnover").click(function(){
		$(".Turnover").addClass("change_color");
		$(".Turnover").siblings().removeClass("change_color");
		//最新成交量
		$(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
		//成交量
		$(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //日涨跌
        $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".trading_volume");
        orderid.each(function(i){
           var id = parseInt($(this).html()); 
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".Turnover_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".Turnover_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var table_content_one=$("#table_content_one").find("tr");
        var _length = orderIdArray.length;
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_two
        var table_content_two=$("#table_content_two").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_two").append(table_content_two.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_three
        var table_content_three=$("#table_content_three").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_three").append(table_content_three.eq(idIndex[orderIdArray[i]]));
        }
	})
	
	//日涨跌
	$(".Day_highs_and_lows").click(function(){
		$(".Day_highs_and_lows").addClass("change_color");
		$(".Day_highs_and_lows").siblings().removeClass("change_color");
		//最新成交量
		$(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
		//成交量
		$(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //成交额
        $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".Day_number");
        console.log(orderid)
        orderid.each(function(i){
           var id = parseFloat($(this).html()); 
           console.log(id)
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var table_content_one=$("#table_content_one").find("tr");
        var _length = orderIdArray.length;
        
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_two
        var table_content_two=$("#table_content_two").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_two").append(table_content_two.eq(idIndex[orderIdArray[i]]));
        }
        //table_content_three
        var table_content_three=$("#table_content_three").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_three").append(table_content_three.eq(idIndex[orderIdArray[i]]));
        }
	})
	
	
//table_content_two
	//最新成交价
	/*$(".Latest_transaction_price").click(function(){
		$(".Latest_transaction_price").addClass("change_color");
		$(".Latest_transaction_price").siblings().removeClass("change_color");
		//成交量
		$(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		 //成交额
        $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //日涨跌
        $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".The_latest_price");
        orderid.each(function(i){
           var id = parseInt($(this).html()); 
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var _length = orderIdArray.length;
        //table_content_two
        var table_content_two=$("#table_content_two").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_two").append(table_content_two.eq(idIndex[orderIdArray[i]]));
        }
        
	})
	
	//24H成交量
	$(".volume").click(function(){
		$(".volume").addClass("change_color");
		$(".volume").siblings().removeClass("change_color");
		//最新成交量
		$(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
        //成交额
        $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //日涨跌
        $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".volume_of_business");
        orderid.each(function(i){
           var id = parseInt($(this).html()); 
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".volume_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".volume_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var _length = orderIdArray.length;
        //table_content_one
        var table_content_one=$("#table_content_one").find("tr");
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
       
        
	})
	
	//24H成交额(CNY)
	$(".Turnover").click(function(){
		$(".Turnover").addClass("change_color");
		$(".Turnover").siblings().removeClass("change_color");
		//最新成交量
		$(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
		//成交量
		$(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //日涨跌
        $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".trading_volume");
        orderid.each(function(i){
           var id = parseInt($(this).html()); 
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".Turnover_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".Turnover_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var table_content_one=$("#table_content_one").find("tr");
        var _length = orderIdArray.length;
        
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
        
	})
	
	//日涨跌
	$(".Day_highs_and_lows").click(function(){
		$(".Day_highs_and_lows").addClass("change_color");
		$(".Day_highs_and_lows").siblings().removeClass("change_color");
		//最新成交量
		$(".Latest_transaction_price_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        $(".Latest_transaction_price_imga img").attr("src","../img/trading_center_grey_top.png")
		//成交量
		$(".volume_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".volume_imgb img").attr("src","../img/trading_center_grey_bottom.png")
        //成交额
        $(".Turnover_imga img").attr("src","../img/trading_center_grey_top.png")
        $(".Turnover_imgb img").attr("src","../img/trading_center_grey_bottom.png")
		var orderIdArray = [];
        var idIndex = [];
        var mode = $(this).attr("mode");
        var orderid = $(".Day_number");
        console.log(orderid)
        orderid.each(function(i){
           var id = parseFloat($(this).html()); 
           console.log(id)
           idIndex[id] = i;        //orderid的序号
           orderIdArray.push(id);  //orderid的值
        });
        
        if(mode == 1){
            $(this).attr("mode", 0);
            $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_orange_top.png")
            $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_grey_bottom.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序 
        } 
        
        else if(mode == 0){
            $(this).attr("mode", 1);
            $(".Day_highs_and_lows_imgb img").attr("src","../img/trading_center_orange_bottom.png")
            $(".Day_highs_and_lows_imga img").attr("src","../img/trading_center_grey_top.png")
            orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
        }
        
        var table_content_one=$("#table_content_one").find("tr");
        var _length = orderIdArray.length;
        
        for(var i=0;i<_length;i++){
        	$("#table_content_one").append(table_content_one.eq(idIndex[orderIdArray[i]]));
        }
        
	})*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
