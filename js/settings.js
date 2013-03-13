$(document).ready(function () {
	//$(".settings_bar").hide();
	$("#login_button").click(function() {
		if ($("#username").val().length > 0 && $("#password").val().length > 0)
			$(".settings_bar").text("You have signed in to Snowslide");
		else
			$(".settings_bar").text("You must specify your username and password for your Snowslide account!");
		$(".settings_bar").show("fast");
	});

	$("#fb_login_button").click(function() {
		if ($("#fb_username").val().length > 0 && $("#fb_password").val().length > 0)
			$(".settings_bar").text("You have signed in to your Facebook account");
		else
			$(".settings_bar").text("You must specify your Facebook username and password!");
		$(".settings_bar").show("fast");
	});

	$("#tw_login_button").click(function() {
		if ($("#tw_username").val().length > 0 && $("#tw_password").val().length > 0)
			$(".settings_bar").text("You have signed in to your Twitter account");
		else
			$(".settings_bar").text("You must specify your Twitter username and password!");
		$(".settings_bar").show("fast");
	});
});