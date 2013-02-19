$(document).ready(function () {
	$("#login_button").click(function() {
		if ($("#username").val().length > 0 && $("#password").val().length > 0) {
			alert("You have signed in");
		}
		else {
			alert("You must specify your username and password!");
		};
	});


});