$(document).ready(function () {
	$("#shadow").css("height", $(document).height()).hide();

	$("#last_clicked").hide();
	$("#pause-button").hide();
	$("#albuminfo").hide();
	$("#albuminfo").insertAfter("#musiclibrary");

	// If you click outside the #albuminfo, hide the #shadow
	$("#shadow").click(function() {
		$(this).fadeOut();
		$("#last_clicked").text(-1);
		$("#albuminfo").hide();
	});

	// When the #albuminfo isn't used we need to move it
	$(".album").click(function() {
		var albuminfo = $("#albuminfo");
		var object = $(this);

		// Slide up before doing anything else
		$("#shadow").hide();
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

			// Fill the divs with relevant shit
			$("#albuminfo > img").attr('src', object.attr('src'));
	
			// If even number, set to green, else black
			/*if ((objectIndex % 2) == 1) {
				albuminfo.css("background", "green");
			}
			else {
				albuminfo.css("background", "red");
			}*/
	
			/*var bodyWidth = $('body').width();
			var albumWidth = object.outerWidth(true);
			var elementsOnRow = Math.floor(bodyWidth / albumWidth);
			var row = Math.floor(objectIndex / elementsOnRow) + 1;
			var index = (row * elementsOnRow) - 1;
			var appendOn = $('.album').get(index);
	
			// Move the albuminfo
			albuminfo.insertAfter(appendOn);*/
	
			// Set the index in the h1
			$("#last_clicked").text(objectIndex);

			// Dim the background
			$("#shadow").fadeIn();
	
			// Scroll to the elements and view the info div
			//scrollTo(object);
			$("#albuminfo").show();
			//albuminfo.slideDown();
		});
	});

	// Toggle play/pause
	$("#playToggle").click(function() {
		if ($(this).attr('src') == './img/play_button2.png')
			$(this).attr('src', './img/pause_button.png');
		else
			$(this).attr('src', './img/play_button2.png');
	});

	// Align everything in the middle on the #playercontrol
	/*
	$("#playercontrol").children().each(function(index, e) {
		var object = $("#playercontrol").children("div").eq(index);
		var padding = $("#playercontrol").outerHeight() / 2;
		padding -= ($(this).outerHeight() / 2);

		console.log(padding);
		$(this).css('margin-top', padding + 'px');
	});*/

});


function scrollTo(element) {
	$('html, body').animate({
		scrollTop: element.offset().top - 100
	}, 1000);
};
