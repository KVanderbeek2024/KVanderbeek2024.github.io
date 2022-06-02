function checkq1() {
	if (document.getElementById("q1").value== "Coyote")
	{
	
		document.getElementById("q1result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q1result").innerHTML= "WRONG";
		
	}
}
document.getElementById("s1").addEventListener("click", checkq1);
function checkq2() {
	if (document.getElementById("q2").value=="Arctic/Tundra Wolf"){
	
		document.getElementById("q2result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q2result").innerHTML= "WRONG";
		
	}
}
document.getElementById("s2").addEventListener("click", checkq2);
function checkq3() {
	if (document.getElementById("q3").value=="Maned Wolf"){
	
		document.getElementById("q3result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q3result").innerHTML= "WRONG";
		
	}
}
document.getElementById("s3").addEventListener("click", checkq3);
			function checkq4() {
	if (document.getElementById("q4").value=="Gray Wolf"){
	
		document.getElementById("q4result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q4result").innerHTML= "WRONG";
		
	}
			}
document.getElementById("s4").addEventListener("click", checkq4);
				function checkq5() {
	if (document.getElementById("q5").value=="Arctic Fox"){
	
		document.getElementById("q5result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q5result").innerHTML= "WRONG";
		
	}
				}
document.getElementById("s5").addEventListener("click", checkq5);
					function checkq6() {
	if (document.getElementById("q6").value=="Red Fox"){
	
		document.getElementById("q6result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q6result").innerHTML= "WRONG";
		
	}
					}
document.getElementById("s6").addEventListener("click", checkq6);
						function checkq7() {
	if (document.getElementById("q7").value=="Raccoon Dog"){
	
		document.getElementById("q7result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q7result").innerHTML= "WRONG";
		
	}
						}
document.getElementById("s7").addEventListener("click", checkq7);
							function checkq8() {
	if (document.getElementById("q8").value=="Fennec Fox"){
	
		document.getElementById("q8result").innerHTML= "CORRECT";
	}
	else{
			document.getElementById("q8result").innerHTML= "WRONG";
		
	}
							}
document.getElementById("s8").addEventListener("click", checkq8);

var b1 = document.getElementById("image1");
var b2 = document.getElementById("image2");
var b3= document.getElementById("image3");
var b4= document.getElementById("image4");
var b5= document.getElementById("image5");
var b6= document.getElementById("image6");



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
image.src="kiwi.jpg";
}
function changeimage6() {
image.src="kakapo.jpg";
}
b1.addEventListener("click", changeimage1);
b2.addEventListener("click", changeimage2);
b3.addEventListener("click", changeimage3);
b4.addEventListener("click", changeimage4);
b5.addEventListener("click", changeimage5);
b6.addEventListener("click", changeimage6);