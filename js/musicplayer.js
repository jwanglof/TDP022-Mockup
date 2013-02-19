$(document).ready(function () {
	// Set height of shadow div and height on #albumtracks
	$("#shadow").css("height", $(document).height()).hide();
	$("#albumtracks").css("height", ($(document).height() - 455));

	// Load player with the one song that exists
	$("#music-url").attr("src", "tracks/ritd.mp3");
	document.getElementById('musicplayer').load();

	// Start the progress bar
	setInterval(function() {
		var player = document.getElementById('musicplayer');
		var currentTime = player.currentTime;
		var duration = player.duration;

		$("#duration_inner").css("width", (currentTime/duration) * 502);
	}, 100);

	// Look for clicks in the progressbar
	$("#duration_outer").click(function(e) {
		var percentage = (e.pageX - $("#duration_outer").offset().left) / 502;
		var player = document.getElementById('musicplayer');
		percentage *= player.duration;
		player.currentTime = percentage;
	});

	$("#last_clicked").hide();
	$("#pause-button").hide();
	$("#albuminfo").hide();
	$("#albuminfo").insertAfter("#musiclibrary");

	// If you click outside the #albuminfo, hide the #shadow
	$("#shadow").click(function() {
		$(this).fadeOut();
		$("#last_clicked").text(-1);
		$("#albuminfo").hide("slide", {direction: 'left'});
	});

	// Set track as playing
	$(".trackname").click(function() {
		console.log("Playing track");
		$(".playingtrack").removeClass("playingtrack");
		$(this).addClass("playingtrack");
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
	
			// Set the index in the h1
			$("#last_clicked").text(objectIndex);

			// Dim the background
			$("#shadow").fadeIn();
	
			// Scroll to the elements and view the info div
			//scrollTo(object);
			$("#albuminfo").show("slide", {direction: 'left'});
			//albuminfo.slideDown();
		});
	});

	// Toggle play/pause
	$("#playToggle").click(function() {
		if ($(this).attr('src') == './img/play_button2.png') {
			$(this).attr('src', './img/pause_button.png');
			document.getElementById('musicplayer').play();
			console.log(document.getElementById('musicplayer').currentTime);
		}
		else {
			$(this).attr('src', './img/play_button2.png');
			document.getElementById('musicplayer').pause();
			console.log(document.getElementById('musicplayer').duration);
		}
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
