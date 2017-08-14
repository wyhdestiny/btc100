$(function(){
	
	
	var param=getParameter("param");
	var num=5;
	test(1, num, param);
})

	function getParameter(name) {
		var str = window.location.search;
	
		// 用正则表达式匹配参数
		var regStr = "[\\?&]{1}" + name + "=";
		var reg = new RegExp(regStr);
		if (reg.test(str)) {
			var pos_start = str.indexOf(name) + name.length + 1;
			var pos_end = str.indexOf("&", pos_start);
			return pos_end == -1 ? str.substring(pos_start) : str.substring(
					pos_start, pos_end);
		} else {
			return null;
		}
	}
	
	function test(curr, num, param){
		var html=new Array();
		var arr="";
		$.ajax({
			type:"get",
			url:"Paging.json",
			data:{
				"curr":curr,
				"num":num,
				"param":param
			},
			async:false,
			success:function(data){
				html=data.list;
				var total=data.total;
				console.log(html[0].uid)
				for(var i=0;i<html.length;i++){
					arr+="<div class='netNotice_list' onclick='details("+html[i].uid+")'><p class='notice_titleTime'><span class='notice_title'>"+html[i].uid+"</span><span class='notice_time'>"+html[i].noticeTime+"</span></p><p class='notice_details'>"+html[i].noticeContent+"</p></div>"
				}
				$(".notice_content").append(arr);
				console.log(data);
				 
				
				var pages=0;
				console.log(total)
				if(total%2>0){
					pages+=total/num+1;
				}else{
					pages+=total/num;
				}
				
				
				layui.use(['laypage','layer'],function(){
					var laypage = layui.laypage,
					    layer = layui.layer;
					     
					laypage({
					    cont: 'paging',
					    pages: pages,
					    groups: 10,
					    skin: '#E96328',
					    first: false,
					    last: false,
					    curr: curr || 1,
					    jump: function(obj, first){
					    	if(!first){
					    		$(".notice_content").empty();
					    		test(obj.curr, num);
					    	}
					    }
					 });
				})
				
			}
		});
	}
	

	function details(id){
		var url="details.html?id="+id;
//		$(".noticeContent iframe").attr("src",url);
//		alert("a")
		$('#iframePag', window.parent.document).attr("src",url);
//		window.parent.details(id);
	}
