function getPost(nem){
	$.ajax({
		type: "GET",
		url: "https://lemons305.github.io/blog/post/"+nem,
		success: function (res) {
			$('#mainContent').html(res);
		}
	});
}