function search()
{
    var text = document.getElementById("search_box").value;
    document.getElementById("speed").innerHTML="Speed: 23 km/h";
    document.getElementById("dest").innerHTML="Destination: " + text;
    document.getElementById("search_box").value = "";
    
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
        document.getElementById("speed").innerHTML="Speed: 56 km/h";
    }
    
    if(text.toLowerCase() == "harlem") {
        document.getElementById("eta").innerHTML="ETA: 13 min and 37 sec";
        var toaMin = minutes + 13;
        var sec = 37;
        if(toaMin > 59) {
            houres += 1;
            toaMin /= 60;
        }
        document.getElementById("toa").innerHTML="Time on arrival: " + hours + ":" + toaMin + ":" + sec;
    } else {
        document.getElementById("eta").innerHTML="ETA: " + min + " min and " + sec + " sec"; 
        document.getElementById("toa").innerHTML="Time on arrival: " + hours + ":" + toaMin + ":" + sec;
    }

}