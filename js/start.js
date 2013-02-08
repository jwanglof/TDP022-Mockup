$(document).ready(function () {
	setInterval(function() {
		var d = new Date();
		//$("#statusbar_clock").text(d.toLocaleTimeString());
		$("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
	}, 1000);

	$("a").click(function(event) {
		var href = $(this).attr("href");
		event.preventDefault();
		linkLocation = href;
		$("body").fadeOut(1, redirectPage);
		//$("body").slideDown("slow", redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});
