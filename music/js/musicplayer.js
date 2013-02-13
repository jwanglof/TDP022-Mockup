$(document).ready(function () {
	$("#last_clicked").hide();
	$("#albuminfo").hide();

	// When the #albuminfo isn't used we need to move it
	$(".album").click(function() {
		var albuminfo = $("#albuminfo");
		var object = $(this);

		// Slide up before doing anything else
		albuminfo.slideUp(function() {
			// Move it away from this div
			albuminfo.insertAfter("#musiclibrary");

			// Get a new index
			var objectIndex = object.index() - 1;

			// Just hide if double tap
			if ($("#last_clicked").text() == objectIndex) {
				$("#last_clicked").text(-1);
				return;
			}
	
			// If even number, set to green, else black
			if ((objectIndex % 2) == 1) {
				albuminfo.css("background", "green");
			}
			else {
				albuminfo.css("background", "red");
			}
	
			var bodyWidth = $('body').width();
			var albumWidth = object.outerWidth(true);
			var elementsOnRow = Math.floor(bodyWidth / albumWidth);
			var row = Math.floor(objectIndex / elementsOnRow) + 1;
			var index = (row * elementsOnRow) - 1;
			var appendOn = $('.album').get(index);
	
			// Move the albuminfo
			$("#last_clicked").text(objectIndex);
			albuminfo.insertAfter(appendOn);
	
			// Set the index in the h1
			$("#albuminfo").text(objectIndex);
	
			// Scroll to the elements and view the info div
			scrollTo(object);
			albuminfo.slideDown();
		});
	});

	// Toggle play/pause
	$("#playToggle").click(function() {
		if ($(this).attr('src') == './img/play_button.png')
			$(this).attr('src', './img/pause_button.png');
		else
			$(this).attr('src', './img/play_button.png');
	});

	// Align everything in the middle on the #playercontrol

});


function scrollTo(element) {
	$('html, body').animate({
		scrollTop: element.offset().top - 100
	}, 1000);
};
