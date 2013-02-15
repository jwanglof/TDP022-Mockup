// Set keyhandler for emulating home- and back-buttons
$(document).keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);

	// H-key for home
	if (keycode == '72') {
		alert("Time to go to the home screen!");
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

	// Switch to the music page
	$("#music-option").click(function() {
		console.log("Going to the music library");

		// Move the content of the content-div to outside and hide it
		$("#container > div").hide(function() {
			$("#container > div").insertAfter("#container");

			// Move in the music-library to the #container
			$("#container").prepend("#music-library");
			$("#music-library").show();
		});
	});


	// Switch to the GPS page
	$("#gps-option").click(function() {
		console.log("Going to the music library");
	
		// Move the content of the content-div to outside and hide it
		$("#container > div").hide(function() {
			$("#container > div").insertAfter("#container");
			
			// Move in the gps div to the #container
		});
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
