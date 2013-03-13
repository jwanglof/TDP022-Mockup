function search()
{	
	var text = document.getElementById("search_box").value;
	document.getElementById("speed").innerHTML="23 km/h";
	document.getElementById("dest").innerHTML="<button id=\"newdest\" onclick=\"doSearch()\">" + text + "</button>";

	var min = Math.floor((Math.random()*12)+1);
	var sec = Math.floor((Math.random()*60)+1);

	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var toaMin = minutes + min;
	if(toaMin > 59) {
		houres += 1;
		toaMin /= 60;
	}

	if(text.toLowerCase() == "bronx") {
		document.getElementById("speed").innerHTML="56 km/h";
	} 

	if(text.toLowerCase() == "harlem") {
		document.getElementById("eta").innerHTML="13 min and 37 sec";
		var toaMin = minutes + 13;
		var sec = 37; 
		if(toaMin > 59) {
			houres += 1;
			toaMin /= 60;
		}
		document.getElementById("toa").innerHTML=hours + ":" + toaMin + ":" + sec;
	} else {
		document.getElementById("eta").innerHTML= min + " min and " + sec + " sec"; 
		document.getElementById("toa").innerHTML= hours + ":" + toaMin + ":" + sec;
	}
}

function doSearch() {
    document.getElementById("dest").innerHTML= "<input type=\"text\" id=\"search_box\" value=\"\"/><button id=\"submitbtn\" onclick=\"search()\">GO</button>"
}