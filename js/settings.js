$(document).ready(function () {
 $("#login_button").click(function() {
	if ($("#username").val().length > 0 && $("#password").val().length > 0)
	 alert("You have signed in");
	else
	 alert("You must specify your username and password!");
 });

 $("#fb_login_button").click(function() {
	if ($("#fb_username").val().length > 0 && $("#fb_password").val().length > 0)
	 alert("You have signed in to your Facebook account");
	else
	 alert("You must specify your Facebook username and password!");
 });

 $("#tw_login_button").click(function() {
	if ($("#tw_username").val().length > 0 && $("#tw_password").val().length > 0)
	 alert("You have signed in to your Twitter account");
	else
	 alert("You must specify your Twitter username and password!");
 });
});