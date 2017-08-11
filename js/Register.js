$(function(){
	
	
	
	createCode();
	function createCode() {
			code = '';
			var codeLength = 4;
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
			for(var i = 0; i < codeLength; i++) {
				var index = Math.floor(Math.random() * 36);
				code += random[index];
			}
			$('.regis_verification_img').text(code)
		}
		
	$("#switch_img").click(function(){
//		console.log(1)
		createCode()
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
