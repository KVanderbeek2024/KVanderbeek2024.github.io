// JavaScript Document
var b1 = document.getElementById("image1");
var b2 = document.getElementById("image2");
var b3= document.getElementById("image3");
var b4= document.getElementById("image4");
var b5= document.getElementById("image5");
var b6= document.getElementById("image6");
var b7= document.getElementById("image7");
var b8= document.getElementById("image8");
var b9= document.getElementById("image9");
var b10= document.getElementById("image10");
var b11= document.getElementById("image11");

var image = document.getElementById ("image1.jpg");

function changeimage1(){
	image.src = "image1.jpg";
	}
function changeimage2() {
	image.src= "image2.jpg";
}
function changeimage3() {
	image.src= "image3.jpg";
}
function changeimage4() {
	image.src="image4.jpg";
}
function changeimage5() {
image.src="image5.jpg";
}
function changeimage6() {
image.src="image6.jpg";
}
function changeimage7() {
image.src="image7.jpg";
}
function changeimage8() {
image.src="image8.jpg";
}
function changeimage9() {
image.src="image9.jpg";
}
function changeimage10() {
image.src="image10.jpg";
}
function changeimage11() {
image.src="image11.jpg";
}
b1.addEventListener("click", changeimage1);
b2.addEventListener("click", changeimage2);
b3.addEventListener("click", changeimage3);
b4.addEventListener("click", changeimage4);
b5.addEventListener("click", changeimage5);
b6.addEventListener("click", changeimage6);
b7.addEventListener("click", changeimage7);
b8.addEventListener("click", changeimage8);
b9.addEventListener("click", changeimage9);
b10.addEventListener("click", changeimage10);
b11.addEventListener("click", changeimage11);



image= document.getElementById("image")