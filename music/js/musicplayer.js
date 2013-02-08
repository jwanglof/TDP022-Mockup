$(document).ready(function () {
	$("#last_clicked").hide();
	$("#albuminfo").hide();

	$(".album").click(function() {
		var albuminfo = $("#albuminfo");
		var objectIndex = $(this).index() - 1;

		// Just hide if double tap
		if ($("#last_clicked").text() == objectIndex) {
			albuminfo.slideUp();
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
		var albumWidth = $(this).outerWidth(true);
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
		scrollTo($(this));
		albuminfo.slideDown();
	});

});


function scrollTo(element) {
	$('html, body').animate({
		scrollTop: element.offset().top - 50
	}, 1000);
};
