$( document ).ready(function() {
	$("button").click(function(e) {
		if($(".modal-form")[0].checkValidity()) {
			e.preventDefault();
			$.ajax({
				type: "POST",
				url: "https://digital-spectr.com/ac/academy.php",
				dataType: "html", 
				data: $(".modal-form").serialize(),
				success: function(result) {
					$('.modal').html("<p>"+result+"</p>");
				},
				error: function(result) {
					$('.modal').html("<p>"+result+"</p>");
				}
			});
		}
	});
});