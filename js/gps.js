function search()
{
    var text = document.getElementById("search_box").value;
    document.getElementById("dest").innerHTML="Destination: " + text;
    document.getElementById("search_box").value = "";
    
    var min = Math.floor((Math.random()*12)+1);
    var sec = Math.floor((Math.random()*60)+1);

    document.getElementById("eta").innerHTML="ETA: " + min + " min and " + sec + " sec";

}