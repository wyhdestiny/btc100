//导航条北京变色
			(function(){
			  pos = 0;
			  ticking = false;
	//		  var header = document.querySelector("#nav");
			  window.addEventListener("scroll", function(e){
			    pos = window.scrollY;
			    if(pos > 110&&!ticking){
			      $("#nav").css("background","white").css("color","#333333").css("transition","1s");
//			       $("#nav a")css("color","#333333");
			      ticking = true;
			    }
			    if(pos < 110 && ticking){
			      $("#nav").css("background","rgba(0,0,0,.6)").css("color","#999999").css("transition","1s");;
			      ticking = false;
			    }
			  });
			})(window);
			//导航条固定
			$(document).ready(function() {
				//获取nav距离顶部的距离
				var navtop = $("#nav").offset().top;
				$(document).scroll(function() {
					//获取滚动条滚动的高度
					var scroltop = $(document).scrollTop();
					if(scroltop > navtop) {
						$("#nav").css({
							"position": "fixed",
							"left": "0px",
							"top": "0px",
							"width": "100%"
						})
					} else {
						$("#nav").css({
							"position": "",
							"left": "",
							"top": "",
							"width": ""
						})
					}
				})
			})