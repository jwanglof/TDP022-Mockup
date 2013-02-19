// Set keyhandler for emulating home- and back-buttons
$(document).keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);

	// H-key for home
	if (keycode == '72') {
		console.log("Time to go to the home screen!");

		// Hide all divs and show the right one
		$("#container").children().hide();
		$("body").removeClass();
		$("#start_container").show();
	}

	// B-key for back
	if (keycode == '66') {
		alert("Time to back off!");
	}
});

$(document).ready(function () {
	// Hide the none used divs
	$("#gps-library").hide();
	$("#music-library").hide();
	$("#movie-library").hide();
	$("#settings").hide();
	$("#gps").hide();

	// Switch to the music page
	$("#music-option").click(function() {
		console.log("Going to the music library");

		// Change the background
		$('body').addClass('music');

		// Hide all divs
		$("#container").children().hide();

		// Show the music page
		$("#music-library").show();
	});

	// Switch to the settings page
	$("#settings-option").click(function() {
		console.log("Going to the settings window");

		$("#container").children().hide();

		$("#settings").show();
	});

/*	$("#settings_login-option").click(function() {
		console.log("Going to settings > login window");

		$("#container").children().hide();

		$("#settings_login").show();
	});
	$("#settings_sharing-option").click(function() {
		console.log("Going to settings > sharing window");

		$("#container").children().hide();

		$("#settings_sharing").show();
	});*/

	// Switch to the GPS page
	$("#gps-option").click(function() {
		console.log("Going to the GPS");
	
		$("#container").children().hide();

	    $("#gps").show();
	});

	/*function hideDiw(except_div) {
		$("#container div").each(function(i) {
			var class_name = $(this).attr("class");
			if (class_name.toLowerCase().indexOf("container") >= 0
					&& class_name.toLowerCase().indexOf(except_div.toLowerCase())) {
				$("." + class_name).hide("fast");
				//alert(class_name);
			}
		});

		// Hide all divs except except_div
		$("." + except_div).show("fast");
		//alert("2" + except_div);
	}*/

	// Set the awesome clock in the right corner. WOOOOOP WOOOP
	var d = new Date();
	$("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
	setInterval(function() {
		var d = new Date();
		$("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
	}, 5000);

	/*hideDiw("start_container");
	
	$("a").click(function(event) {
		event.preventDefault();

		var name = $(this).attr("id");
		hideDiw(name);
	});*/

});
