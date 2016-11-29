//Take Value From Input Field
// var inputElement = prompt("Enter Temp");

// var input = inputElement.value;

//assign F button to var
var bF = document.getElementById("buttonF");
//assign C button to var
var bC = document.getElementById("buttonC");
// assign convert button to var
var conBut = document.getElementById("convert");
//assign reset button to var
var resetBut = document.getElementById("reset");


//create var to label answer div
var answerH1 = document.getElementById("answer");
// var for tempColor function
var low;
var high;
var actualTemp;

//tempColor function
var tempColor = function(high, low, actualTemp) {
	//If temp > 90F/32C text is red
	if (actualTemp > high) {
		console.log("red")
		answerH1.style.color = "red";
		//if temp < 32F/0C text is blue
	} else if (actualTemp < low) {
		console.log("blue")
		answerH1.style.color = "blue";
		//else text is green
	} else {
		console.log("green")
		answerH1.style.color = "green";
	}
}





//to F function
var toFahr = function() {
	event.preventDefault();
	//take value from input field
	var input = document.getElementById("tempInput").value;
	//convert to F
	var newTempF = Math.round((((9/5)*input) + 32) * 10)/10;
	//post new value for F to page

	var Ftext = document.createTextNode(newTempF + " degrees F");
	answerH1.appendChild(Ftext);
	
	//change color for temp
	tempColor(90, 32, newTempF);

}

//to C function
var toCel = function () {
	event.preventDefault();
	//take value from input field
	var input = document.getElementById("tempInput").value;

	//convert to C
	var newTempC = Math.round(((input - 32) * (5/9))*10)/10;
	//post new value for C to page
	var Ctext = document.createTextNode(newTempC + " degrees C");
	answerH1.appendChild(Ctext);	
	//change color for temp
	tempColor(32, 0, newTempC);
}

//Test value of selected buttons
var checkButtons = function() {
	if (bF.checked) {
			toCel();
		console.log("F");
	} else if (bC.checked) {
			toFahr();
		console.log("C");
	} else {
		alert("Please pick whether Celsius or Fahrenheit");
	}

}

//On Submit 
// var smiles = function() {alert(input);}
conBut.onclick = checkButtons;
// conBut.onclick = checkButtons;



