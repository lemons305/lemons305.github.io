$(document).ready(function(){
	
})

function ucCc() {
	$.ajax({
		type: "GET",
		url: "https://lemons305.github.io/uc.html",
		success: function (res) {
			$('html').html(res);
		}
	});
}