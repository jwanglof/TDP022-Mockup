var page_array = new Array();

function go_back() {
 console.log("Time to go to BACK. BACK TO THE FUUUUUUTUUUURE!!!!1111!1!11!!1!");
 hide_all_the_divs();

 if (page_array.length == 0) {
	$('#start_container').show();
	console.log("BaSJJASDJAD");
	return;
 }

 var popped_page = $(page_array.pop());
 console.log(page_array);
 popped_page.show();
};

function go_home() {
 console.log("Time to go to the home screen!");
 hide_all_the_divs();
 page_array = [];
 $("#start_container").show();
};

function hide_all_the_divs(except_div) {
 $("#gps-library").hide();
 $("#music-library").hide();
 $("#movie-library").hide();
 $("#settings").hide();
 $("#settings_options").hide();
 $("#gps").hide();

 $(except_div).show();
};

// Set keyhandler for emulating home- and back-buttons
/*$(document).keypress(function(event){
 var keycode = (event.keyCode ? event.keyCode : event.which);

 // H-key for home
 if (keycode == '72') {
	go_home();
 }

 // B-key for back
 if (keycode == '66') {
	go_back();
 }
});*/

$(document).ready(function () {
 // Hide the none used divs
 hide_all_the_divs();

 $("#phys_home").click(function() {
	go_home();
 });

 $("#phys_back").click(function() {
	go_back();
 });

 // Switch to the music page
 $("#music-option").click(function() {
	console.log("Going to the music library");

	// Change the background
	// $('body').addClass('music');

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

 $("#settings-option_login").click(function() {
	console.log("Going to settings > login window");

	hide_all_the_divs("#settings_options");

	// Add page to page_array to be able to go back
	page_array.push("#settings");

	$("#sharing").hide();
	$("#login").show();
 });

 $("#settings-option_sharing").click(function() {
	console.log("Going to settings > sharing window");

	hide_all_the_divs("#settings_options");

	// Add page to page_array to be able to go back
	page_array.push("#settings");

	$("#login").hide();
	$("#sharing").show();
 });

 // Switch to the GPS page
 $("#gps-option").click(function() {
	console.log("Going to the GPS");
	
	$("#container").children().hide();
	$("#gps").show();
 });

 // Set the awesome clock in the right corner. WOOOOOP WOOOP
 var d = new Date();
 $("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
 setInterval(function() {
	var d = new Date();
	$("#statusbar_clock").text(d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes());
 }, 5000);
});
