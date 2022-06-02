var b1 = document.getElementById("sansaus");
var b2 = document.getElementById("papyrusaus");
var b3= document.getElementById("gasteraus");
var b4= document.getElementById("tuatara");
var b5= document.getElementById("kiwibird");
var b6= document.getElementById("kakapo");


var image = document.getElementById ("SansAuGuide.jpg");

function changesansaus(){
	image.src = "sansauguide.jpg";
	}
function changepapyrusaus() {
	image.src= "papyrusaus.jpg";
}
function changegasteraus() {
	image.src= "augasters.jpg";
}
function changetuatara() {
	image.src="lizard.jpg";
}
function changekiwibird() {
image.src="kiwi.jpg";
}
function changekakapo() {
image.src="kakapo.jpg";
}
b1.addEventListener("click", changesansaus);
b2.addEventListener("click", changepapyrusaus);
b3.addEventListener("click", changegasteraus);
b4.addEventListener("click", changetuatara);
b5.addEventListener("click", changekiwibird);
b6.addEventListener("click", changekakapo);


image= document.getElementById("image")