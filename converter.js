//Take Value From Input Field

var inputElement = getElementById("tempInput");
var input = inputElement.value;
input = parseInt(input):
//When F button is pressed
var bF = document.getElementById("buttonF");
bF.onclick = //call function
	//take value from input field

	//convert to F
	newTempF = ((9/5)*input) + 32;
	//post new value for F to page
	var fH1 = document.getElementById("fahrenheit");
	var Ftext = document.createTextNode(newTempF + " degrees F");
	fH1.appendChild(Ftext);

	//post old value of C to page
	var cH1 = document.getElementById("celsius");
	var Ctext = document.createTextNode(input + " degrees C");
	cH1.appendChild(Ctext);
	//change color for temp

//When C button is pressed
var bC = document.getElementById("buttonC");
bC.onclick = //call function
	//take value from inpyt field
	//convert to C
	newTempC = ((5/9)*input) - 32;
	//post new value for C to page
	//post old value of F to page
	//change color for temp

//If temp > 90F/32C text is red
//if temp < 32F/0C text is blue
//else text is green