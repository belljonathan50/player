var path = window.location.pathname;
var page = path.split("/").pop();

zval = page.split(".");
let xval = zval[0];

let thispath = xval;
// let thissoundpath = "/audio/"+thispath +"/"+thistune;


document.write("<center><h1 id='title'></h1> <center>")
document.getElementById("title").innerHTML = thispath