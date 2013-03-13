$(document).ready(function() {
	$("#movie-control").hide();
	$("#screen").hide();
	$("#screen > video").hide();

	$("#movie-trailer").click(function() {
		var trailer_link = $(this).attr("src");

		// Fade in the background
		$("#screen").fadeIn('slow', function() {
			// Load the trailer
			$("#screen > video").attr("src", trailer_link);
			$("#screen > video").attr("autoplay", "true");
			var video_player = $("#screen").get(0);

			setTimeout(function() {
				$("#screen > video").show();
			}, 1000);
		});
	});
});
