document.write("hellow world");

function changeText(){
	// possibility - var oldtext= document.getElementById("int").innerHTML ="replace the text";
document.getElementById("int").innerHTML ="replace the text";
}

function changetextback() {
	document.getElementById("int").innerHTML = "text changed back muahaha;"
}



function fancytext(){
	document.getElementById("one").style.fontsize = "30px";
	document.getElementById("one").style.color = "blue";

	document.getElementById("two").style.color = "green";
	document.getElementById("two").style.marginLeft = "150px";

	document.getElementById("three").style.margineLeft = "150px";
	document.getElementById("three").style.color = "red";
	document.getElementById("three").style.textTransform = "uppercase";
}


// MATH BITCHES
var mathX;
mathX = 5;
var mathY = 7;
var someText = "thjis is my text variable";

console.log(mathX);
//this is to log/toruble shoot in console//
mathX = 69;
console.log(mathX);
// now u can see what is going on, varrible changed to 69//

function argExample(x,y){
	mathZ = x + y;
	document.getElementById("mathresult").innerHTML =mathZ;
//if NAN shows up, it means not a number and missing (x,y) (8,15) in the html
//basic addtion cald if button does math rather than INPUIT
}
