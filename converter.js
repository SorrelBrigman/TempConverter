//Take Value From Input Field

var inputElement = prompt("What is a temp?")
// var input = inputElement.value;
var input = parseInt(inputElement);
//When F button is pressed
var bF = document.getElementById("buttonF");
//call function

var toFahr = function() {
	//take value from input field
	//convert to F
	var newTempF = Math.round((((9/5)*input) + 32)*10)/10;
	//post new value for F to page
	var fH1 = document.getElementById("fahrenheit");
	var Ftext = document.createTextNode(newTempF + " degrees F");
	fH1.appendChild(Ftext);
}

bF.onclick = toFahr();
	//change color for temp

//When C button is pressed
var bC = document.getElementById("buttonC");
//call function
var toCel = function () {
	//take value from inpyt field
	//convert to C
	var newTempC = Math.round((((5/9)*input) - 32)*10)/10;
	//post new value for C to page
	var cH1 = document.getElementById("celsius");
	var Ctext = document.createTextNode(newTempC + " degrees C");
	cH1.appendChild(Ctext);
	
	//change color for temp
}
bC.onclick = toCel();
//If temp > 90F/32C text is red
//if temp < 32F/0C text is blue
//else text is green