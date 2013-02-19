function search()
{
    var text = document.getElementById("search_box").value;
    document.getElementById("derp").innerHTML="Destination: " + text;
    document.getElementById("search_box").value = "";
}