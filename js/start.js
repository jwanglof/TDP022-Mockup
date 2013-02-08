$(document).ready(function () {
	function hideDiw(except_div) {
		$("#container div").each(function(i) {
			var class_name = $(this).attr("class");
			if (class_name.toLowerCase().indexOf("container") >= 0
					&& class_name.toLowerCase().indexOf(except_div.toLowerCase())) {
				$("." + class_name).hide("fast");
				alert(class_name);
			}
		});

		$("." + except_div).show("fast");
		alert("2" + except_div);
	}

	// Set the awesome clock in the right corner. WOOOOOP WOOOP
	var d = new Date();
	$("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
	setInterval(function() {
		var d = new Date();
		$("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
	}, 5000);

	hideDiw("start_container");
	
	$("a").click(function(event) {
		event.preventDefault();

		var name = $(this).attr("id");
		hideDiw(name);
	});

});
